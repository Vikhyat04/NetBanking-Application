import React, { Component } from "react";
import "./Dashboard.css";
import axios from "axios";

class Dashboard extends Component{

    constructor(props)
    {
        super(props);
      console.log("in constructor");
        this.state={
    
            
            userDetails:this.props.userDetails,
            amount:null,
            txnDetails:[]
         
        }
    }
    componentDidMount(){
        this.beforeDashboard();
    }

    beforeDashboard=()=>{
      
        axios.get("http://localhost:3010/userDashboard?loginUserEmail="+this.state.userDetails.useremail)
        .then(response => {
            console.log("Status Code : ", response.status);
            if (response.status === 200) {
              console.log("Response is::",response.data);
             this.setState({
                
                txnDetails:response.data,

              
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
                let txnDetails;
                if (this.state.txnDetails.length > 0) {
                    txnDetails = this.state.txnDetails.map((txn, index) => {
                    
                      return (
                        <div className="flex-item1" key={txn.txn_id}>
                          {/* onClick={() => this.props.groupExpDtls(userGroup.group_id)} */}
                          <span>Amount {txn.amount} credited from {txn.from_user_email} to {txn.to_user_email}</span>
                        </div>
                      );
                    });
                }
                return(
                    <div>
                        <span>Dashboard</span>
                        <div className="flex-container1">
                           {txnDetails}
                        </div>
                    </div>
                );
            }
        }
    
        export default Dashboard;