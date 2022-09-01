import React, {useState} from 'react';
import elephant from '../images/elephant.jpg';
import beach from '../images/beach.jpg';
import food from '../images/food.jpg';
import temple from '../images/temple.jpg'
import halong from '../images/halong.jpg';
import hanoi from '../images/hanoi.jpg';
import loop from '../images/loop.jpg';
import market from '../images/market.jpg';
import kelimutu from '../images/kelimutu.jpg';
import komodo from '../images/komodo.jpg';
import kuta from '../images/kuta.jpg';
import rajaampat from '../images/rajaampat.jpg';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
const Discover = () => {
    const[indonesia,setIndonesia]= useState(true)
    const[thailand, setThailand] = useState(true)
    console.log(thailand);
    const [vietnam, setVietnam] = useState(true);
    
    const handleSortCountry = (e)=> {
        //get value from event
        const value = e.target.value
        //turn display off for all non countries
        console.log(value);
        //set state of the other countries to false
        switch(value) {
            case "Indonesia":
                return setThailand(false), setVietnam(false), setIndonesia(true)
                 
                
            case "Thailand":
                setVietnam(false)
                setIndonesia(false)
                setThailand(true)
                break;
            case "Vietnam":
                setThailand(false)
                setIndonesia(false)
                setVietnam(true)
                break;

        }
        //when state is set to true we'll display the div. Default display will be none
    }
    return (
        <div>
        <Navbar/>
            <div id = "header">
                    <div class="title">
                            <p>Moments.</p>
                            <p>Enjoyed.</p>
                            <p class="welcome">Welcome to Excursion Escape!</p>
                    </div>
                    <button class ="imageButton"></button>
            </div>
            <div class = "quote">Discover cutlure in an intimate setting. Discover
                            the hidden gems cherished by locals. Discover Excursion 
                            Escape.
            </div>
            <div id = "trips">
                    <div id="instruction">
                        <h1>Find your dream excursion</h1>
                        <p>Explore all of our excursions, or apply a filter to narrow your search...</p>
                    </div> 
                    <div class="filterTrips">
                        <div class = "destination">
                            <h1>Destination</h1>
                            <p>Select from the dropdown below your dream destination...</p>
                            <label for="destinationInput">
                            <input value="" 
    onMouseOver="focus();old = value;" 
    onMouseDown = "value = '';" 
    onMouseUp="value = old;" onChange={(e)=>handleSortCountry(e)}  list = "destinations" placeholder="Select your destination..." name = "destinationInput" id="destinationInput"/>
                            </label>
                            <datalist id="destinations" >
                                <option value ="Indonesia"/>
                                <option value ="Thailand"/>
                                <option value ="Vietnam"/>
                            </datalist>
                        </div>
                        <div class = "duration">
                            <h1>Duration</h1>
                            <p>Select length of the excursion...</p>
                            <input type = "range" list="tickmarks"  step="1" min="0" max="3"/>
                            <datalist id= "tickmarks">
                                <option value ="0" label="Any"></option>
                                <option value="1" label="Half-Day"/>
                                <option value="2" label = "Full-Day"/>
                                <option value="3" label = "Over-Night"/>
                            </datalist>
                        </div>
                        <div class = "budget">
                            <h1>Budget</h1>
                            <p>How much are you looking to spend?</p>
                            <input type = "range" list = "tickmarks" step="1"min="0" max="3"/>
                            <datalist id = "tickmarks">
                                <option value = "0" label="Any"></option>
                                <option value = "1">$0-$100</option>
                                <option value = "2">$101-$250</option>
                                <option value = "3">$250+</option>
                            </datalist>
                        </div>
                    </div>
                    <div id="exploreTrips">
                    {/*Thailand*/}
                        <div  id="excursion" style={{backgroundImage: `url(${elephant})`, display: thailand===true ? "flex" : null }} >
                            <div id="country">Thailand</div>
                            <div id="excursionTitle">Elephant Forest Adventure</div>
                            <div class = "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$100</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Full-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link to="/trips/elephant-forest-adventure">More Information</Link></button>
                        </div>
                        <div id="excursion" style={{backgroundImage: `url(${temple})`, display: thailand ? "flex" : null }}>
                            <div id="country">Thailand</div>
                            <div id="excursionTitle">Temple Tour</div>
                            <div class = "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$30</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Half-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link to="/trips/temple-tour">More Information</Link></button>
                        </div>
                        <div id="excursion" style={{backgroundImage: `url(${beach})`, display: thailand ? "flex" : null }}>
                            <div id="country">Thailand</div>
                            <div id="excursionTitle">Koh Phi Phi Espcape</div>
                            <div class = "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$60</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Half-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link to="/trips/koh-phi-phi-escape">More Information</Link></button>
                        </div>
                        <div id="excursion" style={{backgroundImage: `url(${food})`, display: thailand ? "flex" : null }}>
                            <div id="country">Thailand</div>
                            <div id="excursionTitle">Home Stay</div>
                            <div class = "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$90</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Over-Night</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link to="/trips/home-stay">More Information</Link></button>
                        </div>
                        {/*Vietnam*/}
                        <div id="excursion" style={{backgroundImage: `url(${halong})`, display: vietnam ? "flex" : null }} >
                            <div id="country">Vietnam</div>
                            <div id="excursionTitle"> Ha Long Bay Tour </div>
                            <div class = "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$50</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Half-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link to="/trips/ha-long-bay-tour">More Information</Link></button>
                        </div>
                        <div id="excursion" style={{backgroundImage: `url(${hanoi})`, display: vietnam ? "flex" : null }}>
                            <div id="country">Vietnam</div>
                            <div id="excursionTitle">Hanoi walking tour</div>
                            <div class = "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$30</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Half-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link to="/trips/hanoi-walking-tour">More Information</Link></button>
                        </div>
                        <div id="excursion" style={{backgroundImage: `url(${loop})`, display: vietnam ? "flex" : null }}>
                            <div id="country">Vietnam</div>
                            <div id="excursionTitle">Ha Giang Loop On Motorbike</div>
                            <div class = "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$150</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Over-Night</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link to="/trips/ha-giang-loop-on-motorbike">More Information</Link></button>
                        </div>
                        <div id="excursion" style={{backgroundImage: `url(${market})`, display: vietnam ? "flex" : null }}>
                            <div id="country">Vietnam</div>
                            <div id="excursionTitle">Market Tour and Cooking Class</div>
                            <div class = "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$40</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Half-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link to="/trips/market-tour-and-cooking-class">More Information</Link></button>
                        </div>
                        {/*Indonesia*/}
                        <div id="excursion" style={{backgroundImage: `url(${rajaampat})`, display: indonesia ? "flex" : null }} >
                            <div id="country">Indonesia</div>
                            <div id="excursionTitle">Scuba Diving at Raja Ampat</div>
                            <div class = "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$110</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Full-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link to="/trips/scuba-diving-at-raja-ampat">More Information</Link></button>
                        </div>
                        <div id="excursion" style={{backgroundImage: `url(${kelimutu})`, display: indonesia ? "flex" : null }}>
                            <div id="country">Indonesia</div>
                            <div id="excursionTitle">Trekking Kelimutu Volcano</div>
                            <div class = "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$80</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Full-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link to="/trips/trekking-kelimutu-volcano">More Information</Link></button>
                        </div>
                        <div id="excursion" style={{backgroundImage: `url(${komodo})`, display: indonesia ? "flex" : null }}>
                            <div id="country">Indonesia</div>
                            <div id="excursionTitle"> Komodo Dragon Watching on Komodo Island</div>
                            <div class = "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$50</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Half-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link to="/trips/komodo-dragon-watching-on-komodo-island">More Information</Link></button>
                        </div>
                        <div id="excursion" style={{backgroundImage: `url(${kuta})`, display: indonesia ? "flex" : null }}>
                            <div id="country">Indonesia</div>
                            <div id="excursionTitle">Surfing On Kuta Beach</div>
                            <div class = "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$75</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Half-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link to="/trips/surfing-on-kuta-beach">More Information</Link></button>
                        </div>
                    </div> 
                   
            </div>
        </div>
    )
};
export default Discover;