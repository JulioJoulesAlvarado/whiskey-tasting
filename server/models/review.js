
const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const reviewSchema=new Schema({
    name:String,    
    proof: Number,
    year: Number,
    id: String,
    distillery:String,
    noseRating:Number,
    palateRating: Number,
    finishRating:Number,
    uniqueness:Number,
    value:Number,
    overall: Number,
    age: String,
    whiskeyType: String,
    retail: String,
    notes:String,
    color: String,
    nose:{
        cereal:Number,
        fruit:Number,
        floral:Number,
        spice:Number,
        wood:Number,
        notes:String,
    },
    palate:{
        cereal:Number,
        fruit:Number,
        floral:Number,
        spice:Number,
        wood:Number,
        notes:String,
    },
    finish:{
        cereal:Number,
        fruit:Number,
        floral:Number,
        spice:Number,
        wood:Number,
        notes:String,
    },
});

module.exports= mongoose.model('Review', reviewSchema);

