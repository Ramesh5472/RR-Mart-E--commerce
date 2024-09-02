
import React from "react";
import { booksData } from "../data/books";

const Books =()=>{

    const firstFiveImages = booksData.slice(0,5)
    return(
        <>
        <h2>Books</h2>
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
export default Books