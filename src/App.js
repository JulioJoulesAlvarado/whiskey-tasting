
import './App.css';
import Home from "./Home"
import WhiskeyList from './WhiskeyList';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {Routes,Route,useNavigate,useParams} from "react-router-dom"
import seedReview from "./seedReview";
import Review from './Review';
import NewReviewForm from './NewReviewForm';
import EditForm from './EditForm';
import { useState} from "react";
import api from "./api"

function App() {
  const [reviews,setReviews]=useState(seedReview);
  const history=useNavigate();

  const saveReview= (newReview)=>{
    const newReviews=[...reviews, newReview]
    setReviews(newReviews);
  }

  const updateReview= (newReview,id)=>{
    let newReviews=reviews.filter(review=> review.id!==id);
    newReviews=[...newReviews, newReview]
    setReviews(newReviews);
    history(`/whiskey/${newReviews.length-1}`)
  }

  const deleteReview=async (id)=>{
    //setReviews(reviews.filter(review=> review.id!==id));
    await api.deleteWhiskeyById(id)
        .then(history("/whiskeys"));
  }
  return (
    <div className="App">
      <Routes>
        <Route exact path="/whiskey/:id" element={<Review reviews={reviews} deleteReview={deleteReview} /> }/>
        <Route exact path="/whiskey/:id/edit" element={<EditForm reviews={reviews} updateReview={updateReview}/> }/>
        <Route exact path="/whiskeys" element={<WhiskeyList reviews={reviews}/>} />
        <Route exact path="/createReview" element={<NewReviewForm reviews={reviews} saveReview={saveReview}/>} />
        <Route exact path="/" element={<Home/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
