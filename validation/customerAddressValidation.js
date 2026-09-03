const Joi = require("joi");

const validateCustomerAddress = (data) => {
    const schema = Joi.object({
        customer_id: Joi.number().allow(null).required(),
        name: Joi.string().min(2).max(100).required(),
        region_id: Joi.number().allow(null).required(),
        district_id: Joi.number().allow(null).required(),
        street: Joi.string().optional(),
        house: Joi.string().optional(),
        flat_id: Joi.number().allow(null).optional(),
        location: Joi.string().optional(),
        post_index: Joi.string().optional(),
        info: Joi.string().optional(),
    });

    return schema.validate(data);
};

const validateCustomerAddressUpdate = (data) => {
    const schema = Joi.object({
        customer_id: Joi.number().allow(null).optional(),
        name: Joi.string().min(2).max(100).optional(),
        region_id: Joi.number().allow(null).optional(),
        district_id: Joi.number().allow(null).optional(),
        street: Joi.string().optional(),
        house: Joi.string().optional(),
        flat_id: Joi.number().allow(null).optional(),
        location: Joi.string().optional(),
        post_index: Joi.string().optional(),
        info: Joi.string().optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateCustomerAddress,
    validateCustomerAddressUpdate,
};