import HomePage from "../HomePage/HomePage"
import React, { Component } from "react";
import "./MyProfile.css";

class MyProfile extends Component{
    constructor(props)
    {
        super(props)
        console.log(this.props);

        this.state={
                userDetails:this.props.userDetails,
        }
    }
    phnNumberChanged=(e)=>{

        const userDetails=this.state.userDetails;
        userDetails.phoneno=e.target.value;
        this.setState({
            userDetails:userDetails
        })
    }
    render(){
        console.log(this.state.userDetails);
        return(
            <div className="background-color">
           

            <h1>Your account</h1>
          <div className="">
            <div className="">
              <span style={{fontWeight:'bold',fontSize:'18px'}}>Your name</span>
              <br/>
              {this.state.userDetails.userName}
            </div>
             <div className="">
              <span style={{fontWeight:'bold',fontSize:'18px'}}>Your email address</span>
              <br/>
             <input type="text" value= {this.state.userDetails.useremail} readOnly/>
              </div>        
             <div className="">
              <span style={{fontWeight:'bold',fontSize:'18px'}}>Your Country Code</span><br/>
              <select value={this.state.userDetails.countryCode} onChange={this.countryCodeChanged}>
                <option value="0">Select Country Code </option>
                <option value="1">United States(+1)</option>
                <option value="2">India(+91)</option>
                </select>
               </div>
             <div className="">
              <span style={{fontWeight:'bold',fontSize:'18px'}}>Your Phone number</span> <br/>
              <input type="text" value={this.state.userDetails.phoneno} onChange={this.phnNumberChanged}/>
             </div>
             <br/>






</div>


            </div>
        )

    }

    }

    export default MyProfile;