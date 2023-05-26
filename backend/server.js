const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const BagsRouter = require('./routes/BagsRouter')
const cors = require('cors')
const productList = require('./models/BagsInfo')
const { response } = require('express')
const Products = require('./models/BagsInfo')
const AuthRouter = require('./routes/Auth')
const Cart = require('./routes/Cart')

const server = require("http").createServer(app);

dotenv.config()

  mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
  }).then(()=>{
    console.log(`successfully connected`);
    }).catch((e)=>{
    console.log(`not connected`, e);
    });

app.use(express.json())
app.use(cors())
app.use('/bags', BagsRouter)
app.use('/cart', Cart)
app.use('/users', AuthRouter)


server.listen(8000, ()=> console.log("App Running on PORT : 8000"))