import { Component } from "react";
import "./Header.css";
import Picture1 from '../../../assets/images/companion.PNG'
import { Link } from "react-router-dom";



class Header extends Component
{

constructor(props)
    {
        super(props);
        console.log(this.props);

        }

    render(){
        return (
            <div className="loginHeader">
        { /* <img src={dummy}></img>*/}

        <Link to="/">
        <img src={Picture1} className="HeaderImage" width="150" height="50" alt="logo"/>
        </Link>
        

                <span className="sampleApp">Sample app</span>
                
                 <Link to ="/login">
                <button type="button" className="HeaderButton1" >Log in</button>
                </Link>
                <span style={{color:'white'}}> or </span>
                <Link to ="/signup">
                <button type="button" className="HeaderButton2" >Sign up</button>
                </Link>


            </div>



        )



    }
}
export default Header;