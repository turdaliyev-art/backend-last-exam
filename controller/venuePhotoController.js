const { VenuePhoto, Venue } = require("../models");
const { validateVenuePhoto, validateVenuePhotoUpdate } = require("../validation/venuePhotoValidation");
const { Op } = require("sequelize");

exports.createVenuePhoto = async (req, res) => {
    const { error } = validateVenuePhoto(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const venuePhoto = await VenuePhoto.create(req.body);
        res.status(201).send(venuePhoto);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getVenuePhotos = async (req, res) => {
    try {
        const venuePhotos = await VenuePhoto.findAll({
            include: [
                { model: Venue, as: "venue" }
            ]
        });
        res.status(200).send(venuePhotos);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getVenuePhotoById = async (req, res) => {
    try {
        const venuePhoto = await VenuePhoto.findByPk(req.params.id, {
            include: [
                { model: Venue, as: "venue" }
            ]
        });
        if (!venuePhoto) return res.status(404).send("venue photo not found");
        res.status(200).send(venuePhoto);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateVenuePhoto = async (req, res) => {
    const { error } = validateVenuePhotoUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const venuePhoto = await VenuePhoto.findByPk(req.params.id);
        if (!venuePhoto) return res.status(404).send("Venue photo not found");

        await venuePhoto.update(req.body);
        res.status(200).send(venuePhoto);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteVenuePhoto = async (req, res) => {
    try {
        const venuePhoto = await VenuePhoto.findByPk(req.params.id);
        if (!venuePhoto) return res.status(404).send("venue photo not found");

        const data = venuePhoto.toJSON();

        await venuePhoto.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};