const router = require('express').Router();
//let User = require('../models/food');
let User = require('../models/shortcomings');



router.route('/add').post( (req, res) => {
    const scid = req.body.scid;
    const scitem = req.body.scitem;
    const itemid = req.body.itemid;
    const qty = req.body.qty;
    const reqdate = req.body.reqdate;
    //const photo = req.file.filename;

    const newUserData = {
        scid,
        scitem,
        itemid,
        qty,
        reqdate,
        //photo
    }

    const newUser = new User(newUserData);

    newUser.save()
           .then(() => res.json('User Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    User.find().then((students)=>{
        res.json(students);
    }).catch((err)=>{
        console.log(err);
    });

});
/*
router.route("/update/:id").put(upload.single('photo') , async (req , res)=>{  //update data
    let userID = req.params.id;
    const scid = req.body.scid;
    const scitem = req.body.scitem;
    const itemid = req.body.itemid;
    const qty = req.body.qty;
    const reqdate = req.body.reqdate;
    //const photo = req.file.filename;

    const updateStudent = {scid, scitem , itemid , qty , reqdate};

    await User.findByIdAndUpdate(userID , updateStudent)
    .then(()=>{
        res.status(200).send({status : "User Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let userID = req.params.id;

    await User.findByIdAndDelete(userID)
    .then(()=>{
        res.status(200).send({status : "User has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

router.route("/get/:id").get(async (req , res)=>{  //search data
    let userID = req.params.id; 

    await User.findById(userID)
    .then((students)=>{
        res.status(200).send({students});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with fetching data" , error : err.message});
    });
});*/

module.exports = router;