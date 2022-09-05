import React from 'react';
import Navbar from './Navbar';
import videoSurf from '../videos/video2.mp4';
const Contact = () => {
    return(
            <div>
            <Navbar/>
            <div className="contactHeader">
                 <video className="surf"controls autoPlay loop muted>
                     <source src={videoSurf} type="video/mp4"></source>
                 </video>
            </div>
            <div className="aboutContent">
            <div className="signUpContainer">
                <h1><span className="firstPart">DON'T BE SHY,</span><span className="lastPart">SAY HI.</span></h1>
                <form>
                    <div className="nameEmail">
                        <div className="inputField">
                             <label>Name</label>
                             <input type="text" placeholder="What's your name?"/>
                        </div>
                        <div  className="inputField">
                                <label>Email</label>
                                <input type="text" placeholder="Your fancy email"/>
                        </div>
                    </div>
                        <div  className="inputField">
                                <label>Number</label>
                                <input className="number" type="number" placeholder="Your Number"/>
                        </div>
                        <div  className="inputField">
                                <label>Your Message</label>
                                <textarea className="message" type="textarea" rows={5}cols={5} placeholder="Tell us how we can help you"/>
                        </div>
                        <button type="submit">Send</button>
                </form>
            </div>
            <div className="excursionQueries">
                    <div className="queriesTop">
                        <h1>Excursion Queries</h1>
                        <h2>Require information about an excursion?</h2>
                        <p className="queryContact">excursions@excursionescape.com</p>
                        <h2>Opening Hours</h2>
                        <p className="hours">Mon-Fri: 9am-5pm</p>
                        <h2>*We will do our best to get back to you as soon as possible,
                        but it may take up to 48 hours.</h2> 
                    </div>
                    <div className="queriesBottom">
                        <h2>Emergency Helpline</h2>
                        <p className="queryContact">555 2222 4444</p>
                        <h2>Contactable Hours</h2>
                        <p className="hours">Mon-Sun: 24 Hours</p>
                    </div>
                    </div>
                </div>
            </div>
        
        

    )
}
export default Contact;