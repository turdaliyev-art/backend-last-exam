const { HumanCategory, Event } = require("../models");
const { validateHumanCategory, validateHumanCategoryUpdate } = require("../validation/humanCategoryValidation");
const { Op } = require("sequelize");

exports.createHumanCategory = async (req, res) => {
    const { error } = validateHumanCategory(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const humanCategory = await HumanCategory.create(req.body);
        res.status(201).send(humanCategory);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getHumanCategories = async (req, res) => {
    try {
        const humanCategories = await HumanCategory.findAll({
            include: [
                { model: Event, as: "events" }
            ]
        });
        res.status(200).send(humanCategories);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getHumanCategoryById = async (req, res) => {
    try {
        const humanCategory = await HumanCategory.findByPk(req.params.id, {
            include: [
                { model: Event, as: "events" }
            ]
        });
        if (!humanCategory) return res.status(404).send("human category not found");
        res.status(200).send(humanCategory);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateHumanCategory = async (req, res) => {
    const { error } = validateHumanCategoryUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const humanCategory = await HumanCategory.findByPk(req.params.id);
        if (!humanCategory) return res.status(404).send("Human category not found");

        await humanCategory.update(req.body);
        res.status(200).send(humanCategory);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteHumanCategory = async (req, res) => {
    try {
        const humanCategory = await HumanCategory.findByPk(req.params.id);
        if (!humanCategory) return res.status(404).send("human category not found");

        const data = humanCategory.toJSON();

        await humanCategory.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchHumanCategories = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const humanCategories = await HumanCategory.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(humanCategories);
    } catch (err) {
        res.status(500).send(err.message);
    }
};