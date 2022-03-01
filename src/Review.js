import React from "react";
import NavBar from "./NavBar";
import { useParams,Link } from "react-router-dom";
import FlavorChart from "./FlavorChart"
import "./css/Review.css"


import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


function Review(props){
    const {reviews}=props;

    
    const paramId=useParams().id;
    const review=reviews[paramId]
    console.log(review)
    return(
        <div className="review">
            <NavBar/>
            <div className="reviewBody mt-3 mb-3">
            <div className="container col-lg-6 col-md-8 col-xs-10">

                <div className="reviewTitle mt-2">
                    <h1 className="card-title">{review.name}</h1>
                    <h2 className="card-subtitle mb-2 text-muted">{review.year}</h2>
                </div>

                <hr className="solid"></hr>

                <div className="details">
                    <h6 className="card-subtitle mb-2 text-muted"> Class: {review.whiskeyType}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Distillery: {review.distillery}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Proof: {review.proof}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Age: {review.age}</h6>
                </div>

                <hr className="solid"></hr>

                <div className="chart col-8 col-offset-2">
                        <h4><u>Flavor Profile</u></h4>
                        <FlavorChart nose={review.nose} palate={review.palate} finish={review.finish} />
                </div>

                <hr className="solid"></hr>

                <div className="noseReview">
                    <h4><u>Nose</u></h4>
                    <h6 className="card-subtitle mb-2 text-muted">Score: {review.noseRating}</h6>
                    <p className="notes">{review.nose.notes}</p>
                </div>

                <hr className="solid"></hr>

                <div className="palateReview">
                    <h4><u>Palate</u></h4>
                    <h6 className="card-subtitle mb-2 text-muted">Score: {review.palateRating}</h6>
                    <p className="notes">{review.palate.notes}</p>
                </div>

                <hr className="solid"></hr>

                <div className="finishReview">
                    <h4><u>Finish</u></h4>
                    <h6 className="card-subtitle mb-2 text-muted">Score: {review.finishRating}</h6>
                    <p className="notes">{review.finish.notes}</p>
                </div>

                <hr className="solid"></hr>

                <div className="additional">
                    <h3 className="card-subtitle mb-2"><u>Overall Score: {review.overall}</u> </h3>
                    <p className="notes">{review.notes}</p>
                </div>                    
                

                <hr className="solid"></hr>

                <div className="button-group mb-2">
                        <Link to={`/whiskey/${paramId}/edit`} className="card-link btn btn-primary">Edit</Link>
                        <button  className="card-link btn btn-primary" onClick={()=>props.deleteReview(review.id)}>Delete</button>                        
                </div>
                    
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