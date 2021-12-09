import React from 'react'
import "./index.css";

const Products = (props) => {
    return(
        <div className="productContainer">
            {props.products.map(product => 
                <div key={product.MovieId} className="product">
                    <h3>{product.MovieName}</h3>
                    <p>{product.Description}</p>
                    <h5>Rs {product.RentAmt}</h5>
                    <button onClick={() => props.buyNow(product.MovieId)}>
                        Rent now
                    </button>
                </div>
            )}
        </div>
    )
}

export default Products;