import '../data.js'
import React from "react";

const Content = (items) => {
    const { src, photographer } = items;


    return (
        <div>
            <img src={src.large} alt="img" />

            <h1>{photographer}</h1>

        </div>
    )
}

export default Content;