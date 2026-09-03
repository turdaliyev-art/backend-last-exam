module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("Event", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        start_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        finish_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        finish_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        info: {
            type: DataTypes.STRING,
            allowNull: true
        },
        event_type_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        human_category_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        venue_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        lang_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    Event.associate = (models) => {
        Event.hasMany(models.Ticket, {
            foreignKey: "event_id",
            as: "tickets",
        });
        Event.belongsTo(models.EventType, {
            foreignKey: "event_type_id",
            as: "event_type",
        });
        Event.belongsTo(models.HumanCategory, {
            foreignKey: "human_category_id",
            as: "human_category",
        });
        Event.belongsTo(models.Venue, {
            foreignKey: "venue_id",
            as: "venue",
        });
        Event.belongsTo(models.Lang, {
            foreignKey: "lang_id",
            as: "lang",
        });
    };

    return Event;
};