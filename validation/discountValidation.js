const Joi = require("joi");

const validateDiscount = (data) => {
    const schema = Joi.object({
        discount: Joi.string().required(),
        finish_date: Joi.date().required(),
    });

    return schema.validate(data);
};

const validateDiscountUpdate = (data) => {
    const schema = Joi.object({
        discount: Joi.string().optional(),
        finish_date: Joi.date().optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateDiscount,
    validateDiscountUpdate,
};