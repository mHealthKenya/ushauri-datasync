const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_clnt_outgoing', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    destination: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    source: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    msg: {
      type: DataTypes.STRING(300),
      allowNull: true
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
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.ENUM('Sent','Not Sent'),
      allowNull: true
    },
    responded: {
      type: DataTypes.ENUM('Yes','No','Other'),
      allowNull: true
    },
    message_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_message_types',
        key: 'id'
      }
    },
    content_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recepient_type: {
      type: DataTypes.ENUM('Client','User'),
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
    is_deleted: {
      type: DataTypes.ENUM('1','0'),
      allowNull: true,
      defaultValue: "0"
    },
    clnt_usr_id: {
      type: DataTypes.INTEGER,
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
    messageId: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_clnt_outgoing',
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
        name: "message_type_id",
        using: "BTREE",
        fields: [
          { name: "message_type_id" },
        ]
      },
      {
        name: "content_id",
        using: "BTREE",
        fields: [
          { name: "content_id" },
        ]
      },
      {
        name: "recepient_type",
        using: "BTREE",
        fields: [
          { name: "recepient_type" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "time_stamp",
        using: "BTREE",
        fields: [
          { name: "updated_at" },
        ]
      },
      {
        name: "msg",
        using: "BTREE",
        fields: [
          { name: "msg" },
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
        name: "source",
        using: "BTREE",
        fields: [
          { name: "source" },
        ]
      },
      {
        name: "clnt_usr_id",
        using: "BTREE",
        fields: [
          { name: "clnt_usr_id" },
        ]
      },
      {
        name: "date_added",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
    ]
  });
};
