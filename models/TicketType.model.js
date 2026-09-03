module.exports = (sequelize, DataTypes) => {
    const TicketType = sequelize.define("TicketType", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ticket_type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    TicketType.associate = (models) => {
        TicketType.hasMany(models.Ticket, {
            foreignKey: "ticket_type_id",
            as: "tickets",
        });
    };

    return TicketType;
};