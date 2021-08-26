
import React, { Component } from "react";
import "./Signup.css";
import Header from "../Login/Header/Header";
import { FaLock } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { MdEmail} from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import axios from "axios";
import validator from "validator";

class Signup extends Component{

    constructor(props)
    {
        super(props);
      console.log("in constructor2");
        this.state={
            email:"",
            password:"",
            dataFetched:false,
            userName:"",
            emailError:"",
            countryCode:"",
            phoneNo:"",
            signedIn:false,
            emailCheck:false,
            emailError:"",
            emailValid:true,
            passwordValid:false,
            errorMsg:"Please enter a valid email or password",
            passCheck:false,
            userCheck:false,
            phncheck:false,

        }

    }
    //e is event and has many prop..therefore use the target value to get its value..compare to real life event exampe..check in inspect
    usernameChanged=(e)=>{
        console.log(e);
        let uCheck=false;
        if(e.target.value.length>0){
          uCheck=true;
        }
        const uservalue=e.target.value;
        this.setState({
            userName:uservalue,
            userCheck:uCheck,
        })
    }
    componentWillMount(){
        console.log('component will mount');      
    }
    componentDidMount()
    {
        this.setState({
            email:""
        })
//one method called to get response from backend api
this.setState({
    dataFetched:true
})
    }
    componentDidUpdate(prevProps){
        console.log('component did update');
        
    }
    passwordChanged=(event)=>{
      console.log(event);
      let pval=false;
      let pcheck=false;
      if(event.target.value.length>2||event.target.value.length==0){
          pval=true;
          pcheck=true;
      }
      if(event.target.value.length==0)
      {
          pcheck=false;
      }
        this.setState({
            password:event.target.value,
            passwordValid:pval,
            passCheck:pcheck,
        })
    }
    onSignUp=(e)=>{
      if(this.state.emailCheck&&this.state.passwordValid)
{
        // let emailError=""
        // let emailValidation=new RegExp("^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$");
        // let isValid=emailValidation.test(this.state.email)
        // console.log(isValid)
        // if(isValid)
        // {
        //     emailError="correct"
        //     this.setState({emailError:emailError})
        //     console.log(emailError)
        // }
        // else{
        //     emailError="wrong"
        //     this.setState({emailError:emailError})
        //     console.log(emailError)
        // }
        // console.log(e);
const signUpRequest={userEmail:this.state.email,userpassword:this.state.password,userName:this.state.userName,userCountryCode:this.state.countryCode,userPhoneno:this.state.phoneNo};
console.log(signUpRequest);
axios.post("http://localhost:3010/signup",signUpRequest)
.then(response => {
    console.log("Status Code : ", response.status);
    console.log(response);
    // sessionStorage.setItem("custId", response.data.custId);
    //sessionStorage.setItem("custName", response.data.custName);
    if (response.status === 200) {
      console.log("Response is::",response.data);
      this.setState({
         signedIn: true,
        // custId: response.data._id,
        // custName: response.data.custName,
        // custPhoneNumber: response.data.custPhoneNumber,

        // countryCode: response.data.countryCodeId,
        // image:response.data.image,

        // token: response.data.token
       });


    // } else {
    //   this.setState({
    //     // loginSuccessful: false
    //   });
    }
  })
  .catch(error => {
    console.log(error.response);
    alert(error.response.data.desc)
    // this.setState({
    //   loginSuccessful: false,
    //   errorMsg: error.response.data.desc
    // });
  });
}
else{
    alert("Please enter a valid email or password");
}

    }
    emailChanged=(event)=>{
      console.log(event);
        const Evalue=event.target.value;
        let emailCheck;
        let emailValid;

     
        if (validator.isEmail(Evalue)||Evalue.length==0)
        {
        emailValid=true;
        emailCheck=true;
        if(Evalue.length==0)
        {
            emailCheck=false;
        }
      }
    
      else{
      emailValid=false;
      emailCheck=false;
  
            }
this.setState({
    email:event.target.value,
    emailCheck:emailCheck,
            emailValid:emailValid

})
    }
countryCodeChanged=(event)=>{
    this.setState({
      countryCode: event.target.value
    });
  }

  phoneNoChanged=(event)=>{
    let p1Check;
 
    if (event.target.value.length>8)
    {
    p1Check=true;
  }

  else{
  p1Check=false;

        }
    this.setState({
      phoneNo: event.target.value,
      phncheck:p1Check,
    });
  }

    
    render(){
      let emailError=null;
        let hold=null;
        let passError=null;
        let hold2=null;
        let hold3=null;
        let hold4=null;
      if(this.state.signedIn){
        console.log("Signed in");
        this.props.history.push({pathname:"/home",userDetails:{
          userName:this.state.userName,
          email:this.state.email,
          phoneno:this.state.phoneNo,
          countryCode:this.state.countryCode
          }})

        };
        if(!this.state.emailValid){
          emailError=(<span style={{color:'red'}}>Email is invalid</span>)
          // emailError=(<span style={{color:'red'}}>{this.state.errorMsg}}</span>)
      }
      if(this.state.emailCheck)
      {
         hold=(   <FiCheckCircle style={{color:'green'}}/>);
      }
      if(!this.state.passwordValid){
            
        passError=(<span style={{color:'red'}}>Password is invalid</span>)
    }

        if(this.state.passCheck){
            hold2=(   <FiCheckCircle style={{color:'green'}}/>);
        }
        if(this.state.userCheck){
          hold3=(   <FiCheckCircle style={{color:'green'}}/>);
      }
      if(this.state.phncheck){
        hold4=(   <FiCheckCircle style={{color:'green'}}/>);
    }

        console.log(this.state.password);
        console.log('in render',this.state.dataFetched);
        let dataFetch=null;
        if(this.state.dataFetched)
        {
dataFetch=(<span>Data Fetched</span>)
        }
        // if(this.state.email.length>5)
        // loginsuccess=(  <LoginSuccess email1={this.state.email}
        //      phoneNumber={this.state.phoneNumber}
        //      phoneNumberChanged={this.changePhnNumber}
        //      userName={this.usernameChanged}/>)
      
        return(
                      

            <div className="signup">
               

<Header/>
          <br/>
          <br/>
          <br/>
          <div className="signupContent">
          <span className="signup-intro">Introduce yourself</span>
              <br/>
              <br/>

  
             <span className="signupLabels">Hi there! My <strong>name</strong> is</span>
             <br/>
             <FaUser/>
             <input type="text" className="signup-input" placeholder="Username" value={this.state.userName} onChange={this.usernameChanged} required />
             {hold3}
<br/>

<br/>
<span className="signupLabels">Here's my <strong>email address</strong></span>
<br/>
<MdEmail style={{height:'13px',width:'11px'}}/>
          <input
            type="email"
            name="custEmail"
            placeholder="Email"
            className="signup-input"
            onChange={this.emailChanged}
          ></input>
{hold}
          <br/>
          {emailError}
             <br/>

             

             <span className="signupLabels">Here's my <strong>Password</strong></span>
            <br/>
            <FaLock/>
                <input type="password" minLength={5} className="signup-input" placeholder="Password" value={this.state.password}  onChange={this.passwordChanged} />
                {hold2}
          <br/>
          {passError}
  
             

<br/>
<span className="signupLabels">Here's my <strong>Country Code</strong></span>
                <br/>
                <select name="countryCodes" style={{width:"205px",marginLeft:"5px", height:"30px"}} value={this.state.countryCode} onChange={this.countryCodeChanged}>
          <option value="0">Select Country Code </option>
            <option value="1">United States(+1)</option>
            <option value="2">India(+91)</option>
          </select>
          <br/>
          <br/>
          <span className="signupLabels">Here's my <strong>Phone Number</strong></span>
<br/>
<AiFillPhone style={{height:'13px',width:'11px'}}/>
          <input
            type="text"
            minLength={8}
            placeholder="Phone Number"
            className="signup-input"
            onChange={this.phoneNoChanged}
          ></input>
          {hold4}
          <br/>
          <br/>
                <button type="button" className="signup-button" onClick={this.onSignUp}>Submit</button>
                <br/>
                </div>

                {/* <LoginSuccess email1={this.state.email} email2={this.state.email}/> */}
            </div>
        );
    }
}
export default Signup;