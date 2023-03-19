const express = require('express')
const cartRouter = express.Router();
const Cart = require('../models/Cart')
const Products = require('../models/BagsInfo')


//Adding to Cart
cartRouter.get('/:id',async (req,res) =>{
    try{
            const addToCart = await Products.findById(req.params.id)
            console.log("Adding to newCart ------------->",addToCart)
            let itemCount = 0;
            const cart = new Cart({
                productName : addToCart.productName,
                price : addToCart.price,
                image : addToCart.image,
                date : addToCart.date,
                quantity : itemCount + 1,
                totalPrice : addToCart.price * itemCount 
            })

            cart.save()
            .then(res =>{
                console.log("New Product Added to the cart")
            })
            .catch(err =>{
                res.send("Error Occured while adding new product to the cart")
            })

            res.send(await Cart.find()).status(200)
            return;
        }catch(err){
        console.log("Error in addToCart Route",err)
    }
})


//Adding to Already in cart
cartRouter.get('/incart/:id', async(req,res) =>{
    const cartCheck = await Cart.findById(req.params.id);
    const itemCount = cartCheck.quantity + 1
    console.log("Cartcheck ------------>", cartCheck.quantity)
    Cart.findByIdAndUpdate(req.params.id,{
        quantity : itemCount,
        totalPrice : cartCheck.price * itemCount 
    }, function(err, result){
        if(err){
            console.log("Not Updated")
            throw err;
        }
        console.log("Updated cart Succesfully", result)
    })
    res.send(await Cart.find()).status(201)
})


//Get all cartDetails
cartRouter.get("/", async(req,res)=>{
    try{
        const newCart = await Cart.find()
        res.send(newCart).status(200)
        console.log("Cart details are Retrieved")
    }catch(err){
        res.send("Error Occured While Getting cart Details. PLease try again to add to cart")
    }
})

module.exports = cartRouter