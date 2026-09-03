const { CustomerAddress, Customer, Region, District, Flat } = require("../models");
const { validateCustomerAddress, validateCustomerAddressUpdate } = require("../validation/customerAddressValidation");
const { Op } = require("sequelize");

exports.createCustomerAddress = async (req, res) => {
    const { error } = validateCustomerAddress(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const address = await CustomerAddress.create(req.body);
        res.status(201).send(address);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getCustomerAddresses = async (req, res) => {
    try {
        const addresses = await CustomerAddress.findAll({
            include: [
                { model: Customer, as: "customer" },
                { model: Region, as: "region" },
                { model: District, as: "district" },
                { model: Flat, as: "flat" }
            ]
        });
        res.status(200).send(addresses);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getCustomerAddressById = async (req, res) => {
    try {
        const address = await CustomerAddress.findByPk(req.params.id, {
            include: [
                { model: Customer, as: "customer" },
                { model: Region, as: "region" },
                { model: District, as: "district" },
                { model: Flat, as: "flat" }
            ]
        });
        if (!address) return res.status(404).send("customer address not found");
        res.status(200).send(address);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateCustomerAddress = async (req, res) => {
    const { error } = validateCustomerAddressUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const address = await CustomerAddress.findByPk(req.params.id);
        if (!address) return res.status(404).send("Customer address not found");

        await address.update(req.body);
        res.status(200).send(address);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteCustomerAddress = async (req, res) => {
    try {
        const address = await CustomerAddress.findByPk(req.params.id);
        if (!address) return res.status(404).send("customer address not found");

        const data = address.toJSON();

        await address.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchCustomerAddresses = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const addresses = await CustomerAddress.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } },
                    { street: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(addresses);
    } catch (err) {
        res.status(500).send(err.message);
    }
};