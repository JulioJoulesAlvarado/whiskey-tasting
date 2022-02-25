import NavBar from "./NavBar";
import React, {useState} from "react";
import ScoreCard from "./ScoreCard";
import {useNavigate,useParams,Link} from "react-router-dom";
import "./css/Form.css"

function EditForm(props){
    const paramId=useParams().id;
    const {updateReview}=props;

    const review=props.reviews[paramId];
    console.log(props.reviews)

    let history = useNavigate();

    const [name, setName]=useState(review.name)
    const [proof, setProof]=useState(review.proof)
    const [id, setId]=useState(review.id)
    const [year, setYear]=useState(review.year)
    const [distillery, setDistillery]=useState(review.distillery)
    const [notes, setNotes]=useState(review.notes)
    const [noseRating,setNoseRating] = useState(review.noseRating);
    const [palateRating,setPalateRating] = useState(review.palateRating);
    const [finishRating,setFinishRating] = useState(review.finishRating);
    const [uniqueness,setUniqueness] = useState(review.uniqueness);
    const [valueRating,setValueRating] = useState(review.value);
    const [overallRating,setOverallRating] = useState(review.overall);
    const [whiskeyType,setWhiskeyType]=useState(review.whiskeyType);

    const [noseCereal, setNoseCereal]=useState(review.nose.cereal);
    const [noseFruit, setNoseFruit]=useState(review.nose.fruit);
    const [noseFloral, setNoseFloral]=useState(review.nose.floral);
    const [noseSpice, setNoseSpice]=useState(review.nose.spice);
    const [noseWood, setNoseWood]=useState(review.nose.wood);
    const [noseNotes,setNoseNotes]=useState(review.nose.notes);

    const [palateCereal, setPalateCereal]=useState(review.palate.cereal);
    const [palateFruit, setPalateFruit]=useState(review.palate.fruit);
    const [palateFloral, setPalateFloral]=useState(review.palate.fFloral);
    const [palateSpice, setPalateSpice]=useState(review.palate.spice);
    const [palateWood, setPalateWood]=useState(review.palate.wood);
    const [palateNotes,setPalateNotes]=useState(review.palate.notes);

    const [finishCereal, setFinishCereal]=useState(review.finish.cereal);
    const [finishFruit, setFinishFruit]=useState(review.finish.fruit);
    const [finishFloral, setFinishFloral]=useState(review.finish.floral);
    const [finishSpice, setFinishSpice]=useState(review.finish.spice);
    const [finishWood, setFinishWood]=useState(review.finish.wood);
    const [finishNotes,setFinishNotes]=useState(review.finish.notes);

    const handleUpdate=(event)=>{
        event.preventDefault();
        const nose={
            cereal:noseCereal,
            fruit: noseFruit,
            floral:noseFloral,
            spice:noseSpice,
            wood:noseWood,
            notes:noseNotes
        }
        const palate={
            cereal:palateCereal,
            fruit: palateFruit,
            floral:palateFloral,
            spice:palateSpice,
            wood:palateWood,
            notes:palateNotes
        }
        const finish={
            cereal:finishCereal,
            fruit: finishFruit,
            floral:finishFloral,
            spice:finishSpice,
            wood:finishWood,
            notes:finishNotes
        }
        const newReview={
            name:name,
            proof:proof,
            year:year,
            id: id,
            distillery:distillery,
            notes:notes,
            whiskeyType:whiskeyType,
            noseRating:noseRating,
            palateRating:palateRating,
            finishRating,
            uniqueness,
            valueRating,
            overall:overallRating,
            nose,
            palate,
            finish
        }
        console.log(`You Created Review for ${newReview.name}`)
        updateReview(newReview,newReview.id)
        history('/whiskeys')
    }
    return (
        <div className="reviewForm">
            <NavBar/>
            
            <div className="form mt-3 mb-3 pb-3 col-md-6 offset-md-3 validated-form" noValidate  encType="multipart/form-data">
            <form className="col-10" onSubmit={handleUpdate}>
                <h2 className="mt-3">Edit Whiskey Information</h2>
                <div className="input-group mb-3 mt-3">
                    <span className="input-group-text" id="name" >Name</span>
                    <input type="text" className="form-control"  value={name} placeholder="" aria-label="Name" onChange={e=>setName(e.target.value)}/>
                </div>

                <select className="form-select" id="whiskeyType" defaultValue={whiskeyType} aria-label="whiskeyType" onChange={e=>setWhiskeyType(e.target.value)}>
                    <option value="Bourbon">Bourbon</option>
                    <option value="Rye">Rye</option>
                    <option value="American Whiskey">American Whiskey</option>
                    <option value="Scotch">Scotch</option>
                    <option value="Finished">Finished</option>
                    <option value="Other">Other</option>
                </select>

                <div className="input-group mb-3 mt-3">
                    <span className="input-group-text" id="Proof">Proof</span>
                    <input type="text" className="form-control" placeholder="" defaultValue={proof} onChange={e=>setProof(e.target.value)} aria-label="Proof" />
                </div>

                <div className="input-group mb-3 mt-3">
                    <span className="input-group-text" id="Year">Year</span>
                    <input type="text" className="form-control" defaultValue={year} onChange={e=>setYear(e.target.value)}  aria-label="Year" />
                </div>

                <div className="input-group mb-3 mt-3">
                    <span className="input-group-text" id="Distillery">Distillery</span>
                    <input type="text" className="form-control" defaultValue={distillery} onChange={e=>setDistillery(e.target.value)} placeholder="" aria-label="Distillery" />
                </div>

                <div className="form-floating">
                    <textarea className="form-control" defaultValue={notes} placeholder="Enter Notes Here" id="floatingTextarea" onChange={e=>setNotes(e.target.value)}></textarea>
                    <label htmlFor="floatingTextarea" >Whiskey Notes</label>
                </div>
                {/*accordian starts here */}

                <div className="accordion mt-5" id="scoreAccordian">
                    <div className="accordion-item">
                        <h3 className="accordian-header" id="headingNose">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNose" aria-expanded="true" aria-controls="collapseNose">
                            Nose
                            </button>                    
                        </h3>

                        <div id="collapseNose" className="accordion-collapse collapse show" aria-labelledby="headingNose" data-bs-parent="#scoreAccordion">
                            <div className="accordion-body">
                            <label htmlFor="noseRating" className="form-label mt-2">{`Nose Rating: ${noseRating}`} </label>
                            <input type="range" value={noseRating} className="form-range" min="0" max="10" step="0.5" id="noseRating" onChange={e=>setNoseRating(e.target.value)}></input>
                            <ScoreCard  name="nose" cereal={noseCereal} setCereal={setNoseCereal} fruit={noseFruit} setFruit={setNoseFruit}
                            floral={noseFloral} setFloral={setNoseFloral} spice={noseSpice} setSpice={setNoseSpice}
                            wood={noseWood} setWood={setNoseWood} notes={noseNotes} setNotes={setNoseNotes}
                            />
                           </div>
                        </div>

                    </div>
                    
                    <div className="accordion-item">
                        <h3 className="accordian-header" id="headingPalate">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePalate" aria-expanded="false" aria-controls="collapsePalate">
                            Palate
                            </button>                    
                        </h3>
                        
                        <div id="collapsePalate" className="accordion-collapse collapse" aria-labelledby="headingPalate" data-bs-parent="#scoreAccordion">
                            <div className="accordion-body"></div>
                                <label htmlFor="palateRating" className="form-label mt-2">{`Palate Rating: ${palateRating}`} </label>
                                <input type="range" value={palateRating} className="form-range" min="0" max="10" step="0.5" id="palateRating" onChange={e=>setPalateRating(e.target.value)}></input>
                                <ScoreCard  name="palate" cereal={palateCereal} setCereal={setPalateCereal} fruit={palateFruit} setFruit={setPalateFruit}
                                floral={palateFloral} setFloral={setPalateFloral} spice={palateSpice} setSpice={setPalateSpice}
                                wood={palateWood} setWood={setPalateWood} notes={palateNotes} setNotes={setPalateNotes}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="accordion-item">
                        <h3 className="accordian-header" id="headingFinish">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFinish" aria-expanded="false" aria-controls="collapseFinish">
                            Finish
                            </button>                    
                        </h3>
                        <div id="collapseFinish" className="accordion-collapse collapse" aria-labelledby="headingFinish" data-bs-parent="#scoreAccordion">
                            <div className="accordion-body"></div>
                                <label htmlFor="finishRating" className="form-label mt-2">{`Finish Rating: ${finishRating}`} </label>
                                <input type="range" value={finishRating} className="form-range" min="0" max="10" step="0.5" id="finishRating" onChange={e=>setFinishRating(e.target.value)}></input>
                                <ScoreCard  name="finish" cereal={finishCereal} setCereal={setFinishCereal} fruit={finishFruit} setFruit={setFinishFruit}
                                floral={finishFloral} setFloral={setFinishFloral} spice={finishSpice} setSpice={setFinishSpice}
                                wood={finishWood} setWood={setFinishWood} notes={finishNotes} setNotes={setFinishNotes}
                                />
                            </div>
                    </div>
                
                <label htmlFor="uniqueness" className="form-label mt-2">{`Uniqueness Rating: ${uniqueness}`} </label>
                <input type="range" value={uniqueness} className="form-range" min="0" max="10" step="0.5" id="uniqueness" onChange={e=>setUniqueness(e.target.value)}></input>
                
                <label htmlFor="valueRating" className="form-label mt-2">{`Value Rating: ${valueRating}`} </label>
                <input type="range" value={valueRating} className="form-range" min="0" max="10" step="0.5" id="valueRating" onChange={e=>setValueRating(e.target.value)}></input>
                
 
                <label htmlFor="overall" className="form-label mt-2">{`Overall Rating: ${overallRating}`} </label>
                <input type="range" value={overallRating} className="form-range" min="0" max="10" step="0.5" id="overallRating" onChange={e=>setOverallRating(e.target.value)}></input>



                <button type="submit" className="btn btn-primary mr-1" onSubmit={handleUpdate}>Update</button>
                <Link to={`/whiskey/${paramId}`} className="btn btn-primary ml-1" >Cancel</Link>
            </form>
            </div>
        </div>
    )
}

export default EditForm;
