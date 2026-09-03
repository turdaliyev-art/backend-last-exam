const Joi = require("joi");

const validateDistrict = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
        region_id: Joi.number().allow(null).required(),
    });

    return schema.validate(data);
};

const validateDistrictUpdate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).optional(),
        region_id: Joi.number().allow(null).optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateDistrict,
    validateDistrictUpdate,
};