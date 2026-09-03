const { CartItem, Booking, Ticket } = require("../models");
const { validateCartItem, validateCartItemUpdate } = require("../validation/cartItemValidation");
const { Op } = require("sequelize");

exports.createCartItem = async (req, res) => {
    const { error } = validateCartItem(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const cartItem = await CartItem.create(req.body);
        res.status(201).send(cartItem);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getCartItems = async (req, res) => {
    try {
        const cartItems = await CartItem.findAll({
            include: [
                { model: Booking, as: "bookings" },
                { model: Ticket, as: "ticket" }
            ]
        });
        res.status(200).send(cartItems);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getCartItemById = async (req, res) => {
    try {
        const cartItem = await CartItem.findByPk(req.params.id, {
            include: [
                { model: Booking, as: "bookings" },
                { model: Ticket, as: "ticket" }
            ]
        });
        if (!cartItem) return res.status(404).send("cart item not found");
        res.status(200).send(cartItem);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateCartItem = async (req, res) => {
    const { error } = validateCartItemUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const cartItem = await CartItem.findByPk(req.params.id);
        if (!cartItem) return res.status(404).send("Cart item not found");

        await cartItem.update(req.body);
        res.status(200).send(cartItem);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteCartItem = async (req, res) => {
    try {
        const cartItem = await CartItem.findByPk(req.params.id);
        if (!cartItem) return res.status(404).send("cart item not found");

        const data = cartItem.toJSON();

        await cartItem.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};