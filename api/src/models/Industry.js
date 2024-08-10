const { DataTypes } = require('sequelize');

module.exports =  (sequelize) => {
  sequelize.define('industry', {
      name:{
        type: DataTypes.STRING,
        unique:true
      }
  });
}; 