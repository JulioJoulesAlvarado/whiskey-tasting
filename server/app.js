
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const express = require('express');

const bodyParser=require('body-parser')
const cors = require('cors')

const path= require('path')
const mongoose = require('mongoose');

const Review= require('./models/review');
const reviewsRoutes = require('./routes/reviews');

const ExpressError= require('./utils/ExpressError');

const dbUrl=process.env.DB_URL || 'mongodb://localhost:27017/whiskeys'

mongoose.connect(dbUrl)

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

const ejsMate= require('ejs-mate');


const db=mongoose.connection;
db.on("error",console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected");
});

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use('/',reviewsRoutes);

app.get('/', (req,res)=>{
    res.send('Hello from future whiskey tasting!')
})

/*
app.all('*',(req,res,next) =>{
    console.log("Fail")
    next(new ExpressError('Page Not Found',404))
})*/
app.use((err,req,res,next) =>{
    const{statusCode = 500} = err;
    if(!err.message) err.message="Not Quite, my friend";
    //res.status(statusCode).render('error',{err});
})

app.listen(3000,()=>{
    console.log('Serving on port 3000')
})