const db=require("../Models");
const samp=db.sample_1;
module.exports = {

    login:async (req,res)=>{
console.log(req.body);
 const resp= await module.exports.getDetails();
 console.log("res:",resp);

res.status(200).send("Success");
    },

    getDetails:()=>{
        return new Promise((resolve,reject)=>{
            samp.findAll().then(response=>{console.log(response.data) ; return resolve(response);});
           // return resolve("Success");
        })
    }

}