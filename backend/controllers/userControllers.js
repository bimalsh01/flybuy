const userModel = require('../model/userModel');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// test route
router.get('/test', (req,res) => {
    res.send('Welcome to FlyBuy USER API');
});

// register route
router.post('/register',async (req,res) => {
    console.log(req.body);

    // destructuring json data --- STEP-1
    const {fname, lname, email, password} = req.body;

    // STEP-2 Validation
    if(!fname || !lname || !email || !password){
        return res.status(400).send("Please enter all fields");
    }

    try {
        // STEP-3 Check if user already exists
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(400).send("User already exists");
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
        res.status(200).send({
            message: "User registered successfully",
            user: newUser
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
    
});


// login route
router.post('/login', async(req,res)=>{
    console.log(req.body);

    // destructuring json data
    const {email, password} = req.body;

    // validation
    if(!email || !password){
        return res.status(400).send("Please enter all fields");
    }

    try {
        // find user
        const user = await userModel.findOne({email});
        if(!user){
            return res.json("User does not exist");
        }

        // compare password
        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if(!isCorrectPassword){
            return res.json("Invalid credentials");
        }

        // generate token and send response
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

        res.cookie(
            "token",
            token,
            {
                httpOnly: true,
                expires: new Date(Date.now() + 24*60*60*1000)
            }
        )

        res.status(200).send({
            message: "User logged in successfully",
            token: token,
            user: user
        });

        
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;