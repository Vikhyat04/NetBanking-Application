import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import HomePage from "./HomePage/HomePage"

class Main extends Component {
  render() {
    return (
      <div className="main">
       
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/home" component={HomePage} exact />
        
       
        <div></div>
      </div>
    
    );
  }
}
//above is path for execution

//from here,connects login and signup page
export default Main;
