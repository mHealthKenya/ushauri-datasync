const sequelize = require("../db_config");
const Sequelize = require("sequelize");
const {User} = require('../models_generated/tbl_users')

const CareGiver = sequelize.sequelize.define('tbl_caregiver_not_on_care',
    {
        id: {
            autoIncrement: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            comment: "care giver not on care for HEIs"
        },
        care_giver_fname: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        care_giver_mname: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        care_giver_lname: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        care_giver_gender: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'tbl_gender',
                key: 'id'
            }
        },
        care_giver_phone_number: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        hei_no: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        created_by: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'tbl_users',
                key: 'id'
            }
        },
        updated_by: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'tbl_users',
                key: 'id'
            }
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: true
        }
    },
    {
        sequelize,
        tableName: 'tbl_caregiver_not_on_care',
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
                name: "care_giver_gender",
                using: "BTREE",
                fields: [
                    {name: "care_giver_gender"},
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
                name: "hei_no",
                using: "BTREE",
                fields: [
                    {name: "hei_no"},
                ]
            },
        ]
    });

CareGiver.belongsTo(User, { foreignKey: "created_by" });

module.exports.CareGiver = CareGiver
