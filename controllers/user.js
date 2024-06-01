const { where } = require('sequelize');
const User=require('../models/user');

exports.postUserDetails = (req, res, next) => {
    console.log(req.body)
    const username=req.body.name;
    const phone=req.body.phoneNumber;
    const email=req.body.Email;
     User.create({
      name: username,
      Email: email,
      phoneNumber: phone,      
    })
    .catch(err=>{
        console.log(err)
    })
    res.json();     
     
  };
  exports.getUserDetails= (req, res, next) => {
    User.findAll()
    .then((products) => {
       const getData= products.map((element,i)=> {
           return  products[i].dataValues
        });       
       res.send(getData);
    })
    .catch((err) => {
      console.log(err);
    });    
     
  };
  exports.deleteDetails= (req, res, next) => {
    const prodId=req.params.userId;
    User.destroy({where:{id:prodId}})     
  };