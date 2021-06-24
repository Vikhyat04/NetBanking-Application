import React, { Component } from "react";
import "./HomePage.css";
import Header from "../Header/Header";
import { BrowserRouter,HashRouter } from "react-router-dom";

class HomePage extends Component{
  constructor(props)
  {
      super(props);
      }


render(){
    return(
      <HashRouter>
<div className="dummy">
    <Header/>
  <div className="homepage-container">
    <div className="left-side">

hello
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