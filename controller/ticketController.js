const { Ticket, Event, TicketStatus, CartItem, Seat, TicketType } = require("../models");
const { validateTicket, validateTicketUpdate } = require("../validation/ticketValidation");
const { Op } = require("sequelize");

exports.createTicket = async (req, res) => {
    const { error } = validateTicket(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const ticket = await Ticket.create(req.body);
        res.status(201).send(ticket);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.findAll({
            include: [
                { model: Event, as: "event" },
                { model: TicketStatus, as: "status" },
                { model: CartItem, as: "cart_items" },
                { model: Seat, as: "seat" },
                { model: TicketType, as: "ticket_type" }
            ]
        });
        res.status(200).send(tickets);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getTicketById = async (req, res) => {
    try {
        const ticket = await Ticket.findByPk(req.params.id, {
            include: [
                { model: Event, as: "event" },
                { model: TicketStatus, as: "status" },
                { model: CartItem, as: "cart_items" },
                { model: Seat, as: "seat" },
                { model: TicketType, as: "ticket_type" }
            ]
        });
        if (!ticket) return res.status(404).send("ticket not found");
        res.status(200).send(ticket);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateTicket = async (req, res) => {
    const { error } = validateTicketUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const ticket = await Ticket.findByPk(req.params.id);
        if (!ticket) return res.status(404).send("Ticket not found");

        await ticket.update(req.body);
        res.status(200).send(ticket);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByPk(req.params.id);
        if (!ticket) return res.status(404).send("ticket not found");

        const data = ticket.toJSON();

        await ticket.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};