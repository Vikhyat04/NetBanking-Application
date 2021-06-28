import React, { Component } from "react";
import "./HomePage.css";
import Header from "../Header/Header";
import { BrowserRouter,HashRouter } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar"

class HomePage extends Component{
  constructor(props)
  {
      super(props);
      }


render(){
    return(
      <HashRouter>
<div className="background-color">
    <Header/>

  <div className="homepage-container">
    <div className="left-side">
      <NavigationBar/>

      </div>
      <div className="center">
bye

      </div>
  </div>
    </div>

  </HashRouter>
    );
}
}
export default HomePage;