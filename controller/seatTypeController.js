const { SeatType, Seat } = require("../models");
const { validateSeatType, validateSeatTypeUpdate } = require("../validation/seatTypeValidation");
const { Op } = require("sequelize");

exports.createSeatType = async (req, res) => {
    const { error } = validateSeatType(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const seatType = await SeatType.create(req.body);
        res.status(201).send(seatType);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getSeatTypes = async (req, res) => {
    try {
        const seatTypes = await SeatType.findAll({
            include: [
                { model: Seat, as: "seats" }
            ]
        });
        res.status(200).send(seatTypes);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getSeatTypeById = async (req, res) => {
    try {
        const seatType = await SeatType.findByPk(req.params.id, {
            include: [
                { model: Seat, as: "seats" }
            ]
        });
        if (!seatType) return res.status(404).send("seat type not found");
        res.status(200).send(seatType);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateSeatType = async (req, res) => {
    const { error } = validateSeatTypeUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const seatType = await SeatType.findByPk(req.params.id);
        if (!seatType) return res.status(404).send("Seat type not found");

        await seatType.update(req.body);
        res.status(200).send(seatType);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteSeatType = async (req, res) => {
    try {
        const seatType = await SeatType.findByPk(req.params.id);
        if (!seatType) return res.status(404).send("seat type not found");

        const data = seatType.toJSON();

        await seatType.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchSeatTypes = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const seatTypes = await SeatType.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(seatTypes);
    } catch (err) {
        res.status(500).send(err.message);
    }
};