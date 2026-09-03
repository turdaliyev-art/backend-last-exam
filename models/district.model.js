module.exports = (sequelize, DataTypes) => {
    const District = sequelize.define("District", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        region_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    District.associate = (models) => {
        District.belongsTo(models.Region, {
            foreignKey: "region_id",
            as: "region",
        });
        District.hasMany(models.Venue, {
            foreignKey: "district_id",
            as: "venues",
        });
        District.hasMany(models.CustomerAddress, {
            foreignKey: "district_id",
            as: "addresses",
        });
    };

    return District;
};