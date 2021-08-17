import React, { Component } from "react";
import "./HomePage.css";
import Header from "../Header/Header";
import { BrowserRouter,HashRouter,Route } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import MyProfile from "../MyProfile/MyProfile";
import TransferFunds from "../TransferFunds/TransferFunds";
import BalanceEnquiry from "../BalanceEnquiry/BalanceEnquiry";
//import Picture1 from '../../assets/images/welecomeToInternetBanking.PNG'
import { Redirect } from "react-router";
import Dashboard from "../Dashboard/Dashboard";


class HomePage extends Component{
  constructor(props)
  {
      super(props);
      console.log(this.props);

      this.state={
        userDetails:{
          userName:"",
          useremail:"",
          phoneno:"",
          countryCode:""
        //  userName:this.props.location.userDetails.userName,
          //useremail:this.props.location.userDetails.email,
          //phoneno:this.props.location.userDetails.phoneno,
          //countryCode:this.props.location.userDetails.countryCode
        },
        loggedIn:true
      }
      }

      componentWillMount(){
      const userDetails=  sessionStorage.getItem("userDetails");
      console.log(userDetails);
      if(userDetails!==null){
      const userDetails1=  JSON.parse(userDetails);
      const userDetails2={ userName:userDetails1.userName,
        useremail:userDetails1.email,
        phoneno:userDetails1.phoneno,
        countryCode:userDetails1.countryCode}
      this.setState({
        userDetails:userDetails2
      })
      }
      }
      logOutHome=(loggedIn)=>{
        this.setState({
          loggedIn: loggedIn
        });
      }
      updateUserDetails=(userDetails)=>{
console.log(userDetails);
const userDetails1=this.state.userDetails;
userDetails1.userName=userDetails.userName;
this.setState({
  userDetails:userDetails1
})
      }
render(){
  console.log(this.state.userDetails);
if(!this.state.loggedIn)
  this.props.history.push("/");
    return(
      <HashRouter>
<div className="background-color2">
    <Header userDetails={this.state.userDetails} loggedIn={this.state.loggedIn} logOutHeader={this.logOutHome}/>

  <div className="homepage-container">
    <div className="left-side">
      <NavigationBar/>

      </div>
      <div className="center">
    <Route
                  path="/MyProfile"
                  render={props => (
                    <MyProfile
                      {...props}
                      userDetails={this.state.userDetails}
                      updateUserDetails={this.updateUserDetails}
                    

                    />
                  )}
                  exact
                />
                    <Route
                  path="/transfer"
                  render={props => (
                    <TransferFunds
                      {...props}
                      userDetails={this.state.userDetails}
                    
                    

                    />
                  )}
                  exact
                />
    <Route
                  path="/balance"
                  render={props => (
                    <BalanceEnquiry
                      {...props}
                      userDetails={this.state.userDetails}
                    
                    

                    />
                    
                  )}
                  exact
                />
                    <Route
                  path="/"
                  render={props => (
                    <Dashboard
                      {...props}
                      userDetails={this.state.userDetails}
                    
                    

                    />
                    
                  )}
                  exact
                />
              </div>
  </div>
    </div>

  </HashRouter>
    );
}
}
export default HomePage;