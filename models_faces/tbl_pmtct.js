const sequelize = require("../db_config_faces");
const Sequelize = require("sequelize");
const {UserFaces} = require("./tbl_users");

const PmtctFaces = sequelize.sequelize.define('tbl_pmtct', {
    id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    client_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'tbl_client',
            key: 'id'
        }
    },
    hei_no: {
        type: Sequelize.STRING(50),
        allowNull: true,
        unique: "hei_no"
    },
    type_of_care: {
        type: Sequelize.ENUM('Yes', 'No', 'Pregnant'),
        allowNull: true
    },
    hei_gender: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'tbl_gender',
            key: 'id'
        }
    },
    hei_dob: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    hei_first_name: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    hei_middle_name: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    hei_last_name: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    pcr_week6: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    pcr_month6: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    pcr_month12: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    appointment_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    },
    appointment_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    care_giver_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'tbl_caregiver_not_on_care',
            key: 'id'
        }
    },
    date_confirmed_positive: {
        type: Sequelize.DATEONLY,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'tbl_pmtct',
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
            name: "hei_no",
            unique: true,
            using: "BTREE",
            fields: [
                {name: "hei_no"},
            ]
        },
        {
            name: "hei_gender",
            using: "BTREE",
            fields: [
                {name: "hei_gender"},
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
            name: "appointment_id",
            using: "BTREE",
            fields: [
                {name: "appointment_id"},
            ]
        },
        {
            name: "care_giver_id",
            using: "BTREE",
            fields: [
                {name: "care_giver_id"},
            ]
        },
        {
            name: "tbl_pmtct_ibfk_1",
            using: "BTREE",
            fields: [
                {name: "client_id"},
            ]
        },
    ]
});

PmtctFaces.belongsTo(UserFaces, {foreignKey: "created_by"});

module.exports.PmtctFaces = PmtctFaces
