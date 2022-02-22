
import './App.css';
import Home from "./Home"
import WhiskeyList from './WhiskeyList';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {Routes,Route} from "react-router-dom"
import seedReview from "./seedReview";
import Review from './Review';
import NewReviewForm from './NewReviewForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/whiskey/:id" element={<Review reviews={seedReview} /> }/>
        <Route exact path="/whiskeys" element={<WhiskeyList reviews={seedReview}/>} />
        <Route exact path="/createReview" element={<NewReviewForm reviews={seedReview}/>} />
        <Route exact path="/" element={<Home/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
