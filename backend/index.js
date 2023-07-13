// import packages
const express = require('express');
const cors = require('cors');

const connectDB = require('./database/DB');

// dotenv config
require('dotenv').config();

// using express
const app = express();

// cors config
const corsOptions = {
    origin: true,
    credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions));

// connect to mongodb
connectDB();

// middleware json
app.use(express.json());

// All route config
app.use('/api/users', require('./controllers/userControllers'));
app.use('/api/products', require('./controllers/productController'));

// cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


// first test route
app.get('/', (req, res) => {
    res.send('Welcome to FlyBuy API');
});

// listen to port
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});