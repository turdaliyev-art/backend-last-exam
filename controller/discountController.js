const { Discount, Booking } = require("../models");
const { validateDiscount, validateDiscountUpdate } = require("../validation/discountValidation");
const { Op } = require("sequelize");

exports.createDiscount = async (req, res) => {
    const { error } = validateDiscount(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const discount = await Discount.create(req.body);
        res.status(201).send(discount);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getDiscounts = async (req, res) => {
    try {
        const discounts = await Discount.findAll({
            include: [
                { model: Booking, as: "bookings" }
            ]
        });
        res.status(200).send(discounts);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getDiscountById = async (req, res) => {
    try {
        const discount = await Discount.findByPk(req.params.id, {
            include: [
                { model: Booking, as: "bookings" }
            ]
        });
        if (!discount) return res.status(404).send("discount not found");
        res.status(200).send(discount);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateDiscount = async (req, res) => {
    const { error } = validateDiscountUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const discount = await Discount.findByPk(req.params.id);
        if (!discount) return res.status(404).send("Discount not found");

        await discount.update(req.body);
        res.status(200).send(discount);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteDiscount = async (req, res) => {
    try {
        const discount = await Discount.findByPk(req.params.id);
        if (!discount) return res.status(404).send("discount not found");

        const data = discount.toJSON();

        await discount.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchDiscounts = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const discounts = await Discount.findAll({
            where: {
                [Op.or]: [
                    { discount: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(discounts);
    } catch (err) {
        res.status(500).send(err.message);
    }
};