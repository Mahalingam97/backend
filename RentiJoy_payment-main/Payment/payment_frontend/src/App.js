import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Products from "../src/components/products";

function App() {

  const [products, setProducts] = useState([]);
  const [payment, setPayment] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [signature, setSignature] = useState("");
  const [movie,setMovie]=useState([])
  useEffect( () => {
    getProducts();
  }, []);

  const getProducts = async () => {
   // const res = await axios.get(`http://localhost:8000/products`);
   const res = await axios.get(`http://localhost:6000/movie/list`)
    console.log(res);
    if(res.status === 200){
      setProducts(res.data);
    }
  };

  const buyNow = async (productId) => {
   // const res = await axios.get(`http://localhost:8000/order/${productId}`);
    const res = await axios.get(`http://localhost:6000/movie/order/${productId}`)
    console.log(res.data);
    setMovie(res.data)   
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
    <div className="App">
      <header className="App-header">
        <div>
          {
            payment && (
              <div>
                <p>Movie Id:{movie.movieId}</p>
                <p>Payment Id: {paymentId}</p>
                <p>Order Id: {orderId}</p>
                <p>Signature: {signature}</p>
              </div>
            )}
        </div>
      </header>
      <Products products={products} buyNow={buyNow} />
    </div>
  );
}

export default App;
