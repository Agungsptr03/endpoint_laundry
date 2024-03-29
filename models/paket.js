'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.paket,{
        foreignKey: "id",
        as: "paket"
      })
    }
  };
  paket.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    jenis: DataTypes.ENUM("kiloan", "selimut", "bed_cover", "kaos"),
    harga: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'paket',
    tableName: 'paket'
  });
  return paket;
};