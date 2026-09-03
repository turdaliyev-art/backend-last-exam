const Joi = require("joi");

const validateTicketStatus = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
    });

    return schema.validate(data);
};

const validateTicketStatusUpdate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateTicketStatus,
    validateTicketStatusUpdate,
};