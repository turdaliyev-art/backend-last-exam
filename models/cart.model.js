module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        fineshedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        timestamps: true,
        updatedAt: false
    });

    Cart.associate = (models) => {
        Cart.belongsTo(models.Customer, {
            foreignKey: "customer_id",
            as: "customer",
        });
        Cart.hasMany(models.CartItem, {
            foreignKey: "cart_id",
            as: "cart_items",
        });
        Cart.hasMany(models.Booking, {
            foreignKey: "cart_id",
            as: "bookings",
        });
        Cart.belongsTo(models.TicketStatus, {
            foreignKey: "status_id",
            as: "status",
        });
    };

    return Cart;
};
