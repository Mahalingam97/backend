const express=require('express')
const cors=require('cors')
const {sequelize}=require('./models');
const movierouter=require("./routes/movieRoutes")
const userrouter=require("./routes/userRoutes")
const payrouter=require("./routes/paymentRoutes")
const mymovierouter=require("./routes/usermovieRoutes")
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
  });
  
const PORT=6000;
app.listen({port:PORT},async()=>{
    console.log(`server started at ${PORT}`)
    try{
       await sequelize.authenticate();
       console.log("connected");
    }catch(e)
    {
        console.log(e)
    }
    
})
app.get("/",(req,res)=>
{
    return res.json({"message":"Success"})
})
app.use('/movie',payrouter)
app.use('/user',userrouter)
app.use('/movie',movierouter);
app.use('/user/movies',mymovierouter)

/* sequelize model:generate --name User --attributes firstname:string, lastname:string*/ 