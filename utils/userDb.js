const Sequelize=require('sequelize');
const sequelize=new Sequelize('booking-app','root','0820',{
    dialect:'mysql',
    host:'localhost'
})
module.exports=sequelize;
