const {moviePayment,orderMovie}=require("../controllers/paymentController");

const payrouter=require("express").Router();

payrouter.post("/payment",moviePayment)
payrouter.get("/order/",orderMovie)

module.exports=payrouter