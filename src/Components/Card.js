import React from "react"
//import Kate from "../Images/KateZaffers.png"
import Star from "../Images/Star.png"

export default function card(Props){
   

    console.log(Props.name)
    return (
     
        <div className="Card">
            {Props.openSpots===0 && <div className="soldOut"><h4>sold out</h4></div>}
            {(Props.location === "Online" && Props.openSpots>0) && <div className="online"><h4> Online </h4></div>}
           
<img src={require(`../Images/${Props.coverImg}`)} className="cardImg"/>
<span>  <img src={Star} className="star"/>
<span>{Props.stats.rating}</span></span>
<span>{Props.title}</span><br/>
<span><strong>from {Props.price}</strong>/per person</span><br/>


        </div>
      
    )
}