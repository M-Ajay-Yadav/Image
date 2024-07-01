const express = require('express');
const connectDb = require('./config/db');
const imageRoutes = require('./Routes/imageRoutes');
const cors = require('cors');
const app = express();
const port= 5000;

connectDb();
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


app.use('/',imageRoutes)

app.listen(port,()=>{
    console.log(`server is running on the port: ${port}`);
});