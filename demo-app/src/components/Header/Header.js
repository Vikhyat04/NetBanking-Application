import { Component } from "react";
import "./Header.css";
import { FaUserAlt} from "react-icons/fa";


class Header extends Component
{

constructor(props)
    {
        super(props);
        console.log(this.props);

        }

    render(){
        return (
            <div className="GeneralHeader">
                Home Page

             <FaUserAlt/>
             Bharat
                <button type="button" className="Log-Out" >LogOut</button>



            </div>



        )



    }
}
export default Header;