const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const app = express();
const  {products}  = require("./src/data");

const key_id = "rzp_test_11uZlqQcw3DCmb";
const key_secret = "FpolAAE7GM8PgMZw4K02dhUG";
var instance = new Razorpay({
    key_id,
    key_secret
})

app.use(cors());
app.use(express.json());
app.get("/products", (req,resp) => { 
    resp.status(200).json(products);
});

app.get("/order/:productId", (req, resp) => {
    const {productId} = req.params;
    var product =products.find(product => product.MovieId === productId)
    const amount = product.RentAmt * 100;
    const currency = 'INR';
    const notes = {Movie_name:product.MovieName};

    instance.orders.create({amount, currency, notes}, (error, order) => {
        if(error){
            return resp.status(500).json(error);
        }
        order.movieId = product.MovieId
        // console.log(order);
        return  resp.status(200).json(order);
    });
});

app.get("/", (req, resp) => {
    resp.status(200).send({"message":"success"})
});

app.listen(8000, () => {
    console.log("Server listening on port 8000");
}); 