const sequelize = require("../db_config");
const Sequelize = require("sequelize");
const {Clients} = require("./tbl_client");

const Transit = sequelize.sequelize.define(
    'tbl_transit_app',
    {
        id: {
            autoIncrement: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            comment: "Primary Key"
        },
        ccc_number: {
            type: Sequelize.DECIMAL(10, 0),
            allowNull: true
        },
        client_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        client_id_number: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        appointment_type_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        transit_facility: {
            type: Sequelize.DECIMAL(10, 0),
            allowNull: true
        },
        no_of_drugs: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        drugs_duration: {
            type: Sequelize.STRING(255),
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
        processed: {
            type: Sequelize.ENUM('No', 'Yes'),
            allowNull: true,
            defaultValue: "No"
        },
        ushauri_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        db_source: {
            type: Sequelize.STRING(255),
            allowNull: true
        }
    },
    {
        sequelize,
        tableName: 'tbl_transit_app',
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
        ]
    }
);

Transit.belongsTo(Clients, {foreignKey: "client_id"});

module.exports.Transit = Transit
