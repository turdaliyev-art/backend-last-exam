const Joi = require("joi");

const validateFlat = (data) => {
    const schema = Joi.object({
        etaj: Joi.number().required(),
        condition: Joi.string().required(),
    });

    return schema.validate(data);
};

const validateFlatUpdate = (data) => {
    const schema = Joi.object({
        etaj: Joi.number().optional(),
        condition: Joi.string().optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateFlat,
    validateFlatUpdate,
};