const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_update', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    appntmnt_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    appntmnt_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    app_type_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    app_type_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expln_app: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    custom_txt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    updated_at: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    app_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sent_flag: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    group_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    message_type_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    language_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    app_msg: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notified: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sent_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    updated_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    entry_point: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    appointment_kept: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    active_app: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    no_calls: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    no_msgs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    home_visits: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fnl_trcing_outocme: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fnl_outcome_dte: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    other_trcing_outcome: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    visit_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    unscheduled_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tracer_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_attended: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ENTITY_NUMBER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ENTITY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    APPOINTMENT_REASON: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    APPOINTMENT_LOCATION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fnl_trcing_outcome: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    db_source: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ushauri_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    t4a_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'app_update',
    timestamps: false
  });
};
