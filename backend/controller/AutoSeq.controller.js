const autoSeq = require('../Models/AutoSeqModel');
exports.getSequenceValue=async (seqName)=>{

    console.log('seq name:',seqName,typeof seqName);
    //return new Promise((resolve,reject)=>{
    const ret = await autoSeq.findOneAndUpdate( { _id: seqName },
            { $inc: { value: 1 } },
           { new: true,useFindAndModify: false},(err,res)=>{
if(err)
console.log(err);
else {
console.log(res);
return res;
}
          }
          
   );

console.log(ret.value);
return ret.value;
 //  return resolve(ret.value);
//})
}