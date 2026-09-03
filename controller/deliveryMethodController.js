const { DeliveryMethod, Booking } = require("../models");
const { validateDeliveryMethod, validateDeliveryMethodUpdate } = require("../validation/deliveryMethodValidation");
const { Op } = require("sequelize");

exports.createDeliveryMethod = async (req, res) => {
    const { error } = validateDeliveryMethod(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const deliveryMethod = await DeliveryMethod.create(req.body);
        res.status(201).send(deliveryMethod);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getDeliveryMethods = async (req, res) => {
    try {
        const deliveryMethods = await DeliveryMethod.findAll({
            include: [
                { model: Booking, as: "bookings" }
            ]
        });
        res.status(200).send(deliveryMethods);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getDeliveryMethodById = async (req, res) => {
    try {
        const deliveryMethod = await DeliveryMethod.findByPk(req.params.id, {
            include: [
                { model: Booking, as: "bookings" }
            ]
        });
        if (!deliveryMethod) return res.status(404).send("delivery method not found");
        res.status(200).send(deliveryMethod);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateDeliveryMethod = async (req, res) => {
    const { error } = validateDeliveryMethodUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const deliveryMethod = await DeliveryMethod.findByPk(req.params.id);
        if (!deliveryMethod) return res.status(404).send("Delivery method not found");

        await deliveryMethod.update(req.body);
        res.status(200).send(deliveryMethod);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteDeliveryMethod = async (req, res) => {
    try {
        const deliveryMethod = await DeliveryMethod.findByPk(req.params.id);
        if (!deliveryMethod) return res.status(404).send("delivery method not found");

        const data = deliveryMethod.toJSON();

        await deliveryMethod.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchDeliveryMethods = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const deliveryMethods = await DeliveryMethod.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(deliveryMethods);
    } catch (err) {
        res.status(500).send(err.message);
    }
};