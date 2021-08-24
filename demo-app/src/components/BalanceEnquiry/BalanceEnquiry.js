import React, { Component } from "react";
import "./BalanceEnquiry.css";
import axios from "axios";

class BalanceEnquiry extends Component{

    constructor(props)
    {
        super(props);
      console.log("in constructor");
        this.state={
    
            
            userDetails:this.props.userDetails,
            amount:0,
            USDAmount:0,
            EURAmount:0,
            CNYAmount:0,
            GBPAmount:0,
         
        }
    }
    componentDidMount(){
        this.beforeBalanceEnquiry();
    }

    beforeBalanceEnquiry=()=>{
      
        axios.get("http://localhost:3010/userBalance?userEmail="+this.state.userDetails.useremail)
        .then(response => {
            console.log("Status Code : ", response.status);
            if (response.status === 200) {
              console.log("Response is::",response.data);
             this.setState({
                
                amount:response.data[0].Amount,
                 USDAmount:Math.round(response.data[0].Amount/74),
                 EURAmount:Math.round(response.data[0].Amount/87),
                 CNYAmount:Math.round(response.data[0].Amount*0.087),
                 GBPAmount:Math.round(response.data[0].Amount/101.5),
              
            })        
            } else {
            }
          })
          .catch(error => {
            console.log(error);
            alert(error.response.data.errorDesc)
          });
            }


            render(){
                return (
                    <div className="backgroundColor2">
                        
                    
                    <div className="alignBal">
                    <span className="HeadingInfo">WELCOME TO BALANCE ENQUIRY</span>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <span className="BalanceLabel1" ><strong>AVAILABLE(REMAINING) BALANCE:</strong></span>
                       <br/>
                       <br/>
                       <span style={{color:'black',marginTop:'150px',marginLeft:"270px",fontSize:"45px"}}>₹{this.state.amount}</span>
                       </div>

                       {/**/}
                       <div className="grid-container-design" style={{marginTop:'80px',marginLeft:'130px'}}>
              <div className="memory q1">
                <center><b>USD</b></center>
                <br/>
                <span style={{marginLeft:'52px'}}>${this.state.USDAmount}</span>
              </div>
              <div className="cpu q1">
                <center><b>EUR</b></center>
                <br/>
                <span style={{marginLeft:'52px'}}>€{this.state.EURAmount}</span>
              </div>
              <div className="memory q1">
                <center><b>CNY</b></center>
                <br/>
                <span style={{marginLeft:'52px'}}>¥{this.state.CNYAmount}</span>
              </div>
              <div className="cpu q1">
                <center><b>GBP</b></center>
                <br/>
                <span style={{marginLeft:'52px'}}>£{this.state.GBPAmount}</span>
              </div>
            </div>
        
        </div>
                )}
}
export default BalanceEnquiry;