'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // belongs to product
      transactions.belongsTo(models.products, {
        as: "products",
        foreignKey: {
          name: "idProduct",
        },
      });
      // belongs to user
      transactions.belongsTo(models.users, {
        as: "buyer",
        foreignKey: {
          name: "idBuyer",
        },
      });
      transactions.belongsTo(models.users, {
        as: "seller",
        foreignKey: {
          name: "idSeller",
        },
      });
    }
  }
  transactions.init({
    idProduct: DataTypes.INTEGER,
    idBuyer: DataTypes.INTEGER,
    idSeller: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};