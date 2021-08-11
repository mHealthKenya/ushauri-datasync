const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_past_appointment_new', {
    clinic_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
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
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "used to form the  compound key for each client"
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Primary key "
    },
    client_name: {
      type: DataTypes.STRING(101),
      allowNull: true
    },
    client_phone_no: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "phone used to text the client"
    },
    appointment_type: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    appntmnt_date: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    file_no: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    buddy_phone_no: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    facility_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    user_phone_no: {
      type: DataTypes.STRING(15),
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
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_past_appointment_new',
    timestamps: false
  });
};
