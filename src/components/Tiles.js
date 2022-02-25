import React from "react";

function Tiles({image, text, title, children}){
    return(
        <section>
            <img src={image} alt={text}/>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Tiles;