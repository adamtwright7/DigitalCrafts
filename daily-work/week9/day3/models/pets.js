'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pets.hasOne(models.Owners, {
        foreignKey: "pet"
      })
    }
  }
  Pets.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    owner: DataTypes.STRING,
    age: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pets',
  });
  return Pets;
};