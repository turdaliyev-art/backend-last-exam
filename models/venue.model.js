module.exports = (sequelize, DataTypes) => {
    const Venue = sequelize.define("Venue", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        site: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        schema: {
            type: DataTypes.STRING,
            allowNull: true
        },
        region_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        district_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    Venue.associate = (models) => {
        Venue.belongsTo(models.Region, {
            foreignKey: "region_id",
            as: "region",
        });
        Venue.belongsTo(models.District, {
            foreignKey: "district_id",
            as: "district",
        });
        Venue.hasMany(models.Seat, {
            foreignKey: "venue_id",
            as: "seats",
        });
        Venue.hasMany(models.VenuePhoto, {
            foreignKey: "venue_id",
            as: "photos",
        });
        Venue.hasMany(models.VenueTypes, {
            foreignKey: "venue_id",
            as: "venue_types",
        });
    };

    return Venue;
};
