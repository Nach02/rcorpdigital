const { DataTypes } = require('sequelize');

module.exports =  (sequelize) => {
  sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      unique:true
    }
 
  });
};
