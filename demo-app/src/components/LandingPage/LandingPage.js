import React, { Component } from "react";
import "./LandingPage.css";
import Header from "../Login/Header/Header";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GiRoundStar } from "react-icons/gi";
import { Link } from "react-router-dom";
import {  AiFillAndroid} from "react-icons/ai";
import { DiApple } from "react-icons/di";
import Picture from '../../assets/images/banking.PNG'
import Picture2 from '../../assets/images/Pay.PNG'
import Picture3 from '../../assets/images/Transfer.PNG'
class LandingPage extends Component{
  constructor(props)
  {
      super(props);
      }


render(){
    return(
<div className="background-color">
  <Header/>
    <div className="homepage-container">
    <div className="left-side">
        <br/>
        <br/>
        <br/>
        <div className="textAlign">
        <span style={{color:'white',marginTop:'20px'}}> Less Stress when sharing expenses</span>
        <span style={{color:'orange',marginTop:'20px'}}> with anyone.</span>
        <br/>
        <GiCommercialAirplane style={{marginTop:'4px',height:'60px',opacity: .5,padding:'12px',width:'60px',color:"turquoise"}}/>
    <FaHome style={{marginTop:'4px',opacity: .2,height:'60px',width:'60px',padding:'12px',color:"purple"}}/>
    <FaHeart style={{marginTop:'4px',height:'60px',opacity: .2,width:'60px',padding:'12px',color:"red"}}/>
    <GiRoundStar style={{marginTop:'4px',height:'60px',opacity: .2,width:'60px',padding:'12px',color:"black"}}/>
    </div>
 <br/>

 <div className="text2">  Keep track of your shared expenses and balances with housemates,trips,groups,friends, and family </div>
 
 <Link to ="/signup">
                <button type="button" className="signup-button" >Sign up</button>
                </Link>
<br/>
<br/>
<br/>
<div className="text2">  Free for iphone,android and web </div>
<DiApple style={{marginTop:'4px',height:'15px',width:'15px',marginLeft:'210px'}}/>
<AiFillAndroid style={{marginTop:'4px',height:'15px',width:'15px',marginLeft:'40px'}}/>
      </div>
      <div className="center">
          
          <img src={Picture} className="BankingImage"/>
          <div className="right-side">
          <div className="right-side2">
          <img src={Picture2} className="pic1"/>
           Transfer
          <div/>
          <div className="center2">
          <img src={Picture3} className="pic2"/>
          <div/>
          <div/>



              </div>
  </div>
  <br/>
  <div/>
    </div>
    </div>
    </div>
    </div>


    );
}
}
export default LandingPage;