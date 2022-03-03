import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import Preview from "./Preview";
import "./css/WhiskeyList.css"
import api from './api';

function WhiskeyList(props){
    const [reviews,setReviews]=useState([]);

    useEffect(() => {
        console.log("YEAH");

        const getWhiskeys=async () => {
        const response=await api.getAllWhiskeys();
        //console.log(response)
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
      
        console.log(response.data.data);
        setReviews(response.data.data)
        }
        
        getWhiskeys();
        return;
      }, [reviews.length]);
    

    //const {reviews}=props;
    const reviewLinks=reviews.map((r,idx)=><Preview key={idx} id={r.id} review={r} />)
    return(
        <div className="whiskeyList">
            <NavBar page="whiskeys"/>
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