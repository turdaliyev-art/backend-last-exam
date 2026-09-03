const { CustomerCard, Customer } = require("../models");
const { validateCustomerCard, validateCustomerCardUpdate } = require("../validation/customerCardValidation");
const { Op } = require("sequelize");

exports.createCustomerCard = async (req, res) => {
    const { error } = validateCustomerCard(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const customerCard = await CustomerCard.create(req.body);
        res.status(201).send(customerCard);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getCustomerCards = async (req, res) => {
    try {
        const customerCards = await CustomerCard.findAll({
            include: [
                { model: Customer, as: "customer" }
            ]
        });
        res.status(200).send(customerCards);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getCustomerCardById = async (req, res) => {
    try {
        const customerCard = await CustomerCard.findByPk(req.params.id, {
            include: [
                { model: Customer, as: "customer" }
            ]
        });
        if (!customerCard) return res.status(404).send("customer card not found");
        res.status(200).send(customerCard);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateCustomerCard = async (req, res) => {
    const { error } = validateCustomerCardUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const customerCard = await CustomerCard.findByPk(req.params.id);
        if (!customerCard) return res.status(404).send("Customer card not found");

        await customerCard.update(req.body);
        res.status(200).send(customerCard);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteCustomerCard = async (req, res) => {
    try {
        const customerCard = await CustomerCard.findByPk(req.params.id);
        if (!customerCard) return res.status(404).send("customer card not found");

        const data = customerCard.toJSON();

        await customerCard.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchCustomerCards = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const customerCards = await CustomerCard.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } },
                    { number: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(customerCards);
    } catch (err) {
        res.status(500).send(err.message);
    }
};