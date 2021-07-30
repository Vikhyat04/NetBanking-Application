require('dotenv').config();

var router = require("express").Router();

const loginSvc=require("../services/LoginSvc")
const myProfSvc=require("../services/MyProfileSvc")

//need to import MyProfSvc
//http://localhost:3010/signup,

router.post("/login",loginSvc.login);
router.post("/signup", loginSvc.signup);
//router.put("/userDetails", loginSvc.updateDetails);
router.put("/myProfile", myProfSvc.updateProfDtls);



module.exports = router;