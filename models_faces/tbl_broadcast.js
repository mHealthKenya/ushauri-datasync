const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_broadcast', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Primiary key"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
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
    status: {
      type: DataTypes.ENUM('Active','Disabled'),
      allowNull: true
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
    mfl_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    broadcast_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    county_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sub_county_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    msg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    target_group: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    time_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ushauri_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    db_source: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "Database source ushauri or t4a"
    }
  }, {
    sequelize,
    tableName: 'tbl_broadcast',
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
        name: "MFL Code",
        using: "BTREE",
        fields: [
          { name: "mfl_code" },
        ]
      },
      {
        name: "Partner ID",
        using: "BTREE",
        fields: [
          { name: "partner_id" },
        ]
      },
      {
        name: "County ID",
        using: "BTREE",
        fields: [
          { name: "county_id" },
        ]
      },
      {
        name: "Sub County ID",
        using: "BTREE",
        fields: [
          { name: "sub_county_id" },
        ]
      },
      {
        name: "Group ID",
        using: "BTREE",
        fields: [
          { name: "group_id" },
        ]
      },
      {
        name: "Time ID",
        using: "BTREE",
        fields: [
          { name: "time_id" },
        ]
      },
    ]
  });
};
