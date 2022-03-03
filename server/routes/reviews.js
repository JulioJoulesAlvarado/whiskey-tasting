const express = require('express');
const router = express.Router();

const ExpressError= require('../utils/ExpressError');
const catchAsync=require('../utils/catchAsync');

//const {reviewSchema} = require('../schemas.js');

//const {validateReview,isLoggedIn,isReviewAuthor}=require('../middleware')

const Review = require('../models/review');


const reviews=require('../controllers/reviews')




router.route('/whiskeys')
    .get(catchAsync( reviews.index))

router.route('/whiskey/:id')
    .get(catchAsync(reviews.showReview))
    .put(catchAsync(reviews.updateReview))
    .delete(catchAsync(reviews.deleteReview));
    
router.route('/whiskey')
    .post(catchAsync(reviews.createReview));




module.exports = router;
