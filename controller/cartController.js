const { Cart, Customer, CartItem, TicketStatus } = require("../models");
const { validateCart, validateCartUpdate } = require("../validation/cartValidation");
const { Op } = require("sequelize");

exports.createCart = async (req, res) => {
    const { error } = validateCart(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const cart = await Cart.create(req.body);
        res.status(201).send(cart);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getCarts = async (req, res) => {
    try {
        const carts = await Cart.findAll({
            include: [
                { model: Customer, as: "customer" },
                { model: CartItem, as: "cart_items" },
                { model: TicketStatus, as: "status" }
            ]
        });
        res.status(200).send(carts);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getCartById = async (req, res) => {
    try {
        const cart = await Cart.findByPk(req.params.id, {
            include: [
                { model: Customer, as: "customer" },
                { model: CartItem, as: "cart_items" },
                { model: TicketStatus, as: "status" }
            ]
        });
        if (!cart) return res.status(404).send("cart not found");
        res.status(200).send(cart);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateCart = async (req, res) => {
    const { error } = validateCartUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const cart = await Cart.findByPk(req.params.id);
        if (!cart) return res.status(404).send("Cart not found");

        await cart.update(req.body);
        res.status(200).send(cart);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteCart = async (req, res) => {
    try {
        const cart = await Cart.findByPk(req.params.id);
        if (!cart) return res.status(404).send("cart not found");

        const data = cart.toJSON();

        await cart.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};