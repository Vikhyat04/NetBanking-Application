


const db=require("../Models");
const user=db.userDetails1;
module.exports = {




getAllDetails:async (req,res)=>{
 const response=  await module.exports.getAllDetailsDb();
 res.status(200).send(response);

},
getAllDetailsDb:()=>{
    return new Promise((resolve,reject)=>{

     //   user.save()
        user.findAll().then(response=>{console.log(response.data) ; return resolve(response);});
    //    this.infoPassed=true;
       // return resolve("Success");
    })

}
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



}