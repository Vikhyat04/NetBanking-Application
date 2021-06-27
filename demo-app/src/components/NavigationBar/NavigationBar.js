import React, { Component } from "react";
import "./LeftSideBar.css";
import { RiBankFill } from "react-icons/ri";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaMoneyCheck } from "react-icons/fa";
import { FaUserAlt} from "react-icons/fa";


class NavigationBar extends Component {
  constructor(props) {
    super(props);
      }

  render() {
    return (

      <div className="NavigationBar">
        <div className="flex-container">
          <nav id="sidebar" style={{height:'800px'}}>
                <ul class="list-unstyled components">
                <li>
                      <RiBankFill/>
                        <label className="" > BalanceEnquiry</label>
                    </li>
                    <li>
                      <FcMoneyTransfer/>
                        <label className="" >Transfer funds</label>
                    </li>
                    <li>
                      <FaMoneyCheck/>
                        <label className="" >ChequeStatus</label>
                    </li>
                    <li>
                      <FaUserAlt/>
                        <label className="" > Profile</label>
                    </li>
                </ul>
            </nav>
          </div>
        </div>
    );
  }
}
export default NavigationBar;
