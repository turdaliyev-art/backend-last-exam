const Joi = require("joi");

const validateGender = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(50).required(),
    });

    return schema.validate(data);
};

const validateGenderUpdate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(50).optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateGender,
    validateGenderUpdate,
};