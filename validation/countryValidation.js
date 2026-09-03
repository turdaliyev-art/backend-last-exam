const Joi = require("joi");

const validateCountry = (data) => {
    const schema = Joi.object({
        country_name: Joi.string().min(2).max(100).required(),
    });

    return schema.validate(data);
};

const validateCountryUpdate = (data) => {
    const schema = Joi.object({
        country_name: Joi.string().min(2).max(100).optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateCountry,
    validateCountryUpdate,
};