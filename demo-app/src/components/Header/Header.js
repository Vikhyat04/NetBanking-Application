import { Component } from "react";
import "./Header.css";
import { CgProfile } from "react-icons/cg";
//FaUserAlt
import { FaUserAlt} from "react-icons/fa";

class Header extends Component
{

constructor(props)
    {
        super(props);
        console.log(this.props);

        this.state={
            userDetails:this.props.userDetails
        }
        }

//this.props.history.push("/")
    render(){
        return (
            <div className="GeneralHeader">
                <div className="align1">
                <div className="IconStyle">
                <FaUserAlt style={{height:'15px',width:'15px'}}/>
               
               <span style={{color:'white',marginTop:'20px',marginRight:"37px",marginLeft:"3px"}}> {this.state.userDetails.userName}}</span>
                <button type="button" className="Log-Out" >LogOut</button>
               
</div>



</div>
</div>



        )



    }
}
export default Header;