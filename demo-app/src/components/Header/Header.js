import { Component } from "react";
import "./Header.css";
import { CgProfile } from "react-icons/cg";


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
                <div className="align1">
                <div className="IconStyle">
                <CgProfile/>
                </div>

<div className="textInHeader">
             
             Bharat
             </div>
                <button type="button" className="Log-Out" >LogOut</button>
</div>
</div>



        )



    }
}
export default Header;