const Joi = require("joi");

const validateBooking = (data) => {
    const schema = Joi.object({
        cart_id: Joi.number().allow(null).optional(),
        payment_method_id: Joi.number().allow(null).optional(),
        delivery_method_id: Joi.number().allow(null).optional(),
        discount_id: Joi.number().allow(null).optional(),
        status_id: Joi.number().allow(null).optional(),
        fineshed: Joi.date().optional(),
    });

    return schema.validate(data);
};

const validateBookingUpdate = (data) => {
    const schema = Joi.object({
        cart_id: Joi.number().allow(null).optional(),
        payment_method_id: Joi.number().allow(null).optional(),
        delivery_method_id: Joi.number().allow(null).optional(),
        discount_id: Joi.number().allow(null).optional(),
        status_id: Joi.number().allow(null).optional(),
        fineshed: Joi.date().optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateBooking,
    validateBookingUpdate,
};