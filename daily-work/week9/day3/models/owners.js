'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // This makes a foreign key connecting to pets.
      // onDelete: "CASCADE" means automatically delete an owner if its pet is deleted
      Owners.belongsTo(models.Pets, {
        foreignKey: "pet",
        onDelete: "CASCADE"
      })
    }
  }
  Owners.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    pet: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Owners',
  });
  return Owners;
};