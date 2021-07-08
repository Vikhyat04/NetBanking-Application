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
    <div className="landingpage-container">
    <div className="left-side">
        <br/>
        <br/>
        <br/>
        <div className="textAlign">
        <span style={{color:'white',marginTop:'20px'}}>Fulfill your daily banking needs and more using our </span>
        <span style={{color:'orange',marginTop:'20px'}}> online banking platform</span>
        <br/>
        <GiCommercialAirplane style={{marginTop:'4px',height:'60px',opacity: .5,padding:'12px',width:'60px',color:"turquoise"}}/>
    <FaHome style={{marginTop:'4px',opacity: .2,height:'60px',width:'60px',padding:'12px',color:"purple"}}/>
    <FaHeart style={{marginTop:'4px',height:'60px',opacity: .2,width:'60px',padding:'12px',color:"red"}}/>
    <GiRoundStar style={{marginTop:'4px',height:'60px',opacity: .2,width:'60px',padding:'12px',color:"black"}}/>
    </div>
 <br/>

 <div className="text2"> Internet Banking made Conveniet,Easy & Secure with ___________</div>
 

 <Link to ="/signup">
                <button type="button" className="signup-button2" >Sign up</button>
                </Link>
<br/>
<br/>
<br/>
<div className="text2">  Free for iphone,android and web </div>
<DiApple style={{marginTop:'4px',height:'15px',width:'15px',marginLeft:'210px'}}/>
<AiFillAndroid style={{marginTop:'4px',height:'15px',width:'15px',marginLeft:'40px'}}/>
      </div>
      <div className="center">
          
          <img src={Picture} height="300" width="748" className="BankingImage"/>
          <div className="right-side">
          <div className="right-side2">
          <img src={Picture2} className="pic1"/>
          <div><span className="transfer1">Transfer</span></div>
          <div className="transfer2">Pay your maid's, driver's salary, society maintenance or transfer money to your friends & family through NEFT, RTGS or IMPS.</div>
        
          </div>
          <div className="center2">
          <img src={Picture3} className="pic2"/>
          <div><span className="pay1">Pay Bills</span></div>
          <div className="pay2">Pay your electricity, mobile, gas, water & DTH bills. Recharge your pre-paid mobile number.</div>
        
          </div>

          </div>



              </div>
  </div>
  <br/>
  </div>
   


    );
}
}
export default LandingPage;