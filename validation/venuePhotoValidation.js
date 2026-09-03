const Joi = require("joi");

const validateVenuePhoto = (data) => {
    const schema = Joi.object({
        venueId: Joi.number().allow(null).required(),
        url: Joi.string().required(),
    });

    return schema.validate(data);
};

const validateVenuePhotoUpdate = (data) => {
    const schema = Joi.object({
        venueId: Joi.number().allow(null).optional(),
        url: Joi.string().optional(),
    });

    return schema.validate(data);
};

module.exports = {
    validateVenuePhoto,
    validateVenuePhotoUpdate,
};