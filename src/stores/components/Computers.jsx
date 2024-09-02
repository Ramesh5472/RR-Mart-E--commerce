

import React from "react";
import { computerData } from "../data/computers";

let Computers=()=>{
    const firstFiveImages = computerData.slice(0,5)
    return(
        <>
        <h2>Computers</h2>
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
export default Computers