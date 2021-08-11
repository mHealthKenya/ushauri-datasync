const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_sms_queue', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    destination: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    sms_datetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sms_status: {
      type: DataTypes.ENUM('Not Sent','Sent'),
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
    source: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    msg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    broadcast_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    broadcast_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    clnt_usr_id: {
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
    mfl_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Active','Disabled'),
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
    tableName: 'tbl_sms_queue',
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
        name: "broadcast_id",
        using: "BTREE",
        fields: [
          { name: "broadcast_id" },
        ]
      },
    ]
  });
};
