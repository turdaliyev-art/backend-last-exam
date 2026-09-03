const Joi = require("joi");

const validateTicket = (data) => {
    const schema = Joi.object({
        event_id: Joi.number().allow(null).required(),
        seat_id: Joi.number().allow(null).required(),
        price: Joi.number().required(),
        service_fee: Joi.number().required(),
        status_id: Joi.number().allow(null).required(),
        ticket_type_id: Joi.number().allow(null).required(),
    });

    return schema.validate(data);
};

const validateTicketUpdate = (data) => {
    const schema = Joi.object({
        event_id: Joi.number().allow(null).optional(),
        seat_id: Joi.number().allow(null).optional(),
        price: Joi.number().optional(),
        service_fee: Joi.number().optional(),
        status_id: Joi.number().allow(null).optional(),
        ticket_type_id: Joi.number().allow(null).optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateTicket,
    validateTicketUpdate,
};