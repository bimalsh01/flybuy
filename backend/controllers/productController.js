const router = require('express').Router();

router.get('/', (req,res) => {
    res.send('Welcome to FlyBuy PRODUCT API');
});

module.exports = router;