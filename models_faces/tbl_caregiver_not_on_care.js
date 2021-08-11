const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_caregiver_not_on_care', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "care giver not on care for HEIs"
    },
    care_giver_fname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    care_giver_mname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    care_giver_lname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    care_giver_gender: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_gender',
        key: 'id'
      }
    },
    care_giver_phone_number: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    hei_no: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_users',
        key: 'id'
      }
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_users',
        key: 'id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_caregiver_not_on_care',
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
        name: "care_giver_gender",
        using: "BTREE",
        fields: [
          { name: "care_giver_gender" },
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
        name: "hei_no",
        using: "BTREE",
        fields: [
          { name: "hei_no" },
        ]
      },
    ]
  });
};
