import React from "react";
import { useState } from "react";
import Data from './data.json';
const AllCollection=()=>{
  return(
    <div>
      {
        Data.map(rec=>{
          return(
            <div className="box">
              <img src={rec.Img} alt=""/>
            </div>  
          )
        })
      }
    </div>
  )
}
export default AllCollection;