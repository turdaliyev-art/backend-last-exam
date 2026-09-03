const Joi = require("joi");

const validatePaymentMethod = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
    });

    return schema.validate(data);
};

const validatePaymentMethodUpdate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validatePaymentMethod,
    validatePaymentMethodUpdate,
};