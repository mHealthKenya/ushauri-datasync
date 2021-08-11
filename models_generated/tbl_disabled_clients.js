const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_disabled_clients', {
    client_name: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    file_no: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    group_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    f_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    m_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    l_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    gender_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    language_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    marital_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    marital_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    county_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sub_county: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    facility_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dob: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Active','Dead','Disabled','Deceased','Self Transfer','Transfer Out'),
      allowNull: true
    },
    phone_no: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "phone used to text the client"
    },
    mfl_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "foreign key to the master facility table "
    },
    clinic_number: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "used to form the  compound key for each client"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    enrollment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    art_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Primary key "
    },
    client_status: {
      type: DataTypes.ENUM('ART','On Care','Pre-ART','No Condition'),
      allowNull: true
    },
    txt_frequency: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "how frequenct should we check up on our client by default it's 168 ( whic is 1 week) "
    },
    txt_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "foreign key to table time"
    },
    alt_phone_no: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    shared_no_name: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    smsenable: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      comment: "conent field for either client has accepted to receive messages "
    }
  }, {
    sequelize,
    tableName: 'tbl_disabled_clients',
    timestamps: false
  });
};
