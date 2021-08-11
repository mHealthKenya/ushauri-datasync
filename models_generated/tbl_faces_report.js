const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_faces_report', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ccc_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    appointment_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    appointment_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    appointment_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tracer_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tracer_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    outcomes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    final_outcome: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    other_outcomes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mfl_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_faces_report',
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
