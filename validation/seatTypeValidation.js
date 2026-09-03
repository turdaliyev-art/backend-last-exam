const Joi = require("joi");

const validateSeatType = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
    });

    return schema.validate(data);
};

const validateSeatTypeUpdate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateSeatType,
    validateSeatTypeUpdate,
};