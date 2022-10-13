import '../data.js'
import React from "react";
import "./content.css";

const Content = (items) => {
    const { src, photographer } = items;


    return (

        <div className="content">
            <div className='content2'> <img src={src.large} alt="img" />
               <div className='alt'><h1>{photographer}</h1></div> 
            </div>




        </div>


    )
}

export default Content;