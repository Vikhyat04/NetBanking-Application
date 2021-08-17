import React, { Component } from "react";
import "./NavigationBar.css";
import { RiBankFill } from "react-icons/ri";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaMoneyCheck } from "react-icons/fa";
import { FaUserAlt} from "react-icons/fa";
import { Link, NavLink, Route } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";

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
                     
                      <li>
                      <NavLink to="/" activeClassName="active">
                      <RiDashboardFill/>
                        <label className="ml-4" > Dashboard</label>
                      </NavLink>
                    </li>
                    </li>
                    <li>
                    <NavLink to="/balance" activeClassName="active">
                    <RiBankFill/>
                        <label className="ml-4" >Balance Enquiry</label>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/transfer" activeClassName="active">
                      <FcMoneyTransfer/>
                        <label className="ml-4" >Transfer funds</label>
                        </NavLink>
                    </li>

                    <li>
                    <NavLink to="/MyProfile" activeClassName="active">
                      <FaUserAlt/>
                        <label className="ml-4" > Profile</label>
                        </NavLink>
                    </li>
                </ul>
            </nav>
          </div>
        </div>
    );
  }
}
export default NavigationBar;
