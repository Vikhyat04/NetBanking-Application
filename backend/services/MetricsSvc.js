const metrics = require("../Models/CustAppMetricsModel")
const NodeDetails = require("../Models/NodeDetailsModel")
const moment=require("moment");

module.exports = {

    fetchMetricsData: async (metricsDataReq) => {

        let metricsDataList=[];
        const custId = metricsDataReq.custId;
        const appId = metricsDataReq.appId;
        const podId=metricsDataReq.podId;
        const nodeMetrics = metricsDataReq.nodeMetrics;
        const nodeId=metricsDataReq.nodeId;
       const metricsData= await  module.exports.fetchMetricsFromDB( appId, podId,nodeMetrics,nodeId)
       if(metricsData.length>0)
       {
           for(const metric of metricsData)
           {
           //    console.log("metric:",metric)
           

           //    console.log('metric time',metric.createdDate);
             const metricTime=moment(metric.createdDate,'YYYY-MM-DD hh:mm:ss').format("hh:mm:ss")
             let metricRes={
                 name:metricTime,
                 memory:metric.metrics.memory,
                 cpu:metric.metrics.cpu
             }
            // console.log(metricRes)
             metricsDataList.push(metricRes);
           }

           return metricsDataList;
       }
    },
    fetchMetricsFromDB: ( appId,podId, nodeMetrics,nodeId) => {

        return new Promise((resolve, reject) => {
            if (!nodeMetrics) {
                metrics.find({  appId: appId,podId:podId, nodeMetrics: false }).limit(6).exec((err, res) => {
                    if (err) {

                    }
                    else {
                        return resolve(res);
                    }
                })
            }
            else {
                metrics.find({  nodeMetrics: true,nodeId:nodeId }).exec((err, res) => {
                    if (err) {

                    }
                    else {
                        return resolve(res);
                    }
                })
            }
        })
    },
    fetchNodeList:async ()=>{

       const nodeDtls= await module.exports.getNodeDtls();
       return nodeDtls;
      
    },
    getNodeDtls:()=>{
        return new Promise((resolve,reject)=>{
            NodeDetails.find({},(err,nodeData)=>{
                if(err)
                {
    
                }
                else{
                 //   console.log(nodeData);
                    return resolve(nodeData);
                }
            })

        })
    }
}