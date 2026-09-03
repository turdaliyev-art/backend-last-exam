const Joi = require("joi");

const validateSeat = (data) => {
    const schema = Joi.object({
        sector_id: Joi.number().allow(null).required(),
        row_number: Joi.number().required(),
        number: Joi.number().required(),
        venue_id: Joi.number().allow(null).required(),
        seat_type_id: Joi.number().allow(null).required(),
        location_in_schema: Joi.string().optional(),
    });

    return schema.validate(data);
};

const validateSeatUpdate = (data) => {
    const schema = Joi.object({
        sector_id: Joi.number().allow(null).optional(),
        row_number: Joi.number().optional(),
        number: Joi.number().optional(),
        venue_id: Joi.number().allow(null).optional(),
        seat_type_id: Joi.number().allow(null).optional(),
        location_in_schema: Joi.string().optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateSeat,
    validateSeatUpdate,
};