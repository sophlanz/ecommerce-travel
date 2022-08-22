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
import Marquee from './Marquee';
import {Link} from 'react-router-dom';
const Discover = () => {
    return (
        <div>
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
                            <input  list = "destinations" placeholder="Select your destination..." name = "destinationInput" id="destinationInput"/>
                            </label>
                            <datalist id="destinations">
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
                        <div id="excursion" style={{backgroundImage: `url(${elephant})`}} >
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
                        <div id="excursion" style={{backgroundImage: `url(${temple})`}}>
                            <div id="country">Thailand</div>
                            <div id="excursionTitle">Temple Tour</div>
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
                            <button id = "moreInfo">More Information</button>
                        </div>
                        <div id="excursion" style={{backgroundImage: `url(${beach})`}}>
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
                            <button id = "moreInfo">More Information</button>
                        </div>
                        <div id="excursion" style={{backgroundImage: `url(${food})`}}>
                            <div id="country">Thailand</div>
                            <div id="excursionTitle">Home Stay</div>
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
                            <button id = "moreInfo">More Information</button>
                        </div>
                        {/*Vietnam*/}
                        <div id="excursion" style={{backgroundImage: `url(${halong})`}} >
                            <div id="country">Vietnam</div>
                            <div id="excursionTitle"> Ha Long Bay Tour </div>
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
                            <button id = "moreInfo">More Information</button>
                        </div>
                        <div id="excursion" style={{backgroundImage: `url(${hanoi})`}}>
                            <div id="country">Vietnam</div>
                            <div id="excursionTitle">Hanoi walking tour</div>
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
                            <button id = "moreInfo">More Information</button>
                        </div>
                        <div id="excursion" style={{backgroundImage: `url(${loop})`}}>
                            <div id="country">Vietnam</div>
                            <div id="excursionTitle">Ha Giang Loop On Motorbike</div>
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
                            <button id = "moreInfo">More Information</button>
                        </div>
                        <div id="excursion" style={{backgroundImage: `url(${market})`}}>
                            <div id="country">Vietnam</div>
                            <div id="excursionTitle">Market Tour and Cooking Class</div>
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
                            <button id = "moreInfo">More Information</button>
                        </div>
                        {/*Indonesia*/}
                        <div id="excursion" style={{backgroundImage: `url(${rajaampat})`}} >
                            <div id="country">Indonesia</div>
                            <div id="excursionTitle">Scuba Diving at Raja Ampat</div>
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
                            <button id = "moreInfo">More Information</button>
                        </div>
                        <div id="excursion" style={{backgroundImage: `url(${kelimutu})`}}>
                            <div id="country">Indonesia</div>
                            <div id="excursionTitle">Trekking Kelimutu Volcano</div>
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
                            <button id = "moreInfo">More Information</button>
                        </div>
                        <div id="excursion" style={{backgroundImage: `url(${komodo})`}}>
                            <div id="country">Indonesia</div>
                            <div id="excursionTitle"> Komodo Dragon Watching on Komodo Island</div>
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
                            <button id = "moreInfo">More Information</button>
                        </div>
                        <div id="excursion" style={{backgroundImage: `url(${kuta})`}}>
                            <div id="country">Indonesia</div>
                            <div id="excursionTitle">Surfing On Kuta Beach</div>
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
                            <button id = "moreInfo">More Information</button>
                        </div>
                    </div> 
                   
            </div>
        </div>
    )
};
export default Discover;