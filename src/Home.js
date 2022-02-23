import React from "react";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";

function Home(){
    return(
        <div className="homePage">
            <NavBar/>

            <div className="body">
                <h1>Julio's Whiskey Reviews</h1>
                <p className="welcome">
                Welcome to my Whiskey Review Site <br/> Jump right in and explore the whiskeys. <br/>
                Feel free to comment!</p>
                <Link to="/whiskeys" className="btn btn-lg btn-secondary font-weight-bold border-white bg-black">View
                Reviews</Link>
                
            </div>
        </div>
    )
}

export default Home;