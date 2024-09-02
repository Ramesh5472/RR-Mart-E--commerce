

import React from "react";
import { kitchenData } from "../data/kitchen";
let Kitchen=()=>{
    const firstFiveImages = kitchenData.slice(0,5)
    return(
        <>
        <h2>Kitchen</h2>
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
export default Kitchen