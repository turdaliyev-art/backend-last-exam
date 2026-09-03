const { Event, Ticket, EventType, HumanCategory } = require("../models");
const { validateEvent, validateEventUpdate } = require("../validation/eventValidation");
const { Op } = require("sequelize");

exports.createEvent = async (req, res) => {
    const { error } = validateEvent(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const event = await Event.create(req.body);
        res.status(201).send(event);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getEvents = async (req, res) => {
    try {
        const events = await Event.findAll({
            include: [
                { model: Ticket, as: "tickets" },
                { model: EventType, as: "event_type" },
                { model: HumanCategory, as: "human_category" }
            ]
        });
        res.status(200).send(events);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id, {
            include: [
                { model: Ticket, as: "tickets" },
                { model: EventType, as: "event_type" },
                { model: HumanCategory, as: "human_category" }
            ]
        });
        if (!event) return res.status(404).send("event not found");
        res.status(200).send(event);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateEvent = async (req, res) => {
    const { error } = validateEventUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) return res.status(404).send("Event not found");

        await event.update(req.body);
        res.status(200).send(event);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) return res.status(404).send("event not found");

        const data = event.toJSON();

        await event.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchEvents = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const events = await Event.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } },
                    { info: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(events);
    } catch (err) {
        res.status(500).send(err.message);
    }
};