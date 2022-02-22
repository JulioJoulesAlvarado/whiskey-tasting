import react,{useState} from "react";

function ScoreCard(props){
    const {name,cereal,setCereal,floral,setFloral,fruit,setFruit,wood,setWood,spice,setSpice, notes,setNotes}=props;
    return(
            <div className={`scoreCard`}>
                <label htmlFor={`cerealRating${name}`} className="form-label mt-2"><b>Cereal:</b> On a scale of 0-5, how much does cereal do you detect? (Malt-Peat-Wheat): {cereal} </label>
                <input type="range" value={cereal} className="form-range" min="0" max="5" 
                    step="0" id={`cerealRating${name}`} onChange={e=>setCereal(e.target.value)}></input>

                <label htmlFor={`floralRating${name}`} className="form-label mt-2"><b>Floral:</b> On a scale of 0-5, how floral is this? (Botanical-Grassy-Herbal-Vegetative): {floral} </label>
                <input type="range" value={floral} className="form-range" min="0" max="5" 
                    step="0" id={`floralRating${name}`} onChange={e=>setFloral(e.target.value)}></input>
                
                <label htmlFor={`fruitRating${name}`} className="form-label mt-2"><b>Fruit:</b> On a scale of 1-5, how much fruit do you detect? (Apple-Apricot-Banana-Cherry-Citrus-Dark Fruits-Orange-Peach-Plum-Prune-Raising-Summer Fruits): {fruit} </label>
                <input type="range" value={fruit} className="form-range" min="0" max="5" 
                    step="0" id={`fruitRating${name}`} onChange={e=>setFruit(e.target.value)}></input>
                
                <label htmlFor={`spiceRating${name}`} className="form-label mt-2"><b>Spice:</b> On a scale of 1-5, how much spice do you detect? (Allspice-Anise-Cinnamon-Ginger-Licorice-Mint-Nutmeg-Pepper-Rye): {spice} </label>
                <input type="range" value={spice} className="form-range" min="0" max="5" 
                    step="0" id={`spiceRating${name}`} onChange={e=>setSpice(e.target.value)}></input>

                <label htmlFor={`woodRating${name}`} className="form-label mt-2"><b>Wood:</b> On a scale of 1-5, how much wood do you detect? (Cigar Box- Fresh Wood- Old Wood- Seasoned Wood- Smoky - Oak): {wood} </label>
                <input type="range" value={wood} className="form-range" min="0" max="5" 
                    step="0" id={`woodRating${name}`} onChange={e=>setWood(e.target.value)}></input>

                <div className="form-floating">
                    <textarea className="form-control" placeholder={`Enter ${name} Notes Here`} id={`notesFor${name}`} onChange={e=>setNotes(e.target.value)}></textarea>
                    <label htmlFor={`notesFor${name}`}>Notes for {name}</label>
                </div>
            </div>
            
    )
}
export default ScoreCard;