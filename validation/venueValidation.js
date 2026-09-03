const Joi = require("joi");

const validateVenue = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(150).required(),
        address: Joi.string().min(2).max(255).required(),
        location: Joi.string().optional(),
        site: Joi.string().optional(),
        phone: Joi.string().optional(),
        schema: Joi.string().optional(),
        region_id: Joi.number().allow(null).required(),
        district_id: Joi.number().allow(null).required(),
    });

    return schema.validate(data);
};

const validateVenueUpdate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(150).optional(),
        address: Joi.string().min(2).max(255).optional(),
        location: Joi.string().optional(),
        site: Joi.string().optional(),
        phone: Joi.string().optional(),
        schema: Joi.string().optional(),
        region_id: Joi.number().allow(null).optional(),
        district_id: Joi.number().allow(null).optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateVenue,
    validateVenueUpdate,
};