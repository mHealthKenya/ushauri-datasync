const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_dfc_module', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tbl_client',
        key: 'id'
      }
    },
    duration_less: {
      type: DataTypes.ENUM('Well','Advanced'),
      allowNull: true
    },
    duration_more: {
      type: DataTypes.ENUM('Stable','Unstable'),
      allowNull: true
    },
    stability_status: {
      type: DataTypes.ENUM('DCM','NotDCM'),
      allowNull: true
    },
    facility_based: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_facility_based',
        key: 'id'
      }
    },
    community_based: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_community_model',
        key: 'id'
      }
    },
    refill_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    clinical_visit_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tbl_users',
        key: 'id'
      }
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_users',
        key: 'id'
      }
    },
    appointment_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_appointment',
        key: 'id'
      }
    },
    appointment_id_two: {
      type: DataTypes.INTEGER,
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
          { name: "id" },
        ]
      },
      {
        name: "client_id",
        using: "BTREE",
        fields: [
          { name: "client_id" },
        ]
      },
      {
        name: "facility_based",
        using: "BTREE",
        fields: [
          { name: "facility_based" },
        ]
      },
      {
        name: "community_based",
        using: "BTREE",
        fields: [
          { name: "community_based" },
        ]
      },
      {
        name: "created_by",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "updated_by",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "appointment_id",
        using: "BTREE",
        fields: [
          { name: "appointment_id" },
        ]
      },
      {
        name: "appointment_id_two",
        using: "BTREE",
        fields: [
          { name: "appointment_id_two" },
        ]
      },
    ]
  });
};
