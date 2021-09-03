const router = require('express').Router();

let marketing = require('../models/marketingfood');



router.route("/").get((req , res)=>{ //route for display all
    
    marketing.find().then((marketing)=>{
        res.json(marketing);
    }).catch((err)=>{
        console.log(err);
    });

});


module.exports = router;