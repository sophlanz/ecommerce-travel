import React from 'react';
import copyRight from '../../public/images/copyright.png';
import gitHub from '../../public/images/github.png';
const Footer = () => {
    return(
        <footer>
            <p>Copyright <img src={copyRight} style={{height:"20px", width:"20px"}}/> 2022 <img src={gitHub} style={{height:"20px", width:"20px"}}/> sophlanz</p>
        </footer>
    )
}
export default Footer;