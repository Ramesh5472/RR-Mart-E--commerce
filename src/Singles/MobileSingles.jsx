
import React from "react";
import { mobileData } from "../stores/data/mobiles";
import { useParams } from "react-router";
import Navbar from "../stores/components/Navbar";
import { useCart } from "../context/CartContext";

function MobileSingle(){
    
    let {id} = useParams()

    const {addToCart, cartItems} = useCart()

    let product = mobileData.find((item)=>item.id === id)
    console.log(id)
    return(
        <>
        <Navbar></Navbar>
        <div className="ind-page">
            <div className="ind-image">
                <img src={product.image} alt="" />
            </div>
           <div className="ind-details space">
            <div className="ind-company">
                <h2>{product.company}</h2>
            </div>
           <div className="ind-model space">
                <h3>{product.model}</h3>
            </div>
            <div className="ind-price space">
                <h2>{product.price}</h2>
            </div>
            <div className="ind-description space">
                <h3>{product.description}</h3>
            </div>
            <button onClick={()=>addToCart(product)}>Add to cart</button>
           </div>

        </div>
        </>
    )
}
export default MobileSingle