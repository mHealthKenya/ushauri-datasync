const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_partner_facility', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mfl_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      references: {
        model: 'tbl_master_facility',
        key: 'code'
      },
      unique: "tbl_partner_facility_ibfk_4"
    },
    status: {
      type: DataTypes.ENUM('Active','Disabled'),
      allowNull: true
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    sub_county_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_sub_county',
        key: 'id'
      }
    },
    county_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_county',
        key: 'id'
      }
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_approved: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: "No"
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    avg_clients: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ushauri_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    db_source: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    master_facility_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_partner_facility',
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
        name: "mfl_code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mfl_code" },
        ]
      },
      {
        name: "partner_id",
        using: "BTREE",
        fields: [
          { name: "partner_id" },
        ]
      },
      {
        name: "sub_county_id",
        using: "BTREE",
        fields: [
          { name: "sub_county_id" },
        ]
      },
      {
        name: "county_id",
        using: "BTREE",
        fields: [
          { name: "county_id" },
        ]
      },
    ]
  });
};
