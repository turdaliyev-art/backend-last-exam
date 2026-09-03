module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define("Country", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        country_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Country;
};