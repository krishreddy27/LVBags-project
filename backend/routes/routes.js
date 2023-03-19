const express = require('express');
const router = express.Router();
const BagsInfo = require('../models/BagsInfo')


router.get('/', async (req, res) => {
    try {
        const bags = await BagsInfo.find();
        if (bags) {
            res.send(bags)
        }
        console.log(bags);
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

//Getting All Data from Products DB

router.get('/allProducts', (req, res) => {
    try {
        BagsInfo.collection.find().toArray(function (err, result) {
            res.send(result).status(200)
        })
    } catch (err) {
        res.send(err)
    }
})

//Adding Data to the Products

router.post('/addProducts', (req, res) => {
    console.log(req.body)
    const newProduct = new Products({
        productName: req.body.productName,
        productType: req.body.productType,
        price: req.body.price,
        model: req.body.model,
        description: req.body.description,
        image: req.body.image
    })
    newProduct.save()
        .then(response => {
            res.send("Product Added Successfully").json({ message: "Product Added Successfully" }).status(201)
        })
        .catch(err => console.log("Error Occured while Inserting productData", err))
})

//Get Only  Mobiles List

router.get('/type/:type', async (req, res) => {
    const query = {
        productType: new RegExp(req.params.type, 'i')
    }
    try {
        const bagType = await BagsInfo.find(query)
        res.send(bagType).status(200);
        console.log(bagType)
    } catch (err) {
        res.json({ message: "Error Occurred" }).status(400);
    }
})

//Search products name  wise from products list
router.post('/search', async (req, res) => {
    const productName = req.query.productName;
    console.log(productName);
    try {
        const filteredProducts = (await Products.find()).filter(product => {
            return product.productName.toLowerCase().toString().match(productName)
        })
        console.log(filteredProducts)
        filteredProducts.length > 0 ? res.send(filteredProducts).status(200) : res.send("Not found for this search").status(404)
    } catch (e) {
        console.log("Exception Occurred while searching productName", e);
        res.send("Something went wrong. Please try agin after Sometime").status(400);
    }
})



module.exports = router;