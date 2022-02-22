import React from "react";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import Preview from "./Preview";

function WhiskeyList(props){
    const {reviews}=props;
    const reviewLinks=reviews.map((r,idx)=><Preview key={r.name} id={idx} review={r} />)
    return(
        <div className="whiskeyList">
            <NavBar/>
            
            <div className="body">
                <h1>{reviewLinks}</h1>
            </div>
        </div>
    )
}

export default WhiskeyList;