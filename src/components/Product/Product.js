import React from 'react';
import './Product.css';
const Product = (props) => {
    console.log(props.product);
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>By:{seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} in stock - order soon</small></p>
                <button className="button-add-to-cart" onClick={() => props.handleAddToCart(props.product)}>add to cart</button>
            </div>
        </div>
    );
};

export default Product;