const { Region, District, Venue, CustomerAddress } = require("../models");
const { validateRegion, validateRegionUpdate } = require("../validation/regionValidation");
const { Op } = require("sequelize");

exports.createRegion = async (req, res) => {
    const { error } = validateRegion(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const region = await Region.create(req.body);
        res.status(201).send(region);
    } catch (err) {
        res.status(500).send(err.message || err);        
    }
};

exports.getRegions = async (req, res) => {
    try {
        const regions = await Region.findAll({
            include: [
                { model: District, as: "districts" },
                { model: Venue, as: "venues" },
                { model: CustomerAddress, as: "addresses" }
            ]
        });
        res.status(200).send(regions);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getRegionById = async (req, res) => {
    try {
        const region = await Region.findByPk(req.params.id, {
            include: [
                { model: District, as: "districts" },
                { model: Venue, as: "venues" },
                { model: CustomerAddress, as: "addresses" }
            ]
        });
        if (!region) return res.status(404).send("region not found");
        res.status(200).send(region);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateRegion = async (req, res) => {
    const { error } = validateRegionUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const region = await Region.findByPk(req.params.id);
        if (!region) return res.status(404).send("Region not found");

        await region.update(req.body);
        res.status(200).send(region);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteRegion = async (req, res) => {
    try {
        const region = await Region.findByPk(req.params.id);
        if (!region) return res.status(404).send("region not found");

        const data = region.toJSON();

        await region.destroy();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchRegions = async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const regions = await Region.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } }
                ]
            }
        });
        res.status(200).send(regions);
    } catch (err) {
        res.status(500).send(err.message);
    }
};