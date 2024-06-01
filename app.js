const express=require('express');
const bodyParser=require('body-parser')
const cors=require('cors');
const userAdmin=require("./controllers/user")

const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const sequelize=require('./utils/userDb');
const user=require('./models/user')

//Accessing the data from axios.post requesting from script.js file before need to check middleware as set to body-parser.json()
app.post("/user",userAdmin.postUserDetails);
app.get("/user",userAdmin.getUserDetails);
// app.get("/user/:userId",userAdmin.getEditDetails)
app.delete("/user/:userId",userAdmin.deleteDetails)
sequelize.sync()
.then((result) => {
    app.listen(4000,()=>{
        console.log("server started at port 4000")
    })
    
}).catch((err) => {
    console.log(err)
});