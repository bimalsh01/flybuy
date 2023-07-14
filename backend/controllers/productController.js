const productModal = require('../model/productModal');

const router = require('express').Router();
const cloudinary = require('cloudinary');

router.get('/', (req,res) => {
    res.send('Welcome to FlyBuy PRODUCT API');
});


router.post('/create', async (req,res) => {

    // destructuring step 1
    const {productName, 
        productPrice, 
        productCategory, 
        productDescription, 
        } = req.body;

    const {productImage} = req.files;

    // validation step 2
    if(!productName || !productPrice || !productCategory || !productDescription || !productImage){
        return res.status(400).json({msg: "Please enter all fields"});
    }

    // uplaod image section step 3
    const uploadedImage = await cloudinary.v2.uploader.upload(
        productImage.path,
        {
            folder: 'flybuy',
            crop:'scale',
        }
    )

    // save to database step 4
    try {

        const product = new productModal({
            productName: productName,
            productPrice: productPrice,
            productCategory: productCategory,
            productDescription: productDescription,
            productImage: uploadedImage.secure_url,
        })

        await product.save();
        res.status(200).json({msg: "Product created successfully"});
        
    } catch (error) {
        res.status(500).json(error.message);
    }
});

module.exports = router;