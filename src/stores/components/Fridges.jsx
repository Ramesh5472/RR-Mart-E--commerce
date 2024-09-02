

import React from "react";
import { fridgeData } from "../data/fridge";

let Fridges=()=>{
    const firstFiveImages = fridgeData.slice(0,5)
    return(
        <>
        <h2>Fridges</h2>
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
export default Fridges