const Joi = require("joi");

const validateCustomerCard = (data) => {
    const schema = Joi.object({
        customer_id: Joi.number().allow(null).required(),
        name: Joi.string().required(),
        phone: Joi.string().required(),
        number: Joi.string().required(),
        year: Joi.string().required(),
        month: Joi.string().required(),
        is_active: Joi.boolean().optional(),
        is_main: Joi.boolean().optional(),
    });

    return schema.validate(data);
};

const validateCustomerCardUpdate = (data) => {
    const schema = Joi.object({
        customer_id: Joi.number().allow(null).optional(),
        name: Joi.string().optional(),
        phone: Joi.string().optional(),
        number: Joi.string().optional(),
        year: Joi.string().optional(),
        month: Joi.string().optional(),
        is_active: Joi.boolean().optional(),
        is_main: Joi.boolean().optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateCustomerCard,
    validateCustomerCardUpdate,
};
