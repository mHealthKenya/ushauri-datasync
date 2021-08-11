const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_clnt_outcome', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_client',
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
    outcome: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_outcome',
        key: 'id'
      }
    },
    tracer_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
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
    tracing_type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    tracing_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    app_status: {
      type: DataTypes.ENUM('Missed','Defaulted','LTFU','Notified'),
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
    fnl_outcome: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    return_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tracing_cost: {
      type: DataTypes.DOUBLE(11,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_clnt_outcome',
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
        name: "outcome",
        using: "BTREE",
        fields: [
          { name: "outcome" },
        ]
      },
      {
        name: "tracing_type",
        using: "BTREE",
        fields: [
          { name: "tracing_type" },
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
        name: "appointment_id",
        using: "BTREE",
        fields: [
          { name: "appointment_id" },
        ]
      },
    ]
  });
};
