const Sequelize=require('sequelize')
const sequelize=require('../utils/userDb')


const User=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING
    },
    Email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    phoneNumber:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})
module.exports=User;