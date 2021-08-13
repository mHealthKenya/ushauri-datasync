const sequelize = require("../db_config_faces");
const Sequelize = require("sequelize");
const {User} = require("./tbl_users");

const BroadcastFaces = sequelize.sequelize.define('tbl_broadcast', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Primiary key"
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    description: {
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
    deleted_at: {
      type: Sequelize.DATE,
      allowNull: true
    },
    status: {
      type: Sequelize.ENUM('Active','Disabled'),
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
    is_approved: {
      type: Sequelize.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: "No"
    },
    mfl_code: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    partner_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    message: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    broadcast_date: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    county_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    sub_county_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    reason: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    msg: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    target_group: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    group_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    time_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ushauri_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    db_source: {
      type: Sequelize.STRING(25),
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

BroadcastFaces.belongsTo(User, {foreignKey: "created_by"});

module.exports.BroadcastFaces = BroadcastFaces
