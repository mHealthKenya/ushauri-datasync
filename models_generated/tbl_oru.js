const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_oru', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CCC_NUMBER: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    OBSERVATION_IDENTIFIER: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    OBSERVATION_SUB_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CODING_SYSTEM: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    VALUE_TYPE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    OBSERVATION_VALUE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    UNITS: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    OBSERVATION_RESULT_STATUS: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    OBSERVATION_DATETIME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ABNORMAL_FLAGS: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ushauri_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    db_source: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_oru',
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
    ]
  });
};
