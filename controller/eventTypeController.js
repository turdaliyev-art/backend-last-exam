const { EventType, Event } = require("../models");
const { validateEventType, validateEventTypeUpdate } = require("../validation/eventTypeValidation");
const { Op } = require("sequelize");

exports.createEventType = async (req, res) => {
    const { error } = validateEventType(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const eventType = await EventType.create(req.body);
        res.status(201).send(eventType);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getEventTypes = async (req, res) => {
    try {
        const eventTypes = await EventType.findAll({
            include: [
                { model: Event, as: "events" }
            ]
        });
        res.status(200).send(eventTypes);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getEventTypeById = async (req, res) => {
    try {
        const eventType = await EventType.findByPk(req.params.id, {
            include: [
                { model: Event, as: "events" }
            ]
        });
        if (!eventType) return res.status(404).send("event type not found");
        res.status(200).send(eventType);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateEventType = async (req, res) => {
    const { error } = validateEventTypeUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const eventType = await EventType.findByPk(req.params.id);
        if (!eventType) return res.status(404).send("Event type not found");

        await eventType.update(req.body);
        res.status(200).send(eventType);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteEventType = async (req, res) => {
    try {
        const eventType = await EventType.findByPk(req.params.id);
        if (!eventType) return res.status(404).send("event type not found");

        const data = eventType.toJSON();

        await eventType.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchEventTypes = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const eventTypes = await EventType.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(eventTypes);
    } catch (err) {
        res.status(500).send(err.message);
    }
};