const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_appointment_copy1', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "primary column for table appointment"
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Foreign key to table client",
      references: {
        model: 'tbl_client',
        key: 'id'
      }
    },
    appntmnt_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    appntmnt_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    app_type_1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 6,
      comment: "Foreign key to table appointment types",
      references: {
        model: 'tbl_appointment_types',
        key: 'id'
      }
    },
    app_type_2: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    expln_app: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    custom_txt: {
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
    app_status: {
      type: DataTypes.ENUM('Booked','Notified','Missed','Defaulted','LTFU'),
      allowNull: true,
      defaultValue: "Booked"
    },
    sent_flag: {
      type: DataTypes.ENUM('1','0'),
      allowNull: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    message_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    app_msg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Active','Disabled'),
      allowNull: true,
      defaultValue: "Active"
    },
    notified: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true
    },
    sent_status: {
      type: DataTypes.ENUM('Booked Sent','Notified Sent','Missed Sent','Default Sent','Not Sent','LTFU Sent','Sent','Missed Updated'),
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
    entry_point: {
      type: DataTypes.ENUM('Mobile','Web'),
      allowNull: true
    },
    appointment_kept: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true
    },
    active_app: {
      type: DataTypes.ENUM('1','0'),
      allowNull: true,
      defaultValue: "1"
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    no_calls: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    no_msgs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    home_visits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fnl_trcing_outocme: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fnl_outcome_dte: {
      type: DataTypes.DATE,
      allowNull: true
    },
    other_trcing_outcome: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    visit_type: {
      type: DataTypes.ENUM('Scheduled','Un-Scheduled','Re-Scheduled'),
      allowNull: true
    },
    unscheduled_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tracer_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    date_attended: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ENTITY_NUMBER: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ENTITY: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    APPOINTMENT_REASON: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    APPOINTMENT_LOCATION: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fnl_trcing_outcome: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    db_source: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "Data source  from Ushauri or T4A"
    },
    ushauri_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    t4a_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_appointment_copy1',
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
        name: "tbl_appointment_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "client_id" },
          { name: "appntmnt_date" },
          { name: "app_type_1" },
        ]
      },
      {
        name: "group_id",
        using: "BTREE",
        fields: [
          { name: "group_id" },
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
        name: "client_id",
        using: "BTREE",
        fields: [
          { name: "client_id" },
        ]
      },
      {
        name: "active_app",
        using: "BTREE",
        fields: [
          { name: "active_app" },
        ]
      },
      {
        name: "created_by",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "updated_by",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "app_type_1",
        using: "BTREE",
        fields: [
          { name: "app_type_1" },
        ]
      },
      {
        name: "created_at",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
    ]
  });
};
