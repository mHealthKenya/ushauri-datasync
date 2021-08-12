const sequelize = require("../db_config_faces");
const Sequelize = require("sequelize");

const DFCFaces = sequelize.sequelize.define('tbl_dfc_module', {
    id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'tbl_client',
            key: 'id'
        }
    },
    duration_less: {
        type: Sequelize.ENUM('Well', 'Advanced'),
        allowNull: true
    },
    duration_more: {
        type: Sequelize.ENUM('Stable', 'Unstable'),
        allowNull: true
    },
    stability_status: {
        type: Sequelize.ENUM('DCM', 'NotDCM'),
        allowNull: true
    },
    facility_based: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'tbl_facility_based',
            key: 'id'
        }
    },
    community_based: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'tbl_community_model',
            key: 'id'
        }
    },
    refill_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    clinical_visit_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
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
    appointment_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'tbl_appointment',
            key: 'id'
        }
    },
    appointment_id_two: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'tbl_appointment',
            key: 'id'
        }
    }
}, {
    sequelize,
    tableName: 'tbl_dfc_module',
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
            name: "client_id",
            using: "BTREE",
            fields: [
                {name: "client_id"},
            ]
        },
        {
            name: "facility_based",
            using: "BTREE",
            fields: [
                {name: "facility_based"},
            ]
        },
        {
            name: "community_based",
            using: "BTREE",
            fields: [
                {name: "community_based"},
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
            name: "appointment_id_two",
            using: "BTREE",
            fields: [
                {name: "appointment_id_two"},
            ]
        },
    ]
});

module.exports.DFCFaces = DFCFaces
