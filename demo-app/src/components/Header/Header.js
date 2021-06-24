import { Component } from "react";
import "./Header.css";
//import { AiOutlineBars } from "react-router-dom";


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


                <button type="button" className="Log-Out" >LogOut</button>



            </div>



        )



    }
}
export default Header;