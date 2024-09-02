
import React from "react";
import { speakerData } from "../data/speaker";

let Speakers=()=>{
    const firstFiveImages = speakerData.slice(0,5)
    return(
        <>
        <h2>Speakers</h2>
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
export default Speakers