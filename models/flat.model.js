module.exports = (sequelize, DataTypes) => {
    const Flat = sequelize.define("Flat", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        etaj: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        condition: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Flat.associate = (models) => {
        Flat.hasMany(models.CustomerAddress, {
            foreignKey: "flat_id",
            as: "addresses",
        });
    };

    return Flat;
};