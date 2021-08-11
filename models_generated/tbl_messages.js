const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_messages', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    target_group: {
      type: DataTypes.ENUM('All','Adult','Adolescent','Male','Female'),
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
    logic_flow: {
      type: DataTypes.INTEGER,
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
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_language',
        key: 'id'
      }
    },
    message_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_message_grouping',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.ENUM('Active','In Active','Disabled'),
      allowNull: true
    },
    identifier: {
      type: DataTypes.STRING(255),
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
    tableName: 'tbl_messages',
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
        name: "language_id",
        using: "BTREE",
        fields: [
          { name: "language_id" },
        ]
      },
      {
        name: "message_group_id",
        using: "BTREE",
        fields: [
          { name: "message_group_id" },
        ]
      },
    ]
  });
};
