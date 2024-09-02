

import React from "react";
import { womanData } from "../data/woman";

let Womans=()=>{
    const firstFiveImages = womanData.slice(0,5)
    return(
        <>
         <div className="proTitle">
         <h2>Womans Dress</h2>
         </div>
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
export default Womans