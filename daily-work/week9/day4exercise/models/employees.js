"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employees.hasOne(models.Patients, {
        foreignKey: "employeeAssignedId",
      });
      Employees.belongsTo(models.Clinics, {
        foreignKey: "clinicId",
      });
    }
  }
  Employees.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      password: DataTypes.STRING,
      clinicId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Employees",
    }
  );
  return Employees;
};
