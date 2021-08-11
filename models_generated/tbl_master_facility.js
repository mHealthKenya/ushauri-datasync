const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_master_facility', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Table PK"
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "code"
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reg_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    keph_level: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    facility_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    owner: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    regulatory_body: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    beds: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cots: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    county_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_county',
        key: 'id'
      }
    },
    consituency_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_consituency',
        key: 'id'
      }
    },
    Sub_County_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_sub_county',
        key: 'id'
      }
    },
    Ward_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_ward',
        key: 'id'
      }
    },
    operational_status: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Open_whole_day: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Open_public_holidays: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Open_weekends: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Open_late_night: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Service_names: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Approved: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Public_visible: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Closed: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    assigned: {
      type: DataTypes.ENUM('1','0'),
      allowNull: true,
      defaultValue: "0"
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lng: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ushauri_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    db_source: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_master_facility',
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
        name: "code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "facility_type",
        using: "BTREE",
        fields: [
          { name: "facility_type" },
        ]
      },
      {
        name: "county_id",
        using: "BTREE",
        fields: [
          { name: "county_id" },
        ]
      },
      {
        name: "Sub_County_ID",
        using: "BTREE",
        fields: [
          { name: "Sub_County_ID" },
        ]
      },
      {
        name: "Ward_id",
        using: "BTREE",
        fields: [
          { name: "Ward_id" },
        ]
      },
      {
        name: "Approved",
        using: "BTREE",
        fields: [
          { name: "Approved" },
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
        name: "assigned",
        using: "BTREE",
        fields: [
          { name: "assigned" },
        ]
      },
      {
        name: "consituency_id",
        using: "BTREE",
        fields: [
          { name: "consituency_id" },
        ]
      },
    ]
  });
};
