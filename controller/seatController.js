const { Seat, Sector, Venue, SeatType } = require("../models");
const { validateSeat, validateSeatUpdate } = require("../validation/seatValidation");
const { Op } = require("sequelize");

exports.createSeat = async (req, res) => {
    const { error } = validateSeat(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const seat = await Seat.create(req.body);
        res.status(201).send(seat);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getSeats = async (req, res) => {
    try {
        const seats = await Seat.findAll({
            include: [
                { model: Sector, as: "sector" },
                { model: Venue, as: "venue" },
                { model: SeatType, as: "seat_type" }
            ]
        });
        res.status(200).send(seats);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getSeatById = async (req, res) => {
    try {
        const seat = await Seat.findByPk(req.params.id, {
            include: [
                { model: Sector, as: "sector" },
                { model: Venue, as: "venue" },
                { model: SeatType, as: "seat_type" }
            ]
        });
        if (!seat) return res.status(404).send("seat not found");
        res.status(200).send(seat);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateSeat = async (req, res) => {
    const { error } = validateSeatUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const seat = await Seat.findByPk(req.params.id);
        if (!seat) return res.status(404).send("Seat not found");

        await seat.update(req.body);
        res.status(200).send(seat);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteSeat = async (req, res) => {
    try {
        const seat = await Seat.findByPk(req.params.id);
        if (!seat) return res.status(404).send("seat not found");

        const data = seat.toJSON();

        await seat.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};