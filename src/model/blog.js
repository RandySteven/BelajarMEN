const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blog = new Schema({
    //Mengisi attribute pada Model
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

//exports modul berupa model
module.exports = mongoose.model('Blog', Blog);