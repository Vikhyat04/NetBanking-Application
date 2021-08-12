require('dotenv').config();

var router = require("express").Router();

const loginSvc=require("../services/LoginSvc")
const myProfSvc=require("../services/MyProfileSvc")
const TransferSvc=require("../services/TransferFundsSvc")
const BalanceEnquirySvc=require("../services/BalanceEnquirySvc")
//need to import MyProfSvc
//http://localhost:3010/signup,

router.post("/login",loginSvc.login);
router.post("/signup", loginSvc.signup);
//router.put("/userDetails", loginSvc.updateDetails);
router.put("/myProfile", myProfSvc.updateProfDtls);
router.get("/allusers",TransferSvc.getAllDetails );

router.post("/transfer",TransferSvc.transfer);
//router.get("/transactionDetails",TransferSvc.getAllTransferDetails)

// router.get("/allBalance",BalanceEnquirySvc.getAllUserDetails)
router.get("/userBalance",BalanceEnquirySvc.getUserAmountDetails)
router.get("/userDashboard",TransferSvc.getAllTransferDetails)
//router.get("/balance",BalanceEnquirySvc.balanceEnq)

//getUserDetails


module.exports = router;