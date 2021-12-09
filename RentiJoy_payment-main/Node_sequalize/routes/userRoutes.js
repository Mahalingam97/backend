const {addNewUser}=require("../controllers/usercontroller")

const userrouter = require('express').Router()

userrouter.post("/addUser",addNewUser)

module.exports=userrouter;