const {addMovie,getMovieDetails,MovieList,MoviesByGenre}=require("../controllers/movieController")

const movierouter = require('express').Router()

movierouter.post("/addNewMovie",addMovie)
movierouter.get("/findByGenre/",MoviesByGenre)
movierouter.get("/findById/",getMovieDetails)
movierouter.get("/List",MovieList) 
module.exports=movierouter;