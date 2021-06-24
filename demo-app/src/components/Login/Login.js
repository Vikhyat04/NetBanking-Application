
import React, { Component } from "react";
import "./Login.css";
import Header from "./Header/Header";
import { FaLock } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { FaUser } from "react-icons/fa";




class Login extends Component{

    constructor(props)
    {
        super(props);
      console.log("in constructor1");
        this.state={
            email:"",
            password:"",
            dataFetched:false,
            userName:"",
            userNameCheck:false,
            userNameValid:true

        }

    }
    //e is event and has many prop..therefore use the target value to get its value..compare to real life event exampe..check in inspect
    usernameChanged=(e)=>{
        console.log(e);
        const uservalue=e.target.value;
        let userNameCheck=false;
        let emailValidation=new RegExp("^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$");
        let emailValid;
        console.log(emailValidation.exec(uservalue));
        if (emailValidation.exec(uservalue) === null)
        {
          console.log("Please enter valid email");
        emailValid=false;
       
      }
      else{
        console.log('email valid::::::::::::::');
      emailValid=true;
  
    }
        if(uservalue.length>5)
        userNameCheck=true;
        this.setState({
            userName:uservalue,
            userNameCheck:userNameCheck,
            userNameValid:emailValid
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
            email:"asd"
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
    }
    changepassword=(pass)=>{
console.log(pass);
this.setState({
    password:pass
})

    }
    render(){

        console.log(this.state.password);
        console.log('in render',this.state.dataFetched);
        let loginsuccess=null;
        let dataFetch=null;
        let userNameCheck=null;
        let userNameError=null;
        console.log("username valid",this.state.userNameCheck,userNameError);
        if(!this.state.userNameValid){
            userNameError=(<span style={{color:'red'}}>Email is invalid</span>)
        }
        if(this.state.userNameCheck)
        {
            userNameCheck=(   <FiCheckCircle style={{color:'green'}}/>);
        }
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
                      

            <div className="login">
                <Header/>


          <br/>
          <br/>
          <br/>
          <div className="loginContent">
  
             <span className="loginLabels">Username</span>
             <br/>
           
             <FaUser/>
             <input type="text" className="login-input" placeholder="Username" value={this.state.userName} onChange={this.usernameChanged} />
          {userNameCheck}
          <br/>
          {userNameError}
           
<br/>
<br/>
            Password
            <br/>
            <FaLock/>
                <input type="text"  className="login-input" placeholder="Password" value={this.state.password} onChange={this.passwordChanged} />
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