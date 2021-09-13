import React, { Component } from "react";
import "./Dashboard.css";
import axios from "axios";
import moment from "moment";
import MaterialTable from 'material-table';
import config from '../../config.json';

class Dashboard extends Component{

    constructor(props)
    {
        super(props);
      console.log("in constructor");
        this.state={
    
            
            userDetails:this.props.userDetails,
            amount:null,
            txnDetails:[],
             columns : [
               
                { title: 'Credited From', field: 'from_user_email' },
                {title: 'Credited To', field: 'to_user_email'},
                { title: 'Amount', field: 'amount' },
                { title: 'Created Date', field: 'created_date' }
              ]
        }
    }
    componentDidMount(){
        this.beforeDashboard();
    }

    beforeDashboard=()=>{
      
        axios.get(config.backEndURL+"/userDashboard?loginUserEmail="+this.state.userDetails.useremail)
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
                    const createdDate=moment(txn.created_date).format("YYYY-MM-DD HH:mm:ss");
                      return (
                          <div></div>
                       
                      );
                    });
                }
                else{
                    return(
                        <div className="alignDash">
                            <span className="HeadingDashInfo">WELCOME TO DASHBOARD</span>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        <span className="Heading Info" margin-left="100px">No transaction history</span>
                        </div>
                    ) ;
                };
                return(
                    <div className="alignDash">
                        <span className="HeadingDashInfo">WELCOME TO DASHBOARD</span>
                        <br/>
                    <br/>
                    <br/>
                    <br/>
                    <span className="DashboardLabel1" ><strong>TRANSACTION HISTORY:</strong></span>
                       <br/>
                       <br/>
                       <br/>
                        <div className="flex-container2">
                         
                           
                                <div style={{ maxWidth: '80%' }}>
                        <MaterialTable columns={this.state.columns} data={this.state.txnDetails} title='Transaction History' />
                      </div>
                        
                        </div>
                    </div>
                );
            }
        }
    
        export default Dashboard;