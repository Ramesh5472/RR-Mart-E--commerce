

import React from "react";
import { acData } from "../data/ac";

let Acs=()=>{
    const firstFiveImages = acData.slice(0,5)
    return(
        <>
        <h2>Acs</h2>
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
export default Acs