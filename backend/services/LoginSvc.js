
const db=require("../Models");
const user=db.userDetails1;
const userAmountDetails1=db.userAmountDetails;
const txnDetails1=db.txnDetails;
module.exports = {

//     login:async (req,res)=>{
// console.log("Request is:",req.body);
// // const resp= await module.exports.getDetails();
// // console.log("res:",resp);

// res.status(200).send("Success");
//     },

    signup:async (req,res)=>{
        console.log("Request is:",req.body);
        // const resp= await module.exports.getDetails();
        // console.log("res:",resp);
         let userDetails={
             userName:req.body.userName,
             userEmail:req.body.userEmail,
             userPassword:req.body.userpassword,
             countryCode:req.body.userCountryCode,
             phoneNo:req.body.userPhoneno,
             createdAt:new Date(),
             createdBy:req.body.userName,
             updatedBy:req.body.userName
         }
         let userAmountDetails={
            userEmail:req.body.userEmail,
            Amount:5000.0,
            createdAt:new Date(),
            createdBy:req.body.userName,
            updatedBy:req.body.userName

         }
        //  let txnDetails={
        //     userFromEmail:req.body.userEmail,
        //     AmountT:5000.0,
        //     createdAt:new Date(),
        //     createdBy:req.body.userName,
        //     updatedBy:req.body.userName
             
        //  }
        
       let userExists=false;
       await  user.findAll({ where: { userEmail: req.body.userEmail } })
         .then(response=>{
             console.log(response.length);
         if(response.length>0){
userExists=true;

         }
        
        }).catch(error=>{
            console.log(error);
        });
     
if(!userExists){
  // await module.exports.insertSignupRecord(userDetails)
 await  user.create(userDetails).then(response=>{
   console.log(response);
   userAmountDetails.userId=response.userId;
  })
 

  await userAmountDetails1.create(userAmountDetails).then(response=>{
    console.log(response);
   })
            }
        res.status(200).send("Success");
            },
            
            login:async (req,res)=>{
                console.log("Request is:",req.body);
                // const resp= await module.exports.getDetails();
                // console.log("res:",resp);
                 let userDetailsRes=null;
                
               let correctLogin=false;
               await  user.findAll({ where: { userEmail: req.body.userEmail,userPassword: req.body.userpassword } })
                 .then(response=>{
                     console.log(response);
                     userDetailsRes=response;
                 if(response.length>0){
        correctLogin=true;
        
                 }
                
                }).catch(error=>{
                    console.log(error);
                });
             
        if(correctLogin){
          // await module.exports.insertSignupRecord(userDetails)
                res.status(200).send(userDetailsRes);
            }
            else{
                let errorDetails={
                    errorCode:"E01",
                    errorDesc:"Login Failed"
                }
                res.status(500).send(errorDetails)
            }
                    },
        


    getDetails:()=>{
        return new Promise((resolve,reject)=>{

            samp.save()
            samp.findAll().then(response=>{console.log(response.data) ; return resolve(response);});
           // return resolve("Success");
        })
    }

}