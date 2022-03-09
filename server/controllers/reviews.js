
const Review = require('../models/review');



module.exports.index= async (req,res)=> {
    const reviews= await Review.find({});
    //console.log(reviews);
    /*await Review.find({}, (err, reviews)=>{
        if(err){
            return res.status(400).json({success:false,error:err})
        }
        if(!reviews.length){
            return res
                .status(404)
                .json({success:false,error:'Reviews Not Found'})
        }
        return res.status(200).json({success:true, data:reviews})
    }).catch(err=>console.log(err));
    */

    //res.render('campgrounds/index',{campgrounds});
    return res.status(200).json({success:true, data:reviews});
}

/*module.exports.renderNewForm=(req,res)=>{

    //res.render('campgrounds/new');
}*/

module.exports.createReview = async (req,res,next)=>{
    
    
    const review=new Review(req.body);
    //console.log(req.body);
    await review.save()
                .then(() => {
                    return res.status(201).json({
                        success: true,
                        id: movie._id,
                        message: 'Review created!',
                    })
                })
                .catch(error => {
                    return res.status(400).json({
                    error,
                    message: 'Review not created!',
                    })
                })

    //res.redirect(`reviews/${review._id}`);
}

module.exports.showReview= async (req,res)=> {
    //console.log(req.params.id)
    const review = await Review.find({id:req.params.id})
    if(!review){
        req.flash('error', "That Review Does not Exist");
        return res.status(400).json({
            error,
            message: 'Review not created!',
            });
    }
    
    //res.render('reviews/show',{review});
    //console.log("Found It!")
    //console.log(review)
    return res.status(200).json({success:true, data:review});
}

/*module.exports.renderEditForm = async (req,res)=> {
    const {id}=req.params;
    const review = await Review.findById(id);
    
    if(!review){
        req.flash('error', "That Review Does not Exist");
        return res.redirect('/whiskeys');
    }
    //res.render('whiskeys/edit',{whiskey});

}*/

/*module.exports.renderCreateForm= async (req,res)=> {
    const review= new Review({
        
    });
    await review.save();
    res.send(review);
}*/

module.exports.updateReview= async (req,res)=> {
    
    const {id}=req.params;
    
    const review= await Review.findByIdAndUpdate(id,req.body);
    
    //console.log(review);
   
    await review.save();
    
    req.flash('success', "Update Made!" )
    
}

module.exports.deleteReview= async (req,res)=> {

    const {id}=req.params;
    const review = await Review.findByIdAndDelete(id);
    req.flash("success", "Deleted Review!")
    
}
