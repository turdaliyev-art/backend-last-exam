module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("Booking", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: true    
        },
        payment_method_id: {
            type: DataTypes.INTEGER,
            allowNull: true    
        },
        delivery_method_id: {
            type: DataTypes.INTEGER,
            allowNull: true    
        },
        discount_id: {
            type: DataTypes.INTEGER,
            allowNull: true    
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: true    
        },
    },{
        timestamps: true,
    });

    Booking.associate = (models) => {
        Booking.belongsTo(models.Cart, {
            foreignKey: "cart_id",
            as: "cart",
        })
        Booking.belongsTo(models.PaymentMethod, {
            foreignKey: "payment_method_id",
            as: "payment_method",
        })
        Booking.belongsTo(models.Discount, {
            foreignKey: "discount_id",
            as: "discount",
        })
        Booking.belongsTo(models.DeliveryMethod, {
            foreignKey: "delivery_method_id",
            as: "delivery_method",
        })
        Booking.belongsTo(models.TicketStatus, {
            foreignKey: "status_id",
            as: "status",
        })

    }
    return Booking;
};