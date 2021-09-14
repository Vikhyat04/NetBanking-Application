


const { txnDetails } = require("../Models");
const db=require("../Models");
const user=db.userDetails1;
const userAmountDetails1=db.userAmountDetails;
const txnDetails1=db.txnDetails;
module.exports = {




getAllDetails:async (req,res)=>{
 const response=  await module.exports.getAllDetailsDb();
 res.status(200).send(response);

},
getAllDetailsDb:()=>{    return new Promise((resolve,reject)=>{

     //   user.save()
        user.findAll().then(response=>{console.log(response.data) ; return resolve(response);});
    //    this.infoPassed=true;
       // return resolve("Success");
    })

},
// if(infoPassed){
//     // await module.exports.insertSignupRecord(userDetails)
//           res.status(200).send(userDetailsRes);
//       }
//       else{
//           let errorDetails={
//               errorCode:"E01",
//               errorDesc:"Unable to fetch user details"
//           }
//           res.status(500).send(errorDetails)
//       }




transfer:async (req,res)=>{
    console.log("Request is:",req.body);
    // amountInBank:0,
    // TransferStatus:false,
    // correctTransfer:false,
    // hold=0,
    // const resp= await module.exports.getDetails();
    // console.log("res:",resp);
     
     let txnDetails1={
        userFromEmail:req.body.fromUserEmail,
        userToEmail:req.body.toUserEmail,
        AmountT:req.body.amount,
        createdAt:new Date(),
        createdBy:req.body.userName,
        updatedBy:req.body.userName
         //add userto email
      }
    
   let fromUserUpdatedAmount;
   let fromUserDetails=await module.exports.fromUserDtlsDb( req.body.fromUserEmail);
   console.log(fromUserDetails[0].Amount);
   if(fromUserDetails[0].Amount>req.body.amount && req.body.amount>0){
    TransferStatus=true
    fromUserUpdatedAmount=fromUserDetails[0].Amount-req.body.amount

     await module.exports.createTxn(txnDetails1);
    await module.exports.updateFromUserAmount(fromUserUpdatedAmount,req.body.fromUserEmail);
   let toUserDetails=   await module.exports.fromUserDtlsDb(req.body.toUserEmail);
   console.log(toUserDetails);
   toUserDetails[0].Amount= parseInt(toUserDetails[0].Amount)+parseInt(req.body.amount);
   await module.exports.updateToUserAmount(toUserDetails[0].Amount,req.body.toUserEmail);
//    await module.exports.updateTxnDetails(req.body.amount,req.body.toUserEmail,req.body.fromUserEmail);
  }
  else{
      let errorDetails={
          errorCode:"E02",
          errorDesc:"Tranfer Failed"
      }
      res.status(500).send(errorDetails)
  }
  res.status(200).send("Success");
    },
   fromUserDtlsDb:(fromUserEmail)=>{
       return new Promise((resolve,reject)=>{
    userAmountDetails1.findAll({ where: { userEmail:fromUserEmail  } })
    .then(response=>{
   //   console.log(response);
   //   console.log(response.amount);
    return resolve(response);
    //  console.log(fromUserDetails[0].amount);
    
   

  
  }).catch(error=>{
      console.log(error);
  });

   })

   },
    
  
           
              createTxn:async(txnDetails1)=>{

                await txnDetails.create(txnDetails1).then(response=>{
                console.log(response);
                })
                    },
              updateToUserAmount:(amount,toUserEmail)=>{
                  console.log(amount);
                let updateSql="update user_amount_details set amount="+amount+" where user_email='"+toUserEmail+"'";
                           console.log(updateSql);
                           db.sequelize.query(updateSql,{ type: db.sequelize.QueryTypes.UPDATE })
                           .then(response=>{
                               console.log(response.data);
                               })
                            .catch(err => {
                                response.status(500).send({
                                    message:
                                    err.message || "Some error occurred unable to transfer funds."
                                }
                                );
                                }
                            );
                                },
              updateFromUserAmount:(amount,fromUserEmail)=>{
                                    let updateSql="update user_amount_details set amount="+amount+" where user_email='"+fromUserEmail+"'";
                                    console.log(updateSql);
                                    db.sequelize.query(updateSql,{ type: db.sequelize.QueryTypes.UPDATE })
                                    .then(response=>{
                                        console.log(response.data);
                                        })
                                     .catch(err => {
                                        let errorDetails={
                                            errorCode:"E04",
                                            errorDesc:"Some error occurred unabe to update user amount"
                                        }
                                        res.status(500).send(errorDetails)
                                         });
                                         },
                                
                                // updateTxnDetails:(aT,TUE,FUE)=>{
                                //     let updateSql="update txn_details set amount="+aT+" set from_user_email='"+FUE+" set to_user_email='"+TUE;
                                //     console.log(updateSql);
                                //     db.sequelize.query(updateSql,{ type: db.sequelize.QueryTypes.UPDATE })
                                //     .then(response=>{
                                //         console.log(response.data);
                                //         })
                                //      .catch(err => {
                                //              message:
                                //              err.message || "Some error occurred unable to store record."
                                         
                                //          });
                                //          }
                                //         }



                                getAllTransferDetails:async (req,res)=>{
                                    console.log("Request is:",req.body);
                                  const response=    await module.exports.getTxnDetailsDB(req.query.loginUserEmail);
                                  if(response.length>0){
res.status(200).send(response);
                                  }
                                //   else{
                                //     let errorDetails={
                                //         errorCode:"E03",
                                //         errorDesc:"Some error occurred unabe to transfer funds"
                                //     }
                                //     res.status(500).send(errorDetails);
                                //   }
                                           },
                                        
                                        getTxnDetailsDB:(loginUserEmail)=>{
                                            console.log("loginUserEmail",loginUserEmail);
                                            return new Promise((resolve,reject)=>{
                                               // let txnDetailsSql;
                                               let txnDetailsSql="select * from txn_details where from_user_email='"+loginUserEmail+"' or to_user_email='"+loginUserEmail+"'";
                                               console.log(txnDetailsSql);
                                               db.sequelize.query(txnDetailsSql,{ type: db.sequelize.QueryTypes.SELECT })
                                                .then(response=>{
                                               //   console.log(response);
                                               //   console.log(response.amount);
                                                return resolve(response);
                                                //  console.log(fromUserDetails[0].amount);
                                                
                                               
                                            
                                              
                                              }).catch(error=>{
                                                  console.log(error);
                                              });
                                            
                                               })
                                            
                                        }
                                    }