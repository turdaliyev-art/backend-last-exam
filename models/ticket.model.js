module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define("Ticket", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        seat_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        service_fee: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ticket_type_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    Ticket.associate = (models) => {
        Ticket.belongsTo(models.Event, {
            foreignKey: "event_id",
            as: "event",
        });
        Ticket.belongsTo(models.TicketStatus, {
            foreignKey: "status_id",
            as: "status",
        });
        Ticket.belongsTo(models.Seat, {
            foreignKey: "seat_id",
            as: "seat",
        });
        Ticket.belongsTo(models.TicketType, {
            foreignKey: "ticket_type_id",
            as: "ticket_type",
        });
        Ticket.hasMany(models.CartItem, {
            foreignKey: "ticket_id",
            as: "cart_items",
        });
    };

    return Ticket;
};
