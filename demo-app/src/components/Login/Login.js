
import React, { Component } from "react";
import "./Login.css";
import Header from "./Header/Header";
import { FaLock } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { MdEmail} from "react-icons/md";
import axios from "axios";


class Login extends Component{

    constructor(props)
    {
        super(props);
      console.log("in constructor1");
        this.state={
            email:"",
            password:"",
            dataFetched:false,
            emailCheck:false,
            emailValid:true,
            loggedIn:false,
            userName:"",
            countryCode:"",
            phoneNumber:""

        }

    }
    //e is event and has many prop..therefore use the target value to get its value..compare to real life event exampe..check in inspect
    emailChanged=(e)=>{
        console.log(e);
        const uservalue=e.target.value;
        let emailCheck=false;
        let emailValidation=new RegExp("^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$");
        let emailValid;
        console.log(emailValidation.exec(uservalue));
        if (emailValidation.exec(uservalue) === null)
        {
        emailValid=false;
       
      }
      else{
      emailValid=true;
  
    }
        if(uservalue.length>5)
        emailCheck=true;
        this.setState({
            email:uservalue,
            emailCheck:emailCheck,
            emailValid:emailValid
        })
       
    }
    componentWillMount(){
        console.log('component will mount');
        // this.setState({
        //     email:"asdfg"
        // })

        
      
    }
    componentDidMount()
    {
        this.setState({
            email:""
        })
console.log('component did mount');
//one method called to get response from backend api
this.setState({
    dataFetched:true
})
    }
    componentDidUpdate(prevProps){
        console.log('component did update');
        
    }
    passwordChanged=(event)=>{
//console.log(event);
        this.setState({
            password:event.target.value
        })
    }
    onLogin=(e)=>{
console.log(e);
const loginRequest={userEmail:this.state.email,userpassword:this.state.password};
console.log(loginRequest);
axios.post("http://localhost:3010/login",loginRequest)
.then(response => {
    console.log("Status Code : ", response.status);
    console.log(response);
    // sessionStorage.setItem("custId", response.data.custId);
    //sessionStorage.setItem("custName", response.data.custName);
    if (response.status === 200) {
      console.log("Response is::",response.data[0]);
     this.setState({
        
          userName:response.data[0].userName,
          loggedIn:true,
          countryCode:response.data[0].countryCode,
          phoneNumber: response.data[0].phoneNo,
          email:this.state.email,
      //    phoneNumber
      
    })
    //   this.setState({
        // loginSuccessful: true,
        // custId: response.data._id,
        // custName: response.data.custName,
        // custPhoneNumber: response.data.custPhoneNumber,

        // countryCode: response.data.countryCodeId,
        // image:response.data.image,

        // token: response.data.token
    //   });


    } else {
     // this.setState({
        // loginSuccessful: false
     // });
    }
  })
  .catch(error => {
    console.log(error);
    alert(error.response.data.errorDesc)
    // this.setState({
    //   loginSuccessful: false,
    //   errorMsg: error.response.data.desc
    // });
  });
    }
    changepassword=(pass)=>{
console.log(pass);
this.setState({
    password:pass
})

    }
    render(){

        let loginsuccess=null;
        let dataFetch=null;
        let emailCheck=null;
        let emailError=null;


  if(this.state.loggedIn){
      console.log("logged in");
    
      //need to pass useremail,councode,phnno,userid
      const userDetails={
        userName:this.state.userName,
        email:this.state.email,
        phoneno:this.state.phoneNumber,
        countryCode:this.state.countryCode
      }
      sessionStorage.setItem("userDetails",JSON.stringify(userDetails));
      this.props.history.push({pathname:"/home",userDetails:{
        userName:this.state.userName,
        email:this.state.email,
        phoneno:this.state.phoneNumber,
        countryCode:this.state.countryCode}})
  }


        if(!this.state.emailValid){
            emailError=(<span style={{color:'red'}}>Email is invalid</span>)
        }
        if(this.state.emailCheck)
        {
            emailCheck=(   <FiCheckCircle style={{color:'green'}}/>);
        }
        if(this.state.dataFetched)
        {
dataFetch=(<span>Data Fetched</span>)
        }
      
        return(
                      

            <div className="login">
                <Header/>


          <br/>
          <br/>
          <br/>
          <div className="loginContent">
          <span className="login-text1">Welcome to <strong>EzFunds</strong></span>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
  
             <span className="loginLabels">Email address</span>
             <br/>
           
             <MdEmail style={{height:'15px',width:'11px'}}/>
             <input type="text" className="login-input" placeholder="Email"  value={this.state.email} onChange={this.emailChanged} />
          {emailCheck}
          <br/>
          {emailError}
           
<br/>
<br/>
<span className="loginLabels">Password</span>
            <br/>
            <FaLock/>
                <input type="password"  className="login-input" placeholder="Password" value={this.state.password} onChange={this.passwordChanged} />
                <FiCheckCircle/>

               
                <br/>
                <br/>
                <button type="button" className="login-button" onClick={this.onLogin}>Submit</button>
                <br/>
                </div>
{loginsuccess}
                {/* <LoginSuccess email1={this.state.email} email2={this.state.email}/> */}
            </div>
        );
    }
}
export default Login;