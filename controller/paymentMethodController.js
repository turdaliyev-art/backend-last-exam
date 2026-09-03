const { PaymentMethod, Booking } = require("../models");
const { validatePaymentMethod, validatePaymentMethodUpdate } = require("../validation/paymentMethodValidation");
const { Op } = require("sequelize");

exports.createPaymentMethod = async (req, res) => {
    const { error } = validatePaymentMethod(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const paymentMethod = await PaymentMethod.create(req.body);
        res.status(201).send(paymentMethod);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getPaymentMethods = async (req, res) => {
    try {
        const paymentMethods = await PaymentMethod.findAll({
            include: [
                { model: Booking, as: "bookings" }
            ]
        });
        res.status(200).send(paymentMethods);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getPaymentMethodById = async (req, res) => {
    try {
        const paymentMethod = await PaymentMethod.findByPk(req.params.id, {
            include: [
                { model: Booking, as: "bookings" }
            ]
        });
        if (!paymentMethod) return res.status(404).send("payment method not found");
        res.status(200).send(paymentMethod);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updatePaymentMethod = async (req, res) => {
    const { error } = validatePaymentMethodUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const paymentMethod = await PaymentMethod.findByPk(req.params.id);
        if (!paymentMethod) return res.status(404).send("Payment method not found");

        await paymentMethod.update(req.body);
        res.status(200).send(paymentMethod);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deletePaymentMethod = async (req, res) => {
    try {
        const paymentMethod = await PaymentMethod.findByPk(req.params.id);
        if (!paymentMethod) return res.status(404).send("payment method not found");

        const data = paymentMethod.toJSON();

        await paymentMethod.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchPaymentMethods = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const paymentMethods = await PaymentMethod.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(paymentMethods);
    } catch (err) {
        res.status(500).send(err.message);
    }
};