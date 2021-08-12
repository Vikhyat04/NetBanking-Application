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
            amount:null
         
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
                       <span style={{color:'black',marginTop:'150px',marginLeft:"250px",fontSize:"45px"}}>{this.state.amount}</span>
        </div>
        </div>
                )}
}
export default BalanceEnquiry;