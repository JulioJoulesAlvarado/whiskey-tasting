import React from "react";


function Preview(props){
    const {review}=props;
    return(
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{review.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{review.year}</h6>
                    <h5 className="card-subtitle mb-2 text-muted">Score: {review.overall}</h5>
                    <a href={`/whiskey/${props.id}`} className="card-link">Review</a>
                </div>
            </div>   
    )
}

export default Preview;