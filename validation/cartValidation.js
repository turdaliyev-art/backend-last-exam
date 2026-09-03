const Joi = require("joi");

const validateCart = (data) => {
    const schema = Joi.object({
        customer_id: Joi.number().allow(null).required(),
        status_id: Joi.number().allow(null).required(),
        fineshedAt: Joi.date().optional(),
    });

    return schema.validate(data);
};

const validateCartUpdate = (data) => {
    const schema = Joi.object({
        customer_id: Joi.number().allow(null).optional(),
        status_id: Joi.number().allow(null).optional(),
        fineshedAt: Joi.date().optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateCart,
    validateCartUpdate,
};