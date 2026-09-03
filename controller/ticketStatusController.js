const { TicketStatus, Booking, Ticket } = require("../models");
const { validateTicketStatus, validateTicketStatusUpdate } = require("../validation/ticketStatusValidation");
const { Op } = require("sequelize");

exports.createTicketStatus = async (req, res) => {
    const { error } = validateTicketStatus(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const ticketStatus = await TicketStatus.create(req.body);
        res.status(201).send(ticketStatus);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getTicketStatuses = async (req, res) => {
    try {
        const ticketStatuses = await TicketStatus.findAll({
            include: [
                { model: Booking, as: "bookings" },
                { model: Ticket, as: "tickets" }
            ]
        });
        res.status(200).send(ticketStatuses);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getTicketStatusById = async (req, res) => {
    try {
        const ticketStatus = await TicketStatus.findByPk(req.params.id, {
            include: [
                { model: Booking, as: "bookings" },
                { model: Ticket, as: "tickets" }
            ]
        });
        if (!ticketStatus) return res.status(404).send("ticket status not found");
        res.status(200).send(ticketStatus);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateTicketStatus = async (req, res) => {
    const { error } = validateTicketStatusUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const ticketStatus = await TicketStatus.findByPk(req.params.id);
        if (!ticketStatus) return res.status(404).send("Ticket status not found");

        await ticketStatus.update(req.body);
        res.status(200).send(ticketStatus);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteTicketStatus = async (req, res) => {
    try {
        const ticketStatus = await TicketStatus.findByPk(req.params.id);
        if (!ticketStatus) return res.status(404).send("ticket status not found");

        const data = ticketStatus.toJSON();

        await ticketStatus.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchTicketStatuses = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const ticketStatuses = await TicketStatus.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(ticketStatuses);
    } catch (err) {
        res.status(500).send(err.message);
    }
};