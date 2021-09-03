const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    itemId: {
        type: Number,
        required: true,
        trim: true
    },

    itemName: {
        type: String,
        required: true,
        trim: true
    }, 

    date: {
        type: String,
        required: true,
        trim: true
    },

    quantity: {
        type: String,
        required: true,
        trim: true
    }, 


    
});

const Image = mongoose.model('request', ImageSchema);

module.exports = Image;