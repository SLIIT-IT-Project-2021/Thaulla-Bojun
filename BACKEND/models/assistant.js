const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 

    age: {
        type: Number,
        required: true,
        trim: true
    },

    gender: {
        type: String,
        required: true,
        trim: true
    }, 
    
    photo: {
        type: String
    },

    address: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    birthdate: {
        type: String,
        required: true,
        trim: true
    }
});

const Image = mongoose.model('assistant', ImageSchema);

module.exports = Image;