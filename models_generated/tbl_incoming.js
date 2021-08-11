const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_incoming', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    source: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    destination: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    msg: {
      type: DataTypes.STRING(500),
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
      type: DataTypes.ENUM('Active'),
      allowNull: true,
      defaultValue: "Active"
    },
    senttime: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    receivedtime: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reference: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    processed: {
      type: DataTypes.ENUM('Processed','Not Processed'),
      allowNull: true,
      defaultValue: "Not Processed"
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    linkId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    msg_id: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ushauri_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    db_source: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    date: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_incoming',
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
        name: "source_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "source" },
          { name: "msg" },
        ]
      },
      {
        name: "source",
        using: "BTREE",
        fields: [
          { name: "source" },
        ]
      },
      {
        name: "destination",
        using: "BTREE",
        fields: [
          { name: "destination" },
        ]
      },
      {
        name: "msg",
        using: "BTREE",
        fields: [
          { name: "msg" },
        ]
      },
    ]
  });
};
