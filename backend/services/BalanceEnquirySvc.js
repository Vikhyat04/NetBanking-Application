const { txnDetails } = require("../Models");
const db=require("../Models");
const user=db.userDetails1;
const userAmountDetails1=db.userAmountDetails;
const txnDetails1=db.txnDetails;
module.exports = {

getUserAmountDetails:async (req,res)=>{
    const response=  await module.exports.getUserAmountDetailsDb(req.query.userEmail);
    res.status(200).send(response);
   
   },
   getUserAmountDetailsDb:(userEmail)=>{    return new Promise((resolve,reject)=>{
       
    userAmountDetails1.findAll({ where: { userEmail:userEmail  } }).then(response=>{console.log(response.data) ; return resolve(response);});
       })
   
   },
}