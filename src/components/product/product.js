import React from 'react';
import './product.css';
const product = (props) => {
    return (
        <div className="product">
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div> 
                <h4 className='product-name'>{props.product.name}</h4>
                <br />
                <p><small>by: {props.product.Seller}</small></p>
                <p>${props.product.price}</p>
                <p><small>Only{props.product.Stock}left in stock-order soon</small></p>
                <button className="button" onClick={ () => props.handleAddProduct(props.product)}>Submit</button>
            </div>
        </div>
    );
};

export default product;