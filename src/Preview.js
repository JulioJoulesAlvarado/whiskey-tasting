import React from "react";
import {Link} from "react-router-dom"
import "./css/Preview.css"

function Preview(props){
    const {review}=props;
    return(
            <div className="card border-dark mb-2 col-12" >
                <div class="card-header">
                    <h4>{review.name}</h4>
                    <h5>{review.year}</h5></div>
                <div className="card-body">
                <p class="card-text">{review.notes}</p>
                    <h5 className="card-subtitle mb-2">Score: {review.overall}</h5>
                    <Link to={`/whiskey/${props.id}`} className="card-link btn btn-primary">See Full Review</Link>
                </div>
            </div>   
    )
}

export default Preview;