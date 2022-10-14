import React from 'react';
import copyRight from '../../public/images/copyright.png';
import gitHub from '../../public/images/github.png';
import Image from 'next/image'
const Footer = () => {
    return(
        <footer>
            <p>Copyright <Image src='/images/copyright.png' height="20px" width="20px"/> 2022 <Image src="/images/github.png" height="20px" width="20px"/> sophlanz</p>
        </footer>
    )
}
export default Footer;