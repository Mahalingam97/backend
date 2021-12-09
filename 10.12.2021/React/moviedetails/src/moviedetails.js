import './App.css';
import axios from 'axios';
import React, { useEffect ,useState} from 'react';
import "./moviedetails.css"
import MovieBasic from "./movie/basic"
import MovieCast from './movie/cast';

function Details() {  
  const [movie,setmovie]= useState([])
  const [cast,setcast]=useState([])
  
  useEffect(()=>{
    axios.get("http://localhost:4000/movie/findById/?id=03f11cc4-4bea-421a-af60-a1045b066d42")
    .then((result)=>{ 
      setmovie(result.data)
      setcast(result.data.movieCast)
    })
  },[])

  return (
    <div className="movie-detailed-page"> 
      <MovieBasic movie={movie} />
      <MovieCast movie={movie} cast={cast} />
    </div>
  );
}

export default Details;



