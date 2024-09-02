

import React from "react";
import { menData } from "../data/men";

let Mens=()=>{
    const firstFiveImages = menData.slice(0,5)
    return(
        <>
        <h2>Mens Dress</h2>
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
export default Mens