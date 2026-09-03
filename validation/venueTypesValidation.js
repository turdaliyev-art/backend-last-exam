const Joi = require("joi");

const validateVenueTypes = (data) => {
    const schema = Joi.object({
        venueId: Joi.number().allow(null).required(),
        typeId: Joi.number().allow(null).required(),
    });

    return schema.validate(data);
};

const validateVenueTypesUpdate = (data) => {
    const schema = Joi.object({
        venueId: Joi.number().allow(null).optional(),
        typeId: Joi.number().allow(null).optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateVenueTypes,
    validateVenueTypesUpdate,
};