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


// first test route
app.get('/', (req,res) => {
    res.send('Welcome to FlyBuy API');
});

// listen to port
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});