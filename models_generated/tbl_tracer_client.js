const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_tracer_client', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tracer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tbl_users',
        key: 'id'
      }
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tbl_client',
        key: 'id'
      }
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_assigned: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true
    },
    app_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tbl_appointment',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tbl_tracer_client',
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
        name: "tbl_tracer_client_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "tracer_id" },
        ]
      },
      {
        name: "tbl_tracer_client_ibfk_2",
        using: "BTREE",
        fields: [
          { name: "client_id" },
        ]
      },
      {
        name: "tbl_tracer_client_ibfk_3",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "tbl_tracer_client_ibfk_4",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "tbl_tracer_client_ibfk_5",
        using: "BTREE",
        fields: [
          { name: "app_id" },
        ]
      },
    ]
  });
};
