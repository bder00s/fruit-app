import React from "react";


function Product(props) {
    return (
    <article className="product">
        <img src={props.productImage} alt={props.productTitle}/>
        <h2> {props.productTitle}</h2>
        <p> {props.productDescription}.</p>
    </article>

);

}

export default Product;