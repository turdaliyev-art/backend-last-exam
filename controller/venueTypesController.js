const { VenueTypes, Venue, Types } = require("../models");
const { validateVenueTypes, validateVenueTypesUpdate } = require("../validation/venueTypesValidation");
const { Op } = require("sequelize");

exports.createVenueTypes = async (req, res) => {
    const { error } = validateVenueTypes(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const venueTypes = await VenueTypes.create(req.body);
        res.status(201).send(venueTypes);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getVenueTypesList = async (req, res) => {
    try {
        const venueTypesList = await VenueTypes.findAll({
            include: [
                { model: Venue, as: "venue" },
                { model: Types, as: "type" }
            ]
        });
        res.status(200).send(venueTypesList);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getVenueTypesById = async (req, res) => {
    try {
        const venueTypes = await VenueTypes.findByPk(req.params.id, {
            include: [
                { model: Venue, as: "venue" },
                { model: Types, as: "type" }
            ]
        });
        if (!venueTypes) return res.status(404).send("venue types not found");
        res.status(200).send(venueTypes);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateVenueTypes = async (req, res) => {
    const { error } = validateVenueTypesUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const venueTypes = await VenueTypes.findByPk(req.params.id);
        if (!venueTypes) return res.status(404).send("Venue types not found");

        await venueTypes.update(req.body);
        res.status(200).send(venueTypes);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteVenueTypes = async (req, res) => {
    try {
        const venueTypes = await VenueTypes.findByPk(req.params.id);
        if (!venueTypes) return res.status(404).send("venue types not found");

        const data = venueTypes.toJSON();

        await venueTypes.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};