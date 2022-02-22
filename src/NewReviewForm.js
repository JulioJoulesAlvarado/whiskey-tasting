import NavBar from "./NavBar";
import React, {useState} from "react";
import ScoreCard from "./ScoreCard";

function NewReviewForm(props){
    const [name, setName]=useState("")
    const [proof, setProof]=useState("")
    const [year, setYear]=useState(2021)
    const [distillery, setDistillery]=useState("")
    const [notes, setNotes]=useState("")
    const [noseRating,setNoseRating] = useState(5);
    const [palateRating,setPalateRating] = useState(5);
    const [finishRating,setFinishRating] = useState(5);
    const [uniqueness,setUniqueness] = useState(5);
    const [valueRating,setValueRating] = useState(5);
    const [overallRating,setOverallRating] = useState(5);
    const [whiskeyType,setWhiskeyType]=useState("");

    const [noseCereal, setNoseCereal]=useState(5);
    const [noseFruit, setNoseFruit]=useState(5);
    const [noseFloral, setNoseFloral]=useState(5);
    const [noseSpice, setNoseSpice]=useState(5);
    const [noseWood, setNoseWood]=useState(5);
    const [noseNotes,setNoseNotes]=useState("");

    const [palateCereal, setPalateCereal]=useState(5);
    const [palateFruit, setPalateFruit]=useState(5);
    const [palateFloral, setPalateFloral]=useState(5);
    const [palateSpice, setPalateSpice]=useState(5);
    const [palateWood, setPalateWood]=useState(5);
    const [palateNotes,setPalateNotes]=useState("");

    const [finishCereal, setFinishCereal]=useState(5);
    const [finishFruit, setFinishFruit]=useState(5);
    const [finishFloral, setFinishFloral]=useState(5);
    const [finishSpice, setFinishSpice]=useState(5);
    const [finishWood, setFinishWood]=useState(5);
    const [finishNotes,setFinishNotes]=useState("");

    return (
        <div className="reviewForm">
            <NavBar/>
            <h2 className="mt-3">New Whiskey Information</h2>
            <div className="form col-md-6 offset-md-3 validated-form" noValidate  encType="multipart/form-data">
            <form action="/whiskeys" method="POST">

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
                    <textarea className="form-control" placeholder="Enter Notes Here" id="floatingTextarea" onChange={e=>setNotes(e.target.value)}></textarea>
                    <label htmlFor="floatingTextarea">Whiskey Notes</label>
                </div>
                {/*accordian starts here */}

                <div className="accordion mt-5" id="scoreAccordian">
                    <div className="accordion-item">
                        <h3 className="accordian-header" id="headingNose">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNose" aria-expanded="true" aria-controls="collapseNose">
                            Nose
                            </button>                    
                        </h3>

                        <div id="collapseNose" class="accordion-collapse collapse show" aria-labelledby="headingNose" data-bs-parent="#scoreAccordion">
                            <div class="accordion-body">
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
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePalate" aria-expanded="false" aria-controls="collapsePalate">
                            Palate
                            </button>                    
                        </h3>
                        
                        <div id="collapsePalate" class="accordion-collapse collapse" aria-labelledby="headingPalate" data-bs-parent="#scoreAccordion">
                            <div class="accordion-body"></div>
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
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFinish" aria-expanded="false" aria-controls="collapseFinish">
                            Finish
                            </button>                    
                        </h3>
                        <div id="collapseFinish" class="accordion-collapse collapse" aria-labelledby="headingFinish" data-bs-parent="#scoreAccordion">
                            <div class="accordion-body"></div>
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



                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default NewReviewForm;
