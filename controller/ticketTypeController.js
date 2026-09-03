const { TicketType, Ticket } = require("../models");
const { validateTicketType, validateTicketTypeUpdate } = require("../validation/ticketTypeValidation");
const { Op } = require("sequelize");

exports.createTicketType = async (req, res) => {
    const { error } = validateTicketType(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const ticketType = await TicketType.create(req.body);
        res.status(201).send(ticketType);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getTicketTypes = async (req, res) => {
    try {
        const ticketTypes = await TicketType.findAll({
            include: [
                { model: Ticket, as: "tickets" }
            ]
        });
        res.status(200).send(ticketTypes);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getTicketTypeById = async (req, res) => {
    try {
        const ticketType = await TicketType.findByPk(req.params.id, {
            include: [
                { model: Ticket, as: "tickets" }
            ]
        });
        if (!ticketType) return res.status(404).send("ticket type not found");
        res.status(200).send(ticketType);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateTicketType = async (req, res) => {
    const { error } = validateTicketTypeUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const ticketType = await TicketType.findByPk(req.params.id);
        if (!ticketType) return res.status(404).send("Ticket type not found");

        await ticketType.update(req.body);
        res.status(200).send(ticketType);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteTicketType = async (req, res) => {
    try {
        const ticketType = await TicketType.findByPk(req.params.id);
        if (!ticketType) return res.status(404).send("ticket type not found");

        const data = ticketType.toJSON();

        await ticketType.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchTicketTypes = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const ticketTypes = await TicketType.findAll({
            where: {
                [Op.or]: [
                    { ticket_type: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(ticketTypes);
    } catch (err) {
        res.status(500).send(err.message);
    }
};