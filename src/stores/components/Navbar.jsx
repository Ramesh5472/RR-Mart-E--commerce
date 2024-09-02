


import React from "react";
import {Link} from "react-router-dom";
import { useCart } from "../../context/CartContext";


const Navbar =()=>{

    const {cartItems} = useCart()
    return(
        <>
        <div className="navSection">
            <div className="title">
                <h2>RR-Mart</h2>
            </div>
            <div className="search">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="user">
                <div className="user-detail">
                    SignIN/SignUP
                </div>
                <Link to="/cart">
                <div className="cart">Cart
                    <span>
                        {cartItems.length}
                    </span>
                </div>
                </Link>
            </div>

        </div>
        <div className="subMenu">
            <ul>
                <Link to='/Mobiles'> <li>Mobiles</li></Link>
               <Link to='/Woman Dresses'><li>Woman Dressing</li></Link>
               <Link to='/Computers'> <li>Computers</li></Link>
               <Link to='/Watches'> <li>Watches</li></Link>
               <Link to='/Mens Dress'> <li>Men Fashion</li></Link>
               <Link to='/furnitures'> <li>Furniture</li></Link>
               <Link to='/Acs'> <li>Ac</li></Link>
               <Link to='/Kitchen'> <li>Kitchen</li></Link>
               <Link to='/books'> <li>Books</li></Link>
                <Link to='/Tvs'><li>Tvs</li></Link>
                <Link to='/fridges'><li>Fridges</li></Link>
                <Link to='/Speakers'><li>Speakers</li></Link>
            </ul>
        </div>
        </>
    )
}
export default Navbar