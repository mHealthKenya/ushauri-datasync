const sequelize = require("../db_config");
const Sequelize = require("sequelize");
const {Clients} = require('./tbl_client')

const ClientOutcome = sequelize.sequelize.define('tbl_clnt_outcome', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_client',
        key: 'id'
      }
    },
    appointment_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_appointment',
        key: 'id'
      }
    },
    outcome: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_outcome',
        key: 'id'
      }
    },
    tracer_name: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    deleted_at: {
      type: Sequelize.DATE,
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
    tracing_type: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: true
    },
    tracing_date: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    app_status: {
      type: Sequelize.ENUM('Missed','Defaulted','LTFU','Notified'),
      allowNull: true
    },
    ushauri_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    db_source: {
      type: Sequelize.STRING(25),
      allowNull: true
    },
    fnl_outcome: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    return_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    tracing_cost: {
      type: Sequelize.DOUBLE(11,0),
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

ClientOutcome.belongsTo(Clients, {foreignKey: "client_id"});

module.exports.ClientOutcome = ClientOutcome
