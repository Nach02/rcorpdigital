const { DataTypes } = require('sequelize');

module.exports =  (sequelize) => {
  sequelize.define('user', {
      emailStatus:{
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      fullName:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstName:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      linkedinURL:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      companyName:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyWebsite:{
        type: DataTypes.STRING,
        allowNull: true
      },
      icebreaker:{
        type: DataTypes.STRING,
        allowNull: true
      },
      location:{
        type: DataTypes.STRING,
        allowNull: true
      },
      companyProfileURL:{
        type: DataTypes.STRING,
        allowNull: true
      },
      civility:{ 
        type: DataTypes.STRING,
        allowNull:true
      },
      CNAE:{
        type: DataTypes.INTEGER,
        allowNull: true
      },
      DownloadCount:{
          type: DataTypes.INTEGER,
          defaultValue:0
      }      
  });
}; 