const { Types, VenueTypes } = require("../models");
const { validateTypes, validateTypesUpdate } = require("../validation/typesValidation");
const { Op } = require("sequelize");

exports.createTypes = async (req, res) => {
    const { error } = validateTypes(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const types = await Types.create(req.body);
        res.status(201).send(types);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getTypes = async (req, res) => {
    try {
        const typesList = await Types.findAll({
            include: [
                { model: VenueTypes, as: "venue_types" }
            ]
        });
        res.status(200).send(typesList);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getTypesById = async (req, res) => {
    try {
        const types = await Types.findByPk(req.params.id, {
            include: [
                { model: VenueTypes, as: "venue_types" }
            ]
        });
        if (!types) return res.status(404).send("types not found");
        res.status(200).send(types);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateTypes = async (req, res) => {
    const { error } = validateTypesUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const types = await Types.findByPk(req.params.id);
        if (!types) return res.status(404).send("Types not found");

        await types.update(req.body);
        res.status(200).send(types);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteTypes = async (req, res) => {
    try {
        const types = await Types.findByPk(req.params.id);
        if (!types) return res.status(404).send("types not found");

        const data = types.toJSON();

        await types.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchTypes = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const typesList = await Types.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(typesList);
    } catch (err) {
        res.status(500).send(err.message);
    }
};