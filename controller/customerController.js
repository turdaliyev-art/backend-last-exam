const { Customer, CustomerCard, CustomerAddress, Cart, Booking } = require("../models");
const { validateCustomer, validateCustomerUpdate } = require("../validation/customerValidation");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const { createTokens, hashToken } = require("../utils/auth");

exports.createCustomer = async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const customer = await Customer.create({
            ...req.body,
            hashed_password: await bcrypt.hash(req.body.hashed_password, 10),
        });
        res.status(201).send(customer);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getCustomer = async (req, res) => {
    try {
        const customers = await Customer.findAll({
                include: [
                    { model: CustomerCard, as: "cards" },
                    { model: CustomerAddress, as: "addresses" },
                    { model: Cart, as: "carts" }
                ]
        });
        res.status(200).send(customers);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id, {
            include: [
                { model: CustomerCard, as: "cards" },
                { model: CustomerAddress, as: "addresses" },
                { model: Cart, as: "carts" }
            ]
        });
        if (!customer) return res.status(404).send("customer not found");
        res.status(200).send(customer);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateCustomer = async (req, res) => {
    const { error } = validateCustomerUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) return res.status(404).send("Customer not found");

        const updateData = { ...req.body };
        if (updateData.hashed_password) {
            updateData.hashed_password = await bcrypt.hash(updateData.hashed_password, 10);
        }
        await customer.update(updateData);
        res.status(200).send(customer);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (!customer) return res.status(404).send("customer not found");

        const customerData = customer.toJSON();

        await customer.destroy();
        res.status(200).send(customerData);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchCustomers = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const customers = await Customer.findAll({
            where: {
                [Op.or]: [
                    { first_name: { [Op.iLike]: `%${query}%` } },
                    { last_name: { [Op.iLike]: `%${query}%` } },
                    { email: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(customers);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.loginCustomer = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send("Email and password are required");

    try {
        const customer = await Customer.findOne({ where: { email } });
        if (!customer || !(await bcrypt.compare(password, customer.hashed_password))) {
            return res.status(401).send("Invalid email or password");
        }

        const tokens = createTokens({ id: customer.id, role: "customer" });
        await customer.update({ hashed_refresh_token: await hashToken(tokens.refreshToken) });
        res.status(200).send({
            ...tokens,
            customer: { id: customer.id, first_name: customer.first_name, last_name: customer.last_name, email: customer.email },
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
};