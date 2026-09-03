const { Gender, Customer } = require("../models");
const { validateGender, validateGenderUpdate } = require("../validation/genderValidation");
const { Op } = require("sequelize");

exports.createGender = async (req, res) => {
    const { error } = validateGender(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const gender = await Gender.create(req.body);
        res.status(201).send(gender);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getGenders = async (req, res) => {
    try {
        const genders = await Gender.findAll({
            include: [
                { model: Customer, as: "customers" }
            ]
        });
        res.status(200).send(genders);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getGenderById = async (req, res) => {
    try {
        const gender = await Gender.findByPk(req.params.id, {
            include: [
                { model: Customer, as: "customers" }
            ]
        });
        if (!gender) return res.status(404).send("gender not found");
        res.status(200).send(gender);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateGender = async (req, res) => {
    const { error } = validateGenderUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const gender = await Gender.findByPk(req.params.id);
        if (!gender) return res.status(404).send("Gender not found");

        await gender.update(req.body);
        res.status(200).send(gender);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteGender = async (req, res) => {
    try {
        const gender = await Gender.findByPk(req.params.id);
        if (!gender) return res.status(404).send("gender not found");

        const data = gender.toJSON();

        await gender.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchGenders = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const genders = await Gender.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(genders);
    } catch (err) {
        res.status(500).send(err.message);
    }
};