const { Country } = require("../models");
const { validateCountry, validateCountryUpdate } = require("../validation/countryValidation");
const { Op } = require("sequelize");

exports.createCountry = async (req, res) => {
    const { error } = validateCountry(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const country = await Country.create(req.body);
        res.status(201).send(country);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getCountries = async (req, res) => {
    try {
        const countries = await Country.findAll();
        res.status(200).send(countries);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getCountryById = async (req, res) => {
    try {
        const country = await Country.findByPk(req.params.id);
        if (!country) return res.status(404).send("country not found");
        res.status(200).send(country);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateCountry = async (req, res) => {
    const { error } = validateCountryUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const country = await Country.findByPk(req.params.id);
        if (!country) return res.status(404).send("Country not found");

        await country.update(req.body);
        res.status(200).send(country);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteCountry = async (req, res) => {
    try {
        const country = await Country.findByPk(req.params.id);
        if (!country) return res.status(404).send("country not found");

        const data = country.toJSON();

        await country.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchCountries = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const countries = await Country.findAll({
            where: {
                [Op.or]: [
                    { country_name: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(countries);
    } catch (err) {
        res.status(500).send(err.message);
    }
};