const sequelize = require("../db_config_faces");
const Sequelize = require("sequelize");
const {UserFaces} = require("./tbl_users");

const OtherFnlOutcomeFaces = sequelize.sequelize.define('tbl_other_final_outcome', {
    id: {
        autoIncrement: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    outcome: {
        type: Sequelize.TEXT,
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
    client_outcome_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'tbl_clnt_outcome',
            key: 'id'
        }
    },
    appointment_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'tbl_appointment',
            key: 'id'
        }
    }
}, {
    sequelize,
    tableName: 'tbl_other_final_outcome',
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
            name: "app",
            using: "BTREE",
            fields: [
                {name: "appointment_id"},
            ]
        },
        {
            name: "cln",
            using: "BTREE",
            fields: [
                {name: "client_outcome_id"},
            ]
        },
        {
            name: "created_by",
            using: "BTREE",
            fields: [
                {name: "created_by"},
            ]
        },
    ]
});

OtherFnlOutcomeFaces.belongsTo(UserFaces, {foreignKey: "created_by"});

module.exports.OtherFnlOutcomeFaces = OtherFnlOutcomeFaces
