

import React from "react";
import { furnitureData } from "../data/furniture";

let Furnitures=()=>{
    const firstFiveImages = furnitureData.slice(0,5)
    return(
        <>
        <h2>Furnitures</h2>
        <div className="ProSection">
            {
               firstFiveImages.map((item)=>{
                    return(
                        <div className="imgBox">
                            <img className="ProImage" src={item.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
export default Furnitures