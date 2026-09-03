const Joi = require("joi");

const validateEventType = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
        parent_event_type_id: Joi.number().optional(),
    });

    return schema.validate(data);
};

const validateEventTypeUpdate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).optional(),
        parent_event_type_id: Joi.number().optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateEventType,
    validateEventTypeUpdate,
};