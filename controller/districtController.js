const { District, Region, Venue, CustomerAddress } = require("../models");
const { validateDistrict, validateDistrictUpdate } = require("../validation/districtValidation");
const { Op } = require("sequelize");

exports.createDistrict = async (req, res) => {
    const { error } = validateDistrict(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const district = await District.create(req.body);
        res.status(201).send(district);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getDistricts = async (req, res) => {
    try {
        const districts = await District.findAll({
            include: [
                { model: Region, as: "region" },
                { model: Venue, as: "venues" },
                { model: CustomerAddress, as: "addresses" }
            ]
        });
        res.status(200).send(districts);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getDistrictById = async (req, res) => {
    try {
        const district = await District.findByPk(req.params.id, {
            include: [
                { model: Region, as: "region" },
                { model: Venue, as: "venues" },
                { model: CustomerAddress, as: "addresses" }
            ]
        });
        if (!district) return res.status(404).send("district not found");
        res.status(200).send(district);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateDistrict = async (req, res) => {
    const { error } = validateDistrictUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const district = await District.findByPk(req.params.id);
        if (!district) return res.status(404).send("District not found");

        await district.update(req.body);
        res.status(200).send(district);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteDistrict = async (req, res) => {
    try {
        const district = await District.findByPk(req.params.id);
        if (!district) return res.status(404).send("district not found");

        const data = district.toJSON();

        await district.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchDistricts = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const districts = await District.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(districts);
    } catch (err) {
        res.status(500).send(err.message);
    }
};