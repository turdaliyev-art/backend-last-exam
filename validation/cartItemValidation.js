const Joi = require("joi");

const validateCartItem = (data) => {
    const schema = Joi.object({
        ticket_id: Joi.number().allow(null).required(),
        cart_id: Joi.number().allow(null).required(),
    });

    return schema.validate(data);
};

const validateCartItemUpdate = (data) => {
    const schema = Joi.object({
        ticket_id: Joi.number().allow(null).optional(),
        cart_id: Joi.number().allow(null).optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateCartItem,
    validateCartItemUpdate,
};