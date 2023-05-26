const express = require('express');
const BagsRouter = express.Router();
const BagsInfo = require('../models/BagsInfo')


BagsRouter.get('/', async (req, res) => {
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

//search via Bag name API

BagsRouter.get('/search', async(req, res) => {
    const { name } = req.query;
    console.log("Search Param", name);
    try {
        const bags = await BagsInfo.find({ bagName: name })
        if(bags){
            console.log("Bags search List", bags)
            res.send(bags).status(200)
        }else{
            console.log("No bags found")
            res.send("No Bags Found").status(204)
        }
    } catch (err) {
        res.send(err)
    }
    console.log("Search Ended")
})

//Getting All Data from Products DB

BagsRouter.get('/search1', (req, res) => {
    const { params } = req.query;
    console.log("Search Param", req.query);
    try {
        BagsInfo.find({
            $or: [{
                $text: { $search: params.name },
                ...Object.keys(BagsInfo.schema.paths)
                    .filter(path => BagsInfo.schema.paths[path].instance === 'String').
                    map(path => ({ [path]: { $regex: params.name, $options: 'i' } }))
            }]
        })
            .then(response => {
                console.log("Bags Searched", response)
            })
            .catch(err => {
                let error = 'Error Occured while getting search Details'
                console.log(error)
                res.send(error).status(400);
            })
    } catch (err) {
        res.send(err)
    }
})

//Adding Data to the Products

BagsRouter.post('/addProducts', (req, res) => {
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

BagsRouter.get('/type/:type', async (req, res) => {
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
BagsRouter.post('/search', async (req, res) => {
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

//Navbar Search api  
BagsRouter.post("/search?")



module.exports = BagsRouter;