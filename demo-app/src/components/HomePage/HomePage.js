import React, { Component } from "react";
import "./HomePage.css";
import Header from "../Header/Header";
import { BrowserRouter,HashRouter } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar"
//import Picture1 from '../../assets/images/welecomeToInternetBanking.PNG'


class HomePage extends Component{
  constructor(props)
  {
      super(props);
      console.log(this.props);

      this.state={
        userDetails:{
          userName:this.props.location.userDetails.userName
          //userEmail
          //userId
          //countryCode
          //phoneNumber
        }
      }
      }


render(){
  console.log(this.state.userDetails);
    return(
      <HashRouter>
<div className="background-color">
    <Header userDetails={this.state.userDetails}/>

  <div className="homepage-container">
    <div className="left-side">
      <NavigationBar/>

      </div>
      <div className="center">
              </div>
  </div>
    </div>

  </HashRouter>
    );
}
}
export default HomePage;