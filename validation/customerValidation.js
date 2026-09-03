const Joi = require("joi");

const validateCustomer = (data) => {
    const schema = Joi.object({
        first_name: Joi.string().min(2).max(50).required(),
        last_name: Joi.string().min(2).max(50).required(),
        phone: Joi.string().pattern(/^\+?[0-9]{9,15}$/).required(),
        hashed_password: Joi.string().min(6).required(),
        email: Joi.string().email().required(),
        birth_date: Joi.date().required(),
        gender_id: Joi.number().allow(null).required(),
        lang_id: Joi.number().allow(null).required(),
        hashed_refresh_token: Joi.string().optional(),
    });

    return schema.validate(data);
};

const validateCustomerUpdate = (data) => {
    const schema = Joi.object({
        first_name: Joi.string().min(2).max(50).optional(),
        last_name: Joi.string().min(2).max(50).optional(),
        phone: Joi.string().pattern(/^\+?[0-9]{9,15}$/).optional(),
        hashed_password: Joi.string().min(6).optional(),
        email: Joi.string().email().optional(),
        birth_date: Joi.date().optional(),
        gender_id: Joi.number().allow(null).optional(),
        lang_id: Joi.number().allow(null).optional(),
        hashed_refresh_token: Joi.string().optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateCustomer,
    validateCustomerUpdate,
};