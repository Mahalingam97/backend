const {movie,movieCast,user,userMovies} =require("../models");
const getUserMovies = async(req,res)=>{
    var query = require('url').parse(req.url,true).query;
    var id=query.id;
    var movies=[];
    var movieslist=[]
    try{
       const mymovies=await userMovies.findAll({
            where:{userId:id},   
        }).then(data=>{
           data.forEach(e=>{ movies.push({movieId:e.MovieId})})
        })
         movies=JSON.stringify(movies)
         console.log(movies)
        movies=JSON.parse(movies)
        console.log(movies)
        movies.map(async m=>{
        var  mymoviesList=await movie.findAll({
            where:{MovieId:m.movieId},
            include: [{model: movieCast,as:"movieCast"}]
        })
        movieslist.push(mymoviesList)
    })
        res.status(200).json(movieslist)
    }catch(e){
        console.log(e);
    }
}
module.exports={getUserMovies};