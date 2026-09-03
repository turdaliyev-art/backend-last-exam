const { Lang, Customer } = require("../models");
const { validateLang, validateLangUpdate } = require("../validation/langValidation");
const { Op } = require("sequelize");

exports.createLang = async (req, res) => {
    const { error } = validateLang(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const lang = await Lang.create(req.body);
        res.status(201).send(lang);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getLangs = async (req, res) => {
    try {
        const langs = await Lang.findAll({
            include: [
                { model: Customer, as: "customers" }
            ]
        });
        res.status(200).send(langs);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getLangById = async (req, res) => {
    try {
        const lang = await Lang.findByPk(req.params.id, {
            include: [
                { model: Customer, as: "customers" }
            ]
        });
        if (!lang) return res.status(404).send("lang not found");
        res.status(200).send(lang);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateLang = async (req, res) => {
    const { error } = validateLangUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const lang = await Lang.findByPk(req.params.id);
        if (!lang) return res.status(404).send("Lang not found");

        await lang.update(req.body);
        res.status(200).send(lang);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteLang = async (req, res) => {
    try {
        const lang = await Lang.findByPk(req.params.id);
        if (!lang) return res.status(404).send("lang not found");

        const data = lang.toJSON();

        await lang.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchLangs = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const langs = await Lang.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(langs);
    } catch (err) {
        res.status(500).send(err.message);
    }
};