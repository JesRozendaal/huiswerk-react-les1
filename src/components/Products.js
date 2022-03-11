import React from "react";

function Products ({category,  image, text, price}) {
    return (
        <article>
            <span>{category}</span>
            <img src={image} alt={text}/>
            <p>{text}</p>
            <h4>€{price},-</h4>
        </article>
    )
}

export default Products;