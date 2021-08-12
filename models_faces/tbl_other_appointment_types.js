const sequelize = require("../db_config_faces");
const Sequelize = require("sequelize");
const {UserFaces} = require("./tbl_users");

const OtherAppTypeFaces = sequelize.sequelize.define('tbl_other_appointment_types', {
    id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(60),
        allowNull: true
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
    },
    created_by: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    updated_by: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    appointment_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'tbl_appointment',
            key: 'id'
        },
        unique: "appointment_id"
    }
}, {
    sequelize,
    tableName: 'tbl_other_appointment_types',
    timestamps: false,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                {name: "id"},
            ]
        },
        {
            name: "appointments",
            unique: true,
            using: "BTREE",
            fields: [
                {name: "appointment_id"},
            ]
        },
    ]
});

OtherAppTypeFaces.belongsTo(UserFaces, {foreignKey: "created_by"});

module.exports.OtherAppTypeFaces = OtherAppTypeFaces
