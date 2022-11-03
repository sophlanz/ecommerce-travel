import React, {useState, useEffect} from "react";
//import {ReactComponent as Facebook} from '../../public/images/facebook.svg';
import {ReactComponent as Instagram} from '../../public/images/instagram.svg';
import {ReactComponent as Twitter} from '../../public/images/twitter.svg';
import { useSelector } from 'react-redux';
import ShoppingCart from "./ShoppingCart";
import Modal from 'react-modal';
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
        const total = useSelector((state) => state.count[0].count)
        console.log(total);
        const [totalDisplay, setTotalDisplay] = useState(0);
        const [cartShown, setCartShown] = useState(false);
       
        //update the total state everytime it changes
        useEffect(() => {
              setTotalDisplay(total)
              const body = document.querySelector('body');
              /*no scroll, hide overflow */
              body.style.overflow = cartShown? 'hidden' : null;
          }, [total,cartShown]);
    return (
            <div>
            {/*if cart shown, set z-index of navbar back to 0 */}
        <div id = 'navBar' style={{zIndex: cartShown ? "0" : "1" }}>
                <div id="leftNav">
                        <li> <Link href="/">Discover</Link></li>
                        <li> <Link href="/about">About</Link></li>
                        <li> <Link href="/contact">Contact</Link></li>
                </div>
                <div id = "centerNav">
                        <li><Link href='/' >Excursion Escape</Link></li>
                </div>
                <div id = "rightNav">
                {/* onclick of shopping bag, change cartShown to true*/}
                <li  id="bagContainer" className="shoppingBag" onClick =  {()=> setCartShown(true)}>{totalDisplay}</li>
                        <a href="https://facebook.com" target="_blank"><Image src="/images/facebook.svg" className= "facebook" alt="facebook" height={30} width={30} /></a>
                        <a href="https://twitter.com" target="_blank"><Image src='/images/twitter.svg' className= "twitter" alt= "twitter" height={30} width={30}/></a>
                        <a href="https://instagram.com" target="_blank"><Image src="/images/instagram.svg" className= "instagram" alt="instagram" height={30} width={30}/></a>
                </div>
        </div>
        <div>
        <Modal ariaHideApp={false} isOpen={cartShown} className="Modal" overlayClassName="Overlay">
                <div className="cartTop">
                        <div className="cartHeader"><h1>YOUR BAG</h1><p>({totalDisplay})</p></div>
                        <button className="closeCart" onClick = {()=> setCartShown(false)}>x</button>
                </div>
                {totalDisplay === 0 ? 
                <div>
                <div className="cartList">
                <div className="emptyBag">
                <h1>Looks like your bag is empty!</h1>
                <button onClick={()=> setCartShown(false)}>Get Shopping Now!</button>
                </div>  
                </div>
                 
            <div className="checkOut">
                <p className="taxes">Taxes will be calculated at checkout.</p>
                <div className = "total"><p>Total</p><p>${total}</p></div>  
                <div className="coupon">
                    <div><input type = "checkbox" id="coupon" name="coupon"/>
                    <label htmlFor="coupon">Coupon Code</label></div>
                    <button>Checkout</button>  
                </div>
            </div>
            </div>
                : <ShoppingCart/>
                }
        </Modal>
        
        </div>
        </div>
    )
}
export default Navbar;