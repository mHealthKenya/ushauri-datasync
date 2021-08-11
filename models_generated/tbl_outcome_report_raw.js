const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_outcome_report_raw', {
    Partner: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    County: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    county_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sub_county_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Sub_County: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mfl_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Facility: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MFL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UPN: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "used to form the  compound key for each client"
    },
    Client_St: {
      type: DataTypes.ENUM('Active','Dead','Disabled','Deceased','Self Transfer','Transfer Out',''),
      allowNull: true
    },
    Art_Start_Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Gender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Marital_Status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Languages: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Phone_NO: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "phone used to text the client"
    },
    Consented: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      comment: "conent field for either client has accepted to receive messages "
    },
    DoB: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Outcome_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Appointment_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "primary column for table appointment"
    },
    Visit_Type: {
      type: DataTypes.ENUM('Scheduled','Un-Scheduled','Re-Scheduled'),
      allowNull: true
    },
    Unscheduled_Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Date_Came: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Days_Defaulted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Appointment_Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Appointment_Types: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Appointment_Status: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    Tracer: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Tracing_Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Outcome: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Final_Outcome: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Other_Outcome: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_outcome_report_raw',
    timestamps: false
  });
};
