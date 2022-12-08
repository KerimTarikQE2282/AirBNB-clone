import React from "react"
import Airbnb from "../Images/airbnb 1.png"

export default function NavBar(){
    return(
        <div className="NavBar">
   <img src={Airbnb} className="logo"/>
   <ul className="NavList">
    <li><a href="Google.com"> Log in </a></li>
    <li className="MiddleList">Unusual evets</li>
    <li>About us</li>

   </ul>

        </div>
    )
}