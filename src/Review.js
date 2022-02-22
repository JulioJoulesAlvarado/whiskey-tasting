import React from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

function Review(props){
    const {reviews}=props;

    
    const paramId=useParams().id;
    const review=reviews[paramId]
    console.log(review)
    return(
        <div className="review">
            <NavBar/>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h4 className="card-title">{review.name}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{review.year}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Proof: {review.proof}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Distillery: {review.distillery}</h6>
                    <h6 className="card-subtitle mb-2 text-muted"> Class: {review.type}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Age: {review.age}</h6>

                    <p class="card-text">{review.notes}</p>

                    <h4 className="card-subtitle mb-2 text-muted">Ratings:</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Nose: {review.noseRating}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Palate: {review.palateRating}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Finish: {review.finishRating}</h6>
                    <h4 className="card-subtitle mb-2 text-muted"> Overall Score: {review.overall}</h4>
                    
                </div>
            </div>   
        </div>
    )
}

export default Review;
/*
{

    notes:[
        {text:"Most Standard Bourbon Profile"}
    ],
    color: "copperLight",
},*/