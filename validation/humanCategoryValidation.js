const Joi = require("joi");

const validateHumanCategory = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
        start_age: Joi.number().required(),
        finish_age: Joi.number().required(),
        gender_id: Joi.number().allow(null).required(),
    });

    return schema.validate(data);
};

const validateHumanCategoryUpdate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).optional(),
        start_age: Joi.number().optional(),
        finish_age: Joi.number().optional(),
        gender_id: Joi.number().allow(null).optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateHumanCategory,
    validateHumanCategoryUpdate,
};