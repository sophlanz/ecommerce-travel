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
        const [totalDisplay, setTotalDisplay] = useState(0);
        const [cartShown, setCartShown] = useState(false);
       
        //update the total state everytime it changes
        useEffect(() => {
              setTotalDisplay(total)
          }, [total]);
    return (
            <div>
        <div id = 'navBar'>
                <div id="leftNav">
                        <li> <Link to={"./Disocver"}>Discover</Link></li>
                        <li> <Link to={"./About"}>About</Link></li>
                        <li> <Link to={"./Contact"}>Contact</Link></li>
                </div>
                <div id = "centerNav">
                        <a href="">Excursion Escape</a>
                </div>
                <div id = "rightNav">
                <li  id="bagContainer" className="shoppingBag" onClick =  {()=> setCartShown(true)}>{totalDisplay}</li>
                        <Facebook class = "facebook" alt="facebook"/>
                        <Twitter class = "twitter" alt= "twitter"/>
                        <Instagram class = "instagram" alt="instagram"/>
                </div>
        </div>
        <div>
        <Modal isOpen={cartShown} className="Modal" overlayClassName="Overlay">
                <button onClick = {()=> setCartShown(false)}>x</button>
                <ShoppingCart/>
        </Modal>
        
        </div>
        </div>
    )
}
export default Navbar;