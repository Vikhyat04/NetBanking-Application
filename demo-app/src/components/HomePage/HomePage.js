import React, { Component } from "react";
import "./HomePage.css";
import Header from "../Header/Header";
import { BrowserRouter,HashRouter,Route } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar"
import MyProfile from "../MyProfile/MyProfile"
//import Picture1 from '../../assets/images/welecomeToInternetBanking.PNG'
import { Redirect } from "react-router";

class HomePage extends Component{
  constructor(props)
  {
      super(props);
      console.log(this.props);

      this.state={
        userDetails:{
          userName:this.props.location.userDetails.userName,
          useremail:this.props.location.userDetails.email,
          phoneno:this.props.location.userDetails.phoneno,
          countryCode:this.props.location.userDetails.countryCode
        },
        loggedIn:true
      }
      }
      logOutHome=(loggedIn)=>{
        this.setState({
          loggedIn: loggedIn
        });
      }

render(){
  console.log(this.state.userDetails);
if(!this.state.loggedIn)
  this.props.history.push("/");
    return(
      <HashRouter>
<div className="background-color">
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