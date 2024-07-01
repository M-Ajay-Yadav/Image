const mongoose = require('mongoose');

const connectDb = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/e-commerce");
        console.log(`mongodb is connecting ... ... ...`)
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}


module.exports= connectDb;