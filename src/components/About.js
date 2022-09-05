import React from 'react';
import Navbar from '../components/Navbar';
import videoOcean from '../videos/video.mp4';

const About = () => {
return(
    <div>
        <Navbar/>
        <div className="aboutHeader">
             <video className="boat"controls autoPlay loop muted>
                <source src={videoOcean} type="video/mp4"></source>
            </video>
        </div>
        <div className="aboutInfo">
            <div className="quoteAbout">
                <p>We Provide The Way.</p>
                <p>You Provide The Energy.</p>
            </div>
            <div className="overviewAbout">
                <p>Excursion Escape is the future of booking excursions that will reveal to you
                the most cherished adventures by locals. Along the way you will create memories
                to carry with you for a life-time, and bring home a new lens through which you 
                can view the world from a deeper perspective. 
                </p>
            </div>
        </div>
        
    </div>
)
}
export default About;