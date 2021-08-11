const sequelize = require("../db_config_faces");
const Sequelize = require("sequelize");

const UserFaces = sequelize.sequelize.define(
    'tbl_users',
    {
        id: {
            autoIncrement: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            comment: "Primary key of the table"
        },
        f_name: {
            type: Sequelize.STRING(20),
            allowNull: true
        },
        m_name: {
            type: Sequelize.STRING(20),
            allowNull: true
        },
        l_name: {
            type: Sequelize.STRING(20),
            allowNull: true
        },
        dob: {
            type: Sequelize.STRING(15),
            allowNull: true
        },
        phone_no: {
            type: Sequelize.STRING(15),
            allowNull: true,
            unique: "phone_no"
        },
        e_mail: {
            type: Sequelize.STRING(30),
            allowNull: true
        },
        partner_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        facility_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        donor_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
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
        status: {
            type: Sequelize.ENUM('Active', 'Disabled'),
            allowNull: true,
            defaultValue: "Active"
        },
        password: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        first_access: {
            type: Sequelize.ENUM('Yes', 'No'),
            allowNull: true,
            defaultValue: "Yes"
        },
        access_level: {
            type: Sequelize.ENUM('Admin', 'Partner', 'Facility', 'Donor', 'County', 'Sub County'),
            allowNull: true
        },
        sms_enable: {
            type: Sequelize.ENUM('Yes', 'No'),
            allowNull: true
        },
        county_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        daily_report: {
            type: Sequelize.ENUM('Yes', 'No'),
            allowNull: true,
            defaultValue: "No"
        },
        weekly_report: {
            type: Sequelize.ENUM('Yes', 'No'),
            allowNull: true,
            defaultValue: "No"
        },
        monthly_report: {
            type: Sequelize.ENUM('Yes', 'No'),
            allowNull: true,
            defaultValue: "No"
        },
        month3_report: {
            type: Sequelize.ENUM('Yes', 'No'),
            allowNull: true,
            defaultValue: "No"
        },
        month6_report: {
            type: Sequelize.ENUM('Yes', 'No'),
            allowNull: true,
            defaultValue: "No"
        },
        Yearly_report: {
            type: Sequelize.ENUM('Yes', 'No'),
            allowNull: true,
            defaultValue: "No"
        },
        created_by: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        updated_by: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        last_pass_change: {
            type: Sequelize.DATEONLY,
            allowNull: true
        },
        view_client: {
            type: Sequelize.ENUM('Yes', 'No'),
            allowNull: true,
            defaultValue: "No"
        },
        subcounty_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        rcv_app_list: {
            type: Sequelize.ENUM('Yes', 'No'),
            allowNull: true,
            defaultValue: "No"
        },
        role_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'tbl_role',
                key: 'id'
            }
        },
        ushauri_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        db_source: {
            type: Sequelize.STRING(15),
            allowNull: true
        },
        clinic_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 5
        },
        deleted_at: {
            type: Sequelize.DATE,
            allowNull: true
        },
        email: {
            type: Sequelize.STRING(30),
            allowNull: true
        },
        remember_token: {
            type: Sequelize.STRING(255),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'tbl_users',
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
                name: "phone_no",
                unique: true,
                using: "BTREE",
                fields: [
                    {name: "phone_no"},
                ]
            },
            {
                name: "partner_id",
                using: "BTREE",
                fields: [
                    {name: "partner_id"},
                ]
            },
            {
                name: "facility_id",
                using: "BTREE",
                fields: [
                    {name: "facility_id"},
                ]
            },
            {
                name: "donor_id",
                using: "BTREE",
                fields: [
                    {name: "donor_id"},
                ]
            },
            {
                name: "county_id",
                using: "BTREE",
                fields: [
                    {name: "county_id"},
                ]
            },
            {
                name: "role_id",
                using: "BTREE",
                fields: [
                    {name: "role_id"},
                ]
            },
        ]
    });

module.exports.UserFaces = UserFaces