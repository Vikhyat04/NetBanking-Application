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
                <CgProfile style={{marginTop:'4px',height:'15px',width:'15px'}}/>
               
               <span style={{color:'white',marginTop:'20px'}}> qwer</span>
                <button type="button" className="Log-Out" >LogOut</button>
               
</div>



</div>
</div>



        )



    }
}
export default Header;