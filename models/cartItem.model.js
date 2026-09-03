module.exports = (sequelize, DataTypes) => {
    const CartItem = sequelize.define("CartItem", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ticket_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    CartItem.associate = (models) => {
        CartItem.hasMany(models.Booking, {
            foreignKey: "cart_id",
            as: "bookings",
        });
        CartItem.belongsTo(models.Ticket, {
            foreignKey: "ticket_id",
            as: "ticket",
        });
    };

    return CartItem;
};
