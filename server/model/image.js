const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    filename:String,
    contentType:String,
    image:Buffer
})

module.exports = mongoose.model('Image',imageSchema);