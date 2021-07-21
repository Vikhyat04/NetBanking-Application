require('dotenv').config();

var router = require("express").Router();

const loginSvc=require("../services/LoginSvc")


//http://localhost:3010/signup,

router.post("/login",loginSvc.login);
router.post("/signup", loginSvc.signup);



module.exports = router;