const userModel = require('../model/userModel');
const router = require('express').Router();
const bcrypt = require('bcrypt');

router.get('/test', (req,res) => {
    res.send('Welcome to FlyBuy USER API');
});

router.post('/register',async (req,res) => {
    console.log(req.body);

    // destructuring json data --- STEP-1
    const {fname, lname, email, password} = req.body;

    // STEP-2 Validation
    if(!fname || !lname || !email || !password){
        return res.send("Please fill all the fields");
    }

    try {
        // STEP-3 Check if user already exists
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.send("User already exists");
        }

        // password hashing
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // STEP-4 Save user to database
        const newUser = new userModel({
            fname: fname,
            lname: lname,
            email: email,
            password: hashPassword
        });

        // save user
        await newUser.save();

        // send response
        res.send("User registered successfully");
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }




});

module.exports = router;