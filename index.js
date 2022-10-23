const express = require('express');
const productRouter = require('./routes/product')
const mongoose = require("mongoose");
require("dotenv/config");



const app = express();


// 82.194.23.15/32
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.sjpf18q.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    (e) => {
        if (e) {
            console.log(e);
        }
        else {
            console.log("Connected to Database")
        }
    })
const isLoggedIn = false;


// //Middleware for auth
// app.use((req,res,next)=>{
//     if(!isLoggedIn){
//         res.send("You must be login first!")
//     }
//     else{
//         next();
//     }
// })
app.get('/', (req, res) => {
    if (!isLoggedIn) {
        res.send("Hello User");
    }
    else {
        res.send("Hello Guest");
    }
})
app.use('/products', productRouter)

app.listen(1000, () => {
    console.log("Server is running on 5000");
});

// const products = [
//     {
//         id:'string',
//         title:'string',
//         description:'string',
//         price:'number',
//     },
// ];

// GetAll Products //get
// Get Product //:id //get
// Create Product //post
// Update Product //:id //put
// Delete Product //id //delete

