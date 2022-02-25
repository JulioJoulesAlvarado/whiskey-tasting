import React from "react";
import {Link} from "react-router-dom"

function NavBar(props){
    const {page}=props;
    return(
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" style={{background: "#66462c"}}>
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">Whiskey Reviews</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
             </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className={`nav-link ${page=="home"?"active":""}`}  to="/">Home</Link>
                    <Link className={`nav-link ${page=="whiskeys"?"active":""}` } to="/whiskeys">Whiskeys</Link>
                    <Link className={`nav-link ${page=="newReview"?"active":""}`} to="/createReview">New Whiskey Review</Link>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default NavBar;