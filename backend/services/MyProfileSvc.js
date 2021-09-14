const db=require("../Models");
const user=db.userDetails1;
module.exports = {
    updateProfDtls:async (req,res)=>{
        console.log(req.body);

        const updateUserDtlsReq={
            userName:req.body.userName,
            userEmail:req.body.useremail,
            phoneNo:req.body.phoneno,
            countryCode:req.body.countryCode

        }
        await module.exports.updateProfDtlsDB(updateUserDtlsReq);
        res.status(200).send("Success");
    },
updateProfDtlsDB:(updateUserDtlsReq)=>{
return new Promise((resolve,reject)=>{
let updateSql="update user_details set user_name='"+updateUserDtlsReq.userName+"',phone_number='"+updateUserDtlsReq.phoneNo+"',country_code='"+updateUserDtlsReq.countryCode+"' where user_email='"+updateUserDtlsReq.userEmail+"'";
console.log(updateSql);
db.sequelize.query(updateSql,{ type: db.sequelize.QueryTypes.UPDATE })
.then(response=>{
 return resolve(response);
  })
 .catch(err => {
      // response.status(500).send({
      //   message:
      //     err.message || "Some error occurred unabe to update customer details."
      // });
      let errorDetails={
        errorCode:"E02",
        errorDesc:"Some error occurred unabe to update customer details"
    }
    res.status(500).send(errorDetails)
    });

})
}


}