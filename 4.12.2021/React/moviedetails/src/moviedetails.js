import './App.css';
import axios from 'axios';
import React, { useEffect ,useState} from 'react';
import "./moviedetails.css"
import MovieBasic from "./movie/basic"
import MovieCast from './movie/cast';

function Details() {  
  const [movie,setmovie]= useState([])
  const [cast,setcast]=useState([])
  const [payment, setPayment] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [signature, setSignature] = useState("");
  
  useEffect(()=>{
    axios.get("http://localhost:6000/movie/findById/?id=03f11cc4-4bea-421a-af60-a1045b066d42")
    .then((result)=>{ 
      setmovie(result.data)
      setcast(result.data.movieCast)
    })
  },[])

  const buyNow = async (productId) => {
    // const res = await axios.get(`http://localhost:8000/order/${productId}`);
     const res = await axios.get(`http://localhost:6000/movie/order/${productId}`)
     console.log(res.data);
     setmovie(res.data)   
     if(res.status !== 200){
       return 
     }
     const options = {
       "key": "rzp_test_11uZlqQcw3DCmb",
       "amount": res.data.amount,
       "currency": res.data.currency,
       "name": res.data.notes,
       "description": res.data.notes.Movie_name,
       "image": "https://example.com/your_logo",
       "order_id": res.data.id,
       "handler": function (response){
         
           setPaymentId(response.razorpay_payment_id);
           setOrderId(response.razorpay_order_id);
           setSignature(response.razorpay_signature);
           setPayment(true);
       },
       "prefill": {
           "name": "Mahalingam K",
           "email": "mahalingam9894@example.com",
           "contact": "9999999999"
       }
   };
   var rzp1 = new window.Razorpay(options);
 
   rzp1.open();
 
   rzp1.on('payment.failed', function (response){
           alert(response.error.code);
          
   });
   }

  return (
    <div className="movie-detailed-page"> 
      <MovieBasic movie={movie}/>
      <MovieCast movie={movie} cast={cast} />
    </div>
  );
}

export default Details;



