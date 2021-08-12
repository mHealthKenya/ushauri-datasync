const sequelize = require("../db_config");
const Sequelize = require("sequelize");
const {User} = require("./tbl_users");

const OtherAppType = sequelize.sequelize.define('tbl_other_appointment_types', {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(60),
    allowNull: true
  },
  created_at: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: true,
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
  appointment_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'tbl_appointment',
      key: 'id'
    },
    unique: "appointment_id"
  }
}, {
  sequelize,
  tableName: 'tbl_other_appointment_types',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        {name: "id"},
      ]
    },
    {
      name: "appointments",
      unique: true,
      using: "BTREE",
      fields: [
        {name: "appointment_id"},
      ]
    },
  ]
});

OtherAppType.belongsTo(User, {foreignKey: "created_by"});

module.exports.OtherAppType = OtherAppType