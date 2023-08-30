import React, { useState } from "react";
import Data from './data.json';

const AllCollection = ()=>{
    
    return(
        <div>
        {
            Data.map(rec => {
                return (
                <div className='box'>
                    <img src={rec.Img} alt="hhh" />
                </div>
                )
            })
            }
        </div>
    )
}
export default AllCollection;