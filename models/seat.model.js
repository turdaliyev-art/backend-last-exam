module.exports = (sequelize, DataTypes) => {
    const Seat = sequelize.define("Seat", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        sector_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        row_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        venue_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        seat_type_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        location_in_schema: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Seat.associate = (models) => {
        Seat.belongsTo(models.Sector, {
            foreignKey: "sector_id",
            as: "sector",
        });
        Seat.belongsTo(models.Venue, {
            foreignKey: "venue_id",
            as: "venue",
        });
        Seat.belongsTo(models.SeatType, {
            foreignKey: "seat_type_id",
            as: "seat_type",
        });
    };

    return Seat;
};