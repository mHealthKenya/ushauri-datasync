const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_client_list_new', {
    client_name: {
      type: DataTypes.STRING(62),
      allowNull: true
    },
    file_no: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    group_name: {
      type: DataTypes.STRING(15),
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
      defaultValue: 0,
      references: {
        model: 'tbl_groups',
        key: 'id'
      }
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'tbl_gender',
        key: 'id'
      }
    },
    gender_name: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    language_name: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'tbl_language',
        key: 'id'
      }
    },
    marital_status: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    marital_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'tbl_marital_status',
        key: 'id'
      }
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
      type: DataTypes.STRING(15),
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
      allowNull: true,
      defaultValue: "ART"
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
    tableName: 'tbl_client_list_new',
    timestamps: false,
    indexes: [
      {
        name: "group",
        using: "BTREE",
        fields: [
          { name: "group_id" },
        ]
      },
      {
        name: "gender",
        using: "BTREE",
        fields: [
          { name: "gender_id" },
        ]
      },
      {
        name: "language",
        using: "BTREE",
        fields: [
          { name: "language_id" },
        ]
      },
      {
        name: "mariage",
        using: "BTREE",
        fields: [
          { name: "marital_id" },
        ]
      },
    ]
  });
};
