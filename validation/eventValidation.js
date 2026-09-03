const Joi = require("joi");

const validateEvent = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(150).required(),
        photo: Joi.string().optional(),
        start_date: Joi.date().required(),
        start_time: Joi.string().required(),
        finish_date: Joi.date().required(),
        finish_time: Joi.string().required(),
        info: Joi.string().optional(),
        event_type_id: Joi.number().allow(null).required(),
        human_category_id: Joi.number().allow(null).required(),
        venue_id: Joi.number().allow(null).required(),
        lang_id: Joi.number().allow(null).required(),
        release_date: Joi.date().required(),
    });

    return schema.validate(data);
};

const validateEventUpdate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(150).optional(),
        photo: Joi.string().optional(),
        start_date: Joi.date().optional(),
        start_time: Joi.string().optional(),
        finish_date: Joi.date().optional(),
        finish_time: Joi.string().optional(),
        info: Joi.string().optional(),
        event_type_id: Joi.number().allow(null).optional(),
        human_category_id: Joi.number().allow(null).optional(),
        venue_id: Joi.number().allow(null).optional(),
        lang_id: Joi.number().allow(null).optional(),
        release_date: Joi.date().optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateEvent,
    validateEventUpdate,
};