const sequelize = require("../db_config_faces");
const Sequelize = require("sequelize");
const {ClientsFaces} = require('../models_faces/tbl_client')

const AppointmentFaces = sequelize.sequelize.define('tbl_appointment', {
    id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "primary column for table appointment"
    },
    client_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: "Foreign key to table client",
        references: {
            model: 'tbl_client',
            key: 'id'
        }
    },
    appntmnt_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    appntmnt_status: {
        type: Sequelize.STRING(15),
        allowNull: true
    },
    app_type_1: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 6,
        comment: "Foreign key to table appointment types",
        references: {
            model: 'tbl_appointment_types',
            key: 'id'
        }
    },
    app_type_2: {
        type: Sequelize.STRING(5),
        allowNull: true
    },
    expln_app: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    custom_txt: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    app_status: {
        type: Sequelize.ENUM('Booked', 'Notified', 'Missed', 'Defaulted', 'LTFU'),
        allowNull: true,
        defaultValue: "Booked"
    },
    sent_flag: {
        type: Sequelize.ENUM('1', '0'),
        allowNull: true
    },
    group_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    message_type_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    language_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    app_msg: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    status: {
        type: Sequelize.ENUM('Active', 'Disabled'),
        allowNull: true,
        defaultValue: "Active"
    },
    notified: {
        type: Sequelize.ENUM('Yes', 'No'),
        allowNull: true
    },
    sent_status: {
        type: Sequelize.ENUM('Booked Sent', 'Notified Sent', 'Missed Sent', 'Default Sent', 'Not Sent', 'LTFU Sent', 'Sent', 'Missed Updated'),
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
    entry_point: {
        type: Sequelize.ENUM('Mobile', 'Web'),
        allowNull: true
    },
    appointment_kept: {
        type: Sequelize.ENUM('Yes', 'No'),
        allowNull: true
    },
    active_app: {
        type: Sequelize.ENUM('1', '0'),
        allowNull: true,
        defaultValue: "1"
    },
    reason: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    no_calls: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    no_msgs: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    home_visits: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    fnl_trcing_outocme: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    fnl_outcome_dte: {
        type: Sequelize.DATE,
        allowNull: true
    },
    other_trcing_outcome: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    visit_type: {
        type: Sequelize.ENUM('Scheduled', 'Un-Scheduled', 'Re-Scheduled'),
        allowNull: true
    },
    unscheduled_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    tracer_name: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    date_attended: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    ENTITY_NUMBER: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    ENTITY: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    APPOINTMENT_REASON: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    APPOINTMENT_LOCATION: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    fnl_trcing_outcome: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    db_source: {
        type: Sequelize.STRING(25),
        allowNull: true,
        comment: "Data source  from Ushauri or T4A"
    },
    ushauri_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    t4a_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'tbl_appointment',
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
            name: "group_id",
            using: "BTREE",
            fields: [
                {name: "group_id"},
            ]
        },
        {
            name: "message_type_id",
            using: "BTREE",
            fields: [
                {name: "message_type_id"},
            ]
        },
        {
            name: "language_id",
            using: "BTREE",
            fields: [
                {name: "language_id"},
            ]
        },
        {
            name: "client_id",
            using: "BTREE",
            fields: [
                {name: "client_id"},
            ]
        },
        {
            name: "active_app",
            using: "BTREE",
            fields: [
                {name: "active_app"},
            ]
        },
        {
            name: "created_by",
            using: "BTREE",
            fields: [
                {name: "created_by"},
            ]
        },
        {
            name: "updated_by",
            using: "BTREE",
            fields: [
                {name: "updated_by"},
            ]
        },
        {
            name: "app_type_1",
            using: "BTREE",
            fields: [
                {name: "app_type_1"},
            ]
        },
        {
            name: "created_at",
            using: "BTREE",
            fields: [
                {name: "created_at"},
            ]
        },
        {
            name: "tbl_appointment_UN",
            using: "BTREE",
            fields: [
                {name: "client_id"},
                {name: "appntmnt_date"},
                {name: "app_type_1"},
            ]
        },
    ]
});

AppointmentFaces.belongsTo(ClientsFaces, {foreignKey: "client_id"});

module.exports.AppointmentFaces = AppointmentFaces