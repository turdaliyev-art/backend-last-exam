const { Venue, Region, District, Seat, VenuePhoto, VenueTypes } = require("../models");
const { validateVenue, validateVenueUpdate } = require("../validation/venueValidation");
const { Op } = require("sequelize");

exports.createVenue = async (req, res) => {
    const { error } = validateVenue(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const venue = await Venue.create(req.body);
        res.status(201).send(venue);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getVenues = async (req, res) => {
    try {
        const venues = await Venue.findAll({
            include: [
                { model: Region, as: "region" },
                { model: District, as: "district" },
                { model: Seat, as: "seats" },
                { model: VenuePhoto, as: "photos" },
                { model: VenueTypes, as: "venue_types" }
            ]
        });
        res.status(200).send(venues);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getVenueById = async (req, res) => {
    try {
        const venue = await Venue.findByPk(req.params.id, {
            include: [
                { model: Region, as: "region" },
                { model: District, as: "district" },
                { model: Seat, as: "seats" },
                { model: VenuePhoto, as: "photos" },
                { model: VenueTypes, as: "venue_types" }
            ]
        });
        if (!venue) return res.status(404).send("venue not found");
        res.status(200).send(venue);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateVenue = async (req, res) => {
    const { error } = validateVenueUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const venue = await Venue.findByPk(req.params.id);
        if (!venue) return res.status(404).send("Venue not found");

        await venue.update(req.body);
        res.status(200).send(venue);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteVenue = async (req, res) => {
    try {
        const venue = await Venue.findByPk(req.params.id);
        if (!venue) return res.status(404).send("venue not found");

        const data = venue.toJSON();

        await venue.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchVenues = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const venues = await Venue.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } },
                    { address: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(venues);
    } catch (err) {
        res.status(500).send(err.message);
    }
};