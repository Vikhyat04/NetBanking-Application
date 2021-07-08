
import React, { Component } from "react";
import "./Signup.css";
import Header from "../Login/Header/Header";
import { FaLock } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { MdEmail} from "react-icons/md";

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

        }

    }
    //e is event and has many prop..therefore use the target value to get its value..compare to real life event exampe..check in inspect
    usernameChanged=(e)=>{
        console.log(e);
        const uservalue=e.target.value;
        this.setState({
            userName:uservalue
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
//console.log(event);
        this.setState({
            password:event.target.value
        })
    }
    onLogin=(e)=>{
        let emailError=""
        let emailValidation=new RegExp("^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$");
        let isValid=emailValidation.test(this.state.email)
        console.log(isValid)
        if(isValid)
        {
            emailError="correct"
            this.setState({emailError:emailError})
            console.log(emailError)
        }
        else{
            emailError="wrong"
            this.setState({emailError:emailError})
            console.log(emailError)
        }
        

    }
    emailChanged=(event)=>{
this.setState({
    email:event.target.value
})
    }
countryCodeChanged=(event)=>{
    this.setState({
      countryCode: event.target.value
    });
  }

  phoneNoChanged=(event)=>{
    this.setState({
      phoneNo: event.target.value
    });
  }

    
    render(){

        console.log(this.state.password);
        console.log('in render',this.state.dataFetched);
        let loginsuccess=null;
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

  
             <span className="signupLabels">Hi there! My name is</span>
             <br/>
             <FaUser/>
             <input type="email" className="signup-input" placeholder="Username" value={this.state.userName} onChange={this.usernameChanged} required />
           <FiCheckCircle/>
<br/>

<br/>
<span className="signupLabels">Here's my <strong>email address</strong></span>
<br/>
<MdEmail style={{height:'15px',width:'15px'}}/>
          <input
            type="text"
            name="custEmail"
            placeholder="Email"
            className="signup-input"
            onChange={this.emailChanged}
          ></input>

            
<FiCheckCircle/>
             <br/>
<br/>
             

             <span className="signupLabels">Here's my <strong>Password</strong></span>
            <br/>
            <FaLock/>
                <input type="text" minLength={5} className="signup-input" placeholder="Password" value={this.state.password}  onChange={this.passwordChanged} />
<FiCheckCircle/>
             <br/>
             <br/>
             
             <span className="signupLabels">Reconfirm Passsword</span>
             <br/>
             <FaLock/>
             <input type="text" className="signup-input" placeholder="Reconfirm Password" value={this.state.password} onChange={this.emailChanged} />
           <FiCheckCircle/>
<br/>
<br/>
<span className="signupLabels">Here's my <strong>Country Code</strong></span>
                <br/>
                <select name="countryCodes" value={this.state.countryCode} onChange={this.countryCodeChanged}>
          <option value="0">Select Country Code </option>
            <option value="1">United States(+1)</option>
            <option value="2">India(+91)</option>
          </select>
          <br/>
          <br/>
          <span className="signupLabels">Here's my <strong>Phone Number</strong></span>
<br/>
          <input
            type="text"
            placeholder="Phone Number"
            className="signup-input"
            onChange={this.phoneNoChanged}
          ></input>
          <br/>
          <br/>
                <button type="button" className="signup-button" onClick={this.onLogin}>Submit</button>
                <br/>
                </div>

{loginsuccess}
                {/* <LoginSuccess email1={this.state.email} email2={this.state.email}/> */}
            </div>
        );
    }
}
export default Signup;