
import "../assests/basic.css"

export default function MovieBasic(props){
console.log(props);
    return(
        <div className="movie-basic">
        <div className="poster">
          <img alt="movie" src={props.movie.Poster}></img>
        </div>
        <div className="movie-info">
          <div className="movie-head">
            <h1>{props.movie.MovieName}</h1>
            <span className="year">{props.movie.Year}</span>
            <span className="duration">{props.movie.Duration}utes</span> 
            <div className="genre">{props.movie.Genre}</div>
          </div>
          <div className="movie-amt">
            <span><button>Rent  &#8377;{props.movie.RentAmt}</button></span>
            <span><button>Buy  &#8377;{props.movie.BuyAmt}</button></span>
          </div>
        </div> 
       
      </div>
    )
}