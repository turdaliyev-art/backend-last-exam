module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("Customer", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hashed_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birth_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        gender_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        lang_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        hashed_refresh_token: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Customer.associate = (models) => {
        Customer.hasMany(models.Cart, {
            foreignKey: "customer_id",
            as: "carts",
        });
        Customer.hasMany(models.CustomerCard, {
            foreignKey: "customer_id",
            as: "cards",
        });
        Customer.hasMany(models.CustomerAddress, {
            foreignKey: "customer_id",
            as: "addresses",
        });
        Customer.belongsTo(models.Gender, {
            foreignKey: "gender_id",
            as: "gender",
        });
        Customer.belongsTo(models.Lang, {
            foreignKey: "lang_id",
            as: "lang",
        });
    };

    return Customer;
};