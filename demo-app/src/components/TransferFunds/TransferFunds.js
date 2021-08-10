import React, { Component } from "react";
import "./TransferFunds.css";
import axios from "axios";

class TransferFunds extends Component{

    constructor(props)
    {
        super(props);
      console.log("in constructor1");
        this.state={
            email:"",
            userName:"",
            TargetAmount:"",
            transferto:"",
            allUsers:[],
            userDetails:this.props.userDetails,
            

        }
    }
    componentDidMount(){
      this.beforeTransfer();
    }
    beforeTransfer=()=>{
      
        axios.get("http://localhost:3010/allusers")
        .then(response => {
            console.log("Status Code : ", response.status);
            if (response.status === 200) {
              console.log("Response is::",response.data);
             this.setState({
                
                allUsers:response.data
              //    phoneNumber
              
            })        
            } else {
            }
          })
          .catch(error => {
            console.log(error);
            alert(error.response.data.errorDesc)
          });
            }
            onTransfer=(e)=>{
              let transferReq={
                "amount":this.state.TargetAmount,
                "toUserEmail":this.state.email,
                "fromUserEmail":this.state.userDetails.useremail
                }
             //   console.log(e);
               // const transferDetails={toUserEmail:this.state.email,fromUserEmail:this.state.userDetails.useremail,amount:this.state.amount};
                // console.log(tranferDetails);
                axios.post("http://localhost:3010/transfer",transferReq)
                .then(response => {
                  console.log("Status Code : ", response.status);
                  console.log(response);
                  if (response.status === 200) {
                    console.log("Response is::",response);
                  //  this.setState({
                      
                  //       userName:response.data[0].userName,
                  //       toUserEmail:this.state.email,
                  // })              
              
                  } else {

                  }
                })
                .catch(error => {
                  console.log(error);
                  alert(error.response.data.errorDesc)

                });


            }

            AmountChanged=(e)=>{
                console.log(e);
                        this.setState({
                            TargetAmount:e.target.value
                        })
                    }
                    transferTo=(event)=>{
                      console.log(event.target.value);
                       const userList=this.state.allUsers;
                 //   const userIndex=   userList.findIndex(user=>user.userEmail===event.target.value);
                //    allUsers[userIndex].userEmail
                
                      this.setState({
                        email:event.target.value
                      })
                    
                      }

            render(){
let trsnferUSerList=null;
if(this.state.allUsers.length>0){
    trsnferUSerList=this.state.allUsers.map(user=>{
      if(user.userEmail!==this.state.userDetails.useremail){
        return (<option value={user.userEmail}>{user.userName}</option>)
      }
      else return null;
    })
  
}
return(
<div className="alignBack">
                <span className="HeadingText">TRANSFER FUNDS TO ANYONE</span>
                <br/>
                <br/>
                <br/>
        
                   <span className="TransferLabel1" ><strong>Amount to be transfered</strong></span>
                   <br/>
                   <br/>
                

                   <input type="text" className="amount-input" placeholder="Amount to be transfered"  value={this.state.transferAmount} onChange={this.AmountChanged} />

                <br/>
                <br/>
                <br/>
                <br/>
                <span className="TransferLabel"><strong>Here are the list of users you can transfer your amount. </strong></span>
                <br/>
                <span className="TransferLabel"><strong>Choose a user to transfer the amount to.</strong></span>
<br/>
                <br/>
                <select name="Transfer To" value={this.state.email} onChange={this.transferTo}>
                  <option>Select User</option>
                    {trsnferUSerList}
          {/* <option value="0">Select Country Code </option>
            <option value="1">United States(+1)</option>
            <option value="2">India(+91)</option> */}
          </select>
          <br/>
          <br/>
          <br/>

                <button type="button" className="Transfer-button" onClick={this.onTransfer}>Transfer</button>
            </div>
);   
        }
    }
    export default TransferFunds;

