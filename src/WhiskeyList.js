import React from "react";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import Preview from "./Preview";
import "./css/WhiskeyList.css"

function WhiskeyList(props){
    const {reviews}=props;
    const reviewLinks=reviews.map((r,idx)=><Preview key={r.name} id={idx} review={r} />)
    return(
        <div className="whiskeyList">
            <NavBar/>
            <div className="previewContainer mt-5">
                <div className="previewList col-8">
                    <div className="listHeader mb-4"> 
                        <h1>Bourbons, Ryes, and Whiskeys</h1>
                    </div>
                    <div className="previews col-12 mb-3">
                        {reviewLinks}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhiskeyList;