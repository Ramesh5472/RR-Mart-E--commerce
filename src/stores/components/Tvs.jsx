
import React from "react";
import { tvData } from "../data/tv";

const Tvs =()=>{

    const firstFiveImages = tvData.slice(0,5)
    return(
        <>
        <h2>Tv</h2>
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
export default Tvs