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
        CartItem.belongsTo(models.Ticket, {
            foreignKey: "ticket_id",
            as: "ticket",
        });
        CartItem.belongsTo(models.Cart, {
            foreignKey: "cart_id",
            as: "cart",
        });
    };

    return CartItem;
};
