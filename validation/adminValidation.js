const Joi = require("joi");

const validateAdmin = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(50).required(),
        login: Joi.string().min(3).max(50).required(),
        hashed_password: Joi.string().min(6).required(),
        is_active: Joi.boolean().optional(),
        is_creator: Joi.boolean().optional(),
        hashed_refresh_token: Joi.string().optional(),
    });

    return schema.validate(data);
};

const validateAdminUpdate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(50).optional(),
        login: Joi.string().min(3).max(50).optional(),
        hashed_password: Joi.string().min(6).optional(),
        is_active: Joi.boolean().optional(),
        is_creator: Joi.boolean().optional(),
        hashed_refresh_token: Joi.string().optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateAdmin,
    validateAdminUpdate,
};