const { Flat, CustomerAddress } = require("../models");
const { validateFlat, validateFlatUpdate } = require("../validation/flatValidation");
const { Op } = require("sequelize");

exports.createFlat = async (req, res) => {
    const { error } = validateFlat(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const flat = await Flat.create(req.body);
        res.status(201).send(flat);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getFlats = async (req, res) => {
    try {
        const flats = await Flat.findAll({
            include: [
                { model: CustomerAddress, as: "addresses" }
            ]
        });
        res.status(200).send(flats);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getFlatById = async (req, res) => {
    try {
        const flat = await Flat.findByPk(req.params.id, {
            include: [
                { model: CustomerAddress, as: "addresses" }
            ]
        });
        if (!flat) return res.status(404).send("flat not found");
        res.status(200).send(flat);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateFlat = async (req, res) => {
    const { error } = validateFlatUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const flat = await Flat.findByPk(req.params.id);
        if (!flat) return res.status(404).send("Flat not found");

        await flat.update(req.body);
        res.status(200).send(flat);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteFlat = async (req, res) => {
    try {
        const flat = await Flat.findByPk(req.params.id);
        if (!flat) return res.status(404).send("flat not found");

        const data = flat.toJSON();

        await flat.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchFlats = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const flats = await Flat.findAll({
            where: {
                [Op.or]: [
                    { condition: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(flats);
    } catch (err) {
        res.status(500).send(err.message);
    }
};