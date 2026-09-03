module.exports = (sequelize, DataTypes) => {
    const EventType = sequelize.define("EventType", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        parent_event_type_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    EventType.associate = (models) => {
        EventType.hasMany(models.Event, {
            foreignKey: "event_type_id",
            as: "events",
        });
    };

    return EventType;
};