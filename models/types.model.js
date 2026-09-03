module.exports = (sequelize, DataTypes) => {
    const Types = sequelize.define("Types", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Types.associate = (models) => {
        Types.hasMany(models.VenueTypes, {
            foreignKey: "type_id",
            as: "venue_types",
        });
    };

    return Types;
};