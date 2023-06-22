// imporing express
const express = require('express');
require('dotenv').config();

const app = express();


app.get('/', (req,res) => {
    res.send('Welcome to FlyBuy API');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});