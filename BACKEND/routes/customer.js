const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let Customer = require('../models/customer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './frontend/public/images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

router.route('/add').post(upload.single('photo'), (req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const address = req.body.address;
    const phone = Number(req.body.phone);
    const email = req.body.email;
    const photo = req.file.filename;

    const newCustomerData = {
        name,
        age,
        gender,
        address,
        photo,
        email, 
        phone
    }

    const newCustomer = new Customer(newCustomerData);

    newCustomer.save()
           .then(() => res.json('Customer Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    Customer.find().then((customers)=>{
        res.json(customers);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(upload.single('photo') , async (req , res)=>{  //update data
    let CustomerID = req.params.id;
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const address = req.body.address;
    const phone = Number(req.body.phone);
    const email = req.body.email;
    const photo = req.file.filename;


    const updateCustomer = {name , age , gender , address , photo , phone , email};

    await Customer.findByIdAndUpdate(CustomerID , updateCustomer)
    .then(()=>{
        res.status(200).send({status : "Customer Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let CustomerID = req.params.id;

    await Customer.findByIdAndDelete(CustomerID)
    .then(()=>{
        res.status(200).send({status : "Customer has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

router.route("/get/:id").get(async (req , res)=>{  //search data
    let CustomerID = req.params.id; 

    await Customer.findById(CustomerID)
    .then((customers)=>{
        res.status(200).send({customers});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with fetching data" , error : err.message});
    });
});

module.exports = router;