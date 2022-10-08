import React, {useState, useEffect} from "react";
import {ReactComponent as Facebook} from '../../public/images/facebook.svg';
import {ReactComponent as Instagram} from '../../public/images/instagram.svg';
import {ReactComponent as Twitter} from '../../public/images/twitter.svg';
import { useSelector } from 'react-redux';
//import ShoppingCart from "./ShoppingCart";
import Modal from 'react-modal';
import Link from 'next/Link';
const Navbar = () => {
        const total = useSelector((state) => state.count[0].count)
        console.log(total);
        const [totalDisplay, setTotalDisplay] = useState(0);
        const [cartShown, setCartShown] = useState(false);
       
        //update the total state everytime it changes
        useEffect(() => {
              setTotalDisplay(total)
              const body = document.querySelector('body');
              body.style.overflow = cartShown? 'hidden' : null;
          }, [total,cartShown]);
    return (
            <div>
        <div id = 'navBar'>
                <div id="leftNav">
                        <li> <Link href="/">Discover</Link></li>
                        <li> <Link href="/About">About</Link></li>
                        <li> <Link href="/Contact">Contact</Link></li>
                </div>
                <div id = "centerNav">
                        <li><Link href='/' >Excursion Escape</Link></li>
                </div>
                <div id = "rightNav">
                <li  id="bagContainer" className="shoppingBag" onClick =  {()=> setCartShown(true)}>{totalDisplay}</li>
                        <a href="https://facebook.com" target="_blank"><Facebook class = "facebook" alt="facebook" /></a>
                        <a href="https://twitter.com" target="_blank"><Twitter class = "twitter" alt= "twitter"/></a>
                        <a href="https://instagram.com" target="_blank"><Instagram class = "instagram" alt="instagram"/></a>
                </div>
        </div>
        <div>
        <Modal ariaHideApp={false} isOpen={cartShown} className="Modal" overlayClassName="Overlay">
                <div className="cartTop">
                        <div className="cartHeader"><h1>YOUR BAG</h1><p>({totalDisplay})</p></div>
                        <button className="closeCart" onClick = {()=> setCartShown(false)}>x</button>
                </div>
                {/*<ShoppingCart/>*/}
        </Modal>
        
        </div>
        </div>
    )
}
export default Navbar;