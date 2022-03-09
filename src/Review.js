import React,{useState,useEffect} from "react";
import NavBar from "./NavBar";
import { useParams,Link} from "react-router-dom";
import FlavorChart from "./FlavorChart"
import api from "./api"
import "./css/Review.css"


import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


function Review(props){
    const[review,setReview]=useState({
        name: "Blanton's K&L Pick",
        proof: 93,
        id: "Blanton's K&L Pick 2020",
        year:2020,
        distillery:"Buffalo Trace",
        noseRating:6.5,
        palateRating: 6.5,
        finishRating:6.5,
        uniqueness:6,
        value:6,
        overall: 6.5,
        age: "10yr",
        whiskeyType: "Bourbon",
        retail: "$69.99",
        notes:"Great Finish, palate lacking. WareHouse H, Rick 8,Barrel 99, 7/6/20",
        color: "copperLight",
        nose:{
            cereal:0,
            fruit:4,
            floral:0,
            spice:2,
            wood:2,
            notes:"Cherry/Orange Liquor, Brown Sugar, Cinnamon, baking spice, pie crust",
        },
        palate:{
            cereal:0,
            fruit:1,
            floral:0,
            spice:2,
            wood:2,
            notes:"Light Oak, Mellow brown sugar,Cinnamon,",
        },
        finish:{
            cereal:0,
            fruit:3,
            floral:0,
            spice:3,
            wood:2,
            notes:"Spice->Candy Finish->Slight HErbal, juicy/acidic",
        },
    });
    
    const paramId=useParams().id;
    
    
    useEffect(() => {
        const paramId2=paramId;

        const getWhiskey=async () => {
        const response=await api.getWhiskeyById(paramId2);
        const review = (response.data.data[0])
        /*async function getWhiskeys() {
          const response = await api.getAllWhiskeys();
      
          if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
          console.log(response.json);
          
          setReviews(response);
        }*/
      
        
        setReview(review)
        }
        getWhiskey();
        return;
      },[review.name,review.proof,review.id,review.year,review.distillery,review.notes,review.noseRating,
        review.palateRating,review.setFinishRating,review.uniqueness,review.value,review.overall,review.whiskeyType,
        review.nose.cereal,review.nose.fruit,review.nose.floral,review.nose.spice,review.nose.wood,review.nose.notes,
        review.finish.cereal,review.finish.fruit,review.finish.floral,review.finish.spice,review.finish.wood,review.finish.notes,paramId
    ]);
    //console.log(review)
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
                        {review.nose?<FlavorChart nose={review.nose} palate={review.palate} finish={review.finish}/>:""}
                </div>

                <hr className="solid"></hr>

                <div className="noseReview">
                    <h4><u>Nose</u></h4>
                    <h6 className="card-subtitle mb-2 text-muted">Score: {review.noseRating}</h6>
                    <p className="notes">{review.nose?review.nose.notes:""}</p>
                </div>

                <hr className="solid"></hr>

                <div className="palateReview">
                    <h4><u>Palate</u></h4>
                    <h6 className="card-subtitle mb-2 text-muted">Score: {review.palateRating}</h6>
                    <p className="notes">{review.palate?review.palate.notes:""}</p>
                </div>

                <hr className="solid"></hr>

                <div className="finishReview">
                    <h4><u>Finish</u></h4>
                    <h6 className="card-subtitle mb-2 text-muted">Score: {review.finishRating}</h6>
                    <p className="notes">{review.finish?review.finish.notes:""}</p>
                </div>

                <hr className="solid"></hr>

                <div className="additional">
                    <h3 className="card-subtitle mb-2"><u>Overall Score: {review.overall}</u> </h3>
                    <p className="notes">{review.notes}</p>
                </div>                    
                

                <hr className="solid"></hr>

                <div className="button-group mb-2">
                        <Link to={`/whiskey/${paramId}/edit`} className="card-link btn btn-primary">Edit</Link>
                        <button  className="card-link btn btn-primary" onClick={()=>props.deleteReview(review._id)}>Delete</button>                        
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