import React, {useState} from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Facebook} from '../images/facebook.svg';
import {ReactComponent as Instagram} from '../images/instagram.svg';
import {ReactComponent as Twitter} from '../images/twitter.svg';
const Navbar = ({bagCount}) => {
    return (
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
                        <li  id="bagContainer" className="shoppingBag"><Link to={"../../shopping-cart"}>Bag</Link></li>
                        <Facebook class = "facebook" alt="facebook"/>
                        <Twitter class = "twitter" alt= "twitter"/>
                        <Instagram class = "instagram" alt="instagram"/>
                </div>
        </div>
    )
}
export default Navbar;