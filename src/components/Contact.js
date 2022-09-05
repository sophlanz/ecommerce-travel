import React from 'react';
import Navbar from './Navbar';
const Contact = () => {
    return(
        <div>
            <Navbar/>
            <div className="contactHeader"/>
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
                                <input type="number" placeholder="Your Number"/>
                        </div>
                        <div  className="inputField">
                                <label>Your Message</label>
                                <input type="text" placeholder="Tell us how we can help you"/>
                        </div>
                </form>
                <div className="tripQueries">

                </div>
            </div>
        </div>

    )
}
export default Contact;