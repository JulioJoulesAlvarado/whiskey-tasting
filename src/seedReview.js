import {v4 as uuidv4} from "uuid";

export default [
    {
        name: "Buffalo Trace",
        proof: 90,
        year: 2020,
        id:uuidv4(),
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
    },
    {
        name: "Blanton's K&L Pick",
        proof: 93,
        id: "Blanton's K&L Pick 2020",
        year:2020,
        distillery:"Buffalo Trace",
        noseRating:6.5,
        palateRating: 6.5,
        finishRating:6.5,
        uniqueness:6,
        value:6,
        overall: 6.5,
        age: "10yr",
        whiskeyType: "Bourbon",
        retail: "$69.99",
        notes:"Great Finish, palate lacking. WareHouse H, Rick 8,Barrel 99, 7/6/20",
        color: "copperLight",
        nose:{
            cereal:0,
            fruit:4,
            floral:0,
            spice:2,
            wood:2,
            notes:"Cherry/Orange Liquor, Brown Sugar, Cinnamon, baking spice, pie crust",
        },
        palate:{
            cereal:0,
            fruit:1,
            floral:0,
            spice:2,
            wood:2,
            notes:"Light Oak, Mellow brown sugar,Cinnamon,",
        },
        finish:{
            cereal:0,
            fruit:3,
            floral:0,
            spice:3,
            wood:2,
            notes:"Spice->Candy Finish->Slight HErbal, juicy/acidic",
        },
    },
];


