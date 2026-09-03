module.exports = (sequelize, DataTypes) => {
    const VenueTypes = sequelize.define("VenueTypes", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        venue_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    VenueTypes.associate = (models) => {
        VenueTypes.belongsTo(models.Venue, {
            foreignKey: "venue_id",
            as: "venue",
        });
        VenueTypes.belongsTo(models.Types, {
            foreignKey: "type_id",
            as: "type",
        });
    };

    return VenueTypes;
};