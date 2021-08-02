import HomePage from "../HomePage/HomePage"
import React, { Component } from "react";
import "./MyProfile.css";
import axios from "axios";

class MyProfile extends Component{
    constructor(props)
    {
        super(props)
        console.log(this.props);

        this.state={
                userDetails:this.props.userDetails,
        }
    }

    onUpdate=(e)=>{
          
//const userDetails=this.state.userDetails;
console.log(this.state.userDetails);
axios.put("http://localhost:3010/myProfile",this.state.userDetails).then(response=>{
  if (response.status === 200) {
    console.log(response);
    this.props.updateUserDetails(this.state.userDetails);
  }
  else{}
})
.catch(error => {
  console.log(error.response);
  alert(error.response.data.desc)
});
    };
    phnNumberChanged=(e)=>{

        const userDetails=this.state.userDetails;
        userDetails.phoneno=e.target.value;
        this.setState({
            userDetails:userDetails
        })
    }
    emailChanged=(e)=>{

      const userDetails=this.state.userDetails;
      userDetails.useremail=e.target.value;
      this.setState({
          userDetails:userDetails
      })
  }
  userNameChanged=(e)=>{

    const userDetails=this.state.userDetails;
    userDetails.userName=e.target.value;
    this.setState({
        userDetails:userDetails
    })
}
countryCodeChanged=(e)=>{

  const userDetails=this.state.userDetails;
  userDetails.countryCode=e.target.value;
  this.setState({
      userDetails:userDetails
  })
}
    render(){
        console.log(this.state.userDetails);
        return(
            <div className="background-color1">
          <span className="alignHeading">Your Account Details</span>
          <div className="alignProfile" >
          
          <br/>
            <div className="editName">
              <span style={{fontWeight:'bold',fontSize:'18px'}}>Your name</span>
              <br/>
              <input type="text" value= {this.state.userDetails.userName} onChange={this.userNameChanged}/>
              </div>
             <div className="editEmail">
              <span style={{fontWeight:'bold',fontSize:'18px'}}>Your email address</span>
              <br/>
             <input type="text" value= {this.state.userDetails.useremail} onChange={this.emailChanged}/>
              </div>        
             <div className="editCountry">
              <span style={{fontWeight:'bold',fontSize:'18px'}}>Your Country Code</span><br/>
              <select value={this.state.userDetails.countryCode} onChange={this.countryCodeChanged}>
                <option value="0">Select Country Code </option>
                <option value="1">United States(+1)</option>
                <option value="2">India(+91)</option>
                </select>
               </div>
             <div className="editPhone">
              <span style={{fontWeight:'bold',fontSize:'18px'}}>Your Phone number</span> <br/>
              <input type="text" value={this.state.userDetails.phoneno} onChange={this.phnNumberChanged}/>
              <br/>
              <br/>
              <br/>
              <button className="saveBtn1" onClick={this.onUpdate}>Update</button> 
              </div>
             </div>
             <br/>





</div>


         
        )

    }

    }

    export default MyProfile;