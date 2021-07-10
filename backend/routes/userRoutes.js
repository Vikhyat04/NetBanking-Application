require('dotenv').config();

var router = require("express").Router();

const loginSvc=require("../services/LoginSvc")


//http://localhost:3010/signup,

router.post("/signup",loginSvc.login);

//router.post("/login", null);



module.exports = router;