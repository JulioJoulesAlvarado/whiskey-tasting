const mongoose = require('mongoose');
const reviews = require('./seedReview');

const Review = require('../models/review');


mongoose.connect('mongodb://localhost:27017/whiskeys');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await Review.deleteMany({});
    
        const rev = new Review({
            name: "Buffalo Trace",
            proof: 90,
            year: 2020,
            id:reviews[0].code,
            distillery:"Buffalo Trace",
            noseRating:5,
            palateRating: 6,
            finishRating:5,
            uniqueness:4,
            value:8,
            overall: 5.5,
            age: "At Least 8",
            whiskeyType: "Bourbon",
            retail: "$24.99",
            notes:"Most Standard Bourbon Profile",
            color: "copperLight",
            nose:{
                cereal:0,
                fruit:3,
                floral:0,
                spice:1,
                wood:2,
                notes:"Gummy Candy, Brown Sugar, Vanilla",
            },
            palate:{
                cereal:0,
                fruit:1,
                floral:0,
                spice:2,
                wood:2,
                notes:"Light Oak, Cinnamon,Brown Sugar, Caramel, high sweetness",
            },
            finish:{
                cereal:0,
                fruit:0,
                floral:0,
                spice:2,
                wood:2,
                notes:"Slight Spice, low cedar, Light Marshmallow,",
            },
        });
        await rev.save();
}

seedDB().then(() => {
    mongoose.connection.close();
})