import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Facebook} from '../images/facebook.svg';
import {ReactComponent as Instagram} from '../images/instagram.svg';
import {ReactComponent as Twitter} from '../images/twitter.svg';
import { useSelector } from 'react-redux';
import ShoppingCart from "./ShoppingCart";
import Modal from 'react-modal';

const Navbar = () => {
        const total = useSelector((state) => state.count[0].count)
        console.log(total);
        const [totalDisplay, setTotalDisplay] = useState(0);
        const [cartShown, setCartShown] = useState(false);
       
        //update the total state everytime it changes
        useEffect(() => {
              setTotalDisplay(total)
              const body = document.querySelector('body');
              body.style.overflow = cartShown? 'hidden' : 'auto';
          }, [total,cartShown]);
    return (
            <div>
        <div id = 'navBar'>
                <div id="leftNav">
                        <li> <Link to={"/"}>Discover</Link></li>
                        <li> <Link to={"/About"}>About</Link></li>
                        <li> <Link to={"/Contact"}>Contact</Link></li>
                </div>
                <div id = "centerNav">
                        <li><Link to={'/'} >Excursion Escape</Link></li>
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
                <ShoppingCart/>
        </Modal>
        
        </div>
        </div>
    )
}
export default Navbar;