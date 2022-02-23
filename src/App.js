
import './App.css';
import Home from "./Home"
import WhiskeyList from './WhiskeyList';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {Routes,Route} from "react-router-dom"
import seedReview from "./seedReview";
import Review from './Review';
import NewReviewForm from './NewReviewForm';
import { useState} from "react";

function App() {
  const [reviews,setReviews]=useState(seedReview);

  const saveReview= (newReview)=>{
    const newReviews=[...reviews, newReview]
    setReviews(newReviews);
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path="/whiskey/:id" element={<Review reviews={reviews} /> }/>
        <Route exact path="/whiskeys" element={<WhiskeyList reviews={reviews}/>} />
        <Route exact path="/createReview" element={<NewReviewForm reviews={reviews} saveReview={saveReview}/>} />
        <Route exact path="/" element={<Home/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
