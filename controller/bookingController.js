const { Booking, Cart, PaymentMethod, Discount, DeliveryMethod, TicketStatus } = require("../models");
const { validateBooking, validateBookingUpdate } = require("../validation/bookingValidation");
const { Op } = require("sequelize");

exports.createBooking = async (req, res) => {
    const { error } = validateBooking(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const booking = await Booking.create(req.body);
        res.status(201).send(booking);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll({
            include: [
                { model: Cart, as: "cart" },
                { model: PaymentMethod, as: "payment_method" },
                { model: Discount, as: "discount" },
                { model: DeliveryMethod, as: "delivery_method" },
                { model: TicketStatus, as: "status" }
            ]
        });
        res.status(200).send(bookings);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id, {
            include: [
                { model: Cart, as: "cart" },
                { model: PaymentMethod, as: "payment_method" },
                { model: Discount, as: "discount" },
                { model: DeliveryMethod, as: "delivery_method" },
                { model: TicketStatus, as: "status" }
            ]
        });
        if (!booking) return res.status(404).send("booking not found");
        res.status(200).send(booking);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateBooking = async (req, res) => {
    const { error } = validateBookingUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const booking = await Booking.findByPk(req.params.id);
        if (!booking) return res.status(404).send("Booking not found");

        await booking.update(req.body);
        res.status(200).send(booking);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (!booking) return res.status(404).send("booking not found");

        const bookingData = booking.toJSON();

        await booking.destroy();
        res.status(200).send(bookingData);
    } catch (err) {
        res.status(500).send(err.message);
    }
};