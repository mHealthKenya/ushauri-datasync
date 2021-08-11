const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_past_appointments', {
    clinic_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "foreign key for table clinic"
    },
    user_clinic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 5
    },
    appointment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary column for table appointment"
    },
    clinic_no: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "used to form the  compound key for each client"
    },
    client_name: {
      type: DataTypes.STRING(489),
      allowNull: true
    },
    client_phone_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "phone used to text the client"
    },
    appointment_type: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    appntmnt_date: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    file_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    buddy_phone_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    facility_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    user_phone_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Primary key of the table"
    },
    other_appointment_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_past_appointments',
    timestamps: false
  });
};
