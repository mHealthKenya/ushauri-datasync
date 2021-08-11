const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_client_restore', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Primary key "
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Foreign key to table group"
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "Foreign key to table language"
    },
    facility_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    clinic_number: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "used to form the  compound key for each client"
    },
    db_source: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ushauri_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    f_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    m_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    l_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dob: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    client_status: {
      type: DataTypes.ENUM('ART','On Care','Pre-ART','No Condition'),
      allowNull: true,
      defaultValue: "ART"
    },
    txt_frequency: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 168,
      comment: "how frequenct should we check up on our client by default it's 168 ( whic is 1 week) "
    },
    txt_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "foreign key to table time"
    },
    phone_no: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "phone used to text the client"
    },
    alt_phone_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    shared_no_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    smsenable: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      comment: "conent field for either client has accepted to receive messages "
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
    status: {
      type: DataTypes.ENUM('Active','Dead','Disabled','Deceased','Self Transfer','Transfer Out','LTFU'),
      allowNull: true,
      defaultValue: "Active"
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mfl_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "foreign key to the master facility table "
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    marital: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    enrollment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    art_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    wellness_enable: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true
    },
    motivational_enable: {
      type: DataTypes.ENUM('Yes','No',''),
      allowNull: true
    },
    client_type: {
      type: DataTypes.ENUM('New','Transfer','Self Transfer','Transfer In','Transfer Out'),
      allowNull: true
    },
    age_group: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    birth_date: {
      type: DataTypes.DATEONLY,
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
    prev_clinic: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    transfer_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    entry_point: {
      type: DataTypes.ENUM('Web','Mobile','EMR','ADT','IL',''),
      allowNull: true
    },
    welcome_sent: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: "No"
    },
    stable: {
      type: DataTypes.ENUM('Yes','No','Stable','Un Stable'),
      allowNull: true,
      defaultValue: "Yes"
    },
    physical_address: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    consent_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    GODS_NUMBER: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DEATH_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PATIENT_SOURCE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SENDING_APPLICATION: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    clnd_dob: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    clinic_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "foreign key for table clinic"
    },
    national_id: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    file_no: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    buddy_phone_no: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    date_deceased: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    locator_county: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    locator_sub_county: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    locator_ward: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    locator_village: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    locator_location: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hei_no: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_client_restore',
    timestamps: false
  });
};
