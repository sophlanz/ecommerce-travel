import React, {useState} from 'react';
import elephant from '../images/elephant.jpg';
import boat from '../images/boat.jpg';
import beach from '../images/beach.jpg';
import food from '../images/food.jpg';
import temple from '../images/temple.jpg'
import halong from '../images/halong.jpg';
import hanoi from '../images/hanoi.jpg';
import loop from '../images/loop.jpg';
import market from '../images/market.jpg';
import bromo from '../images/bromo.jpg';
import kelimutu from '../images/kelimutu.jpg';
import komodo from '../images/komodo.jpg';
import kuta from '../images/kuta.jpg';
import rajaampat from '../images/rajaampat.jpg';
import marq1 from "../images/marq1.jpg";
import marq2 from "../images/marq2.jpg";
import marq3 from "../images/marq3.jpg";
import marq4 from "../images/marq4.jpg";
import marq5 from "../images/marq5.jpg";
import marq6 from "../images/marq6.jpg";
import marq7 from '../images/marq7.jpg';
import marq8 from '../images/marq8.jpg';
import marq9 from '../images/marq9.jpg';
import marq10 from '../images/marq10.jpg';
import marq11 from '../images/marq11.jpg';
import marq12 from '../images/marq12.jpg';

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
                                    <p>$60</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Half-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo">More Information</button>
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
                    <div class="marquee">
                        <div class="marquee-content" >
                            <img src={boat} alt="Natural"  class="boat"/>
                            <img src={marq1} alt="Natural"  class="marq1"/>
                            <img src={marq4} alt="Natural"  class="marq4"/>
                            <img src={beach}  alt="Natural" class="marqBeach"/>
                            <img src={marq3} alt="Natural"  class="marq3"/>
                            <img src={marq8} alt="Natural"  class="marq8"/>
                            <img src={marq10} alt="Natural"  class="marq10"/>
                            <img src={marq12} alt="Natural"  class="marq12"/>
                            <img src={komodo}  alt="Natural" />
                            <img src={marq2} alt="Natural"  class="marq2"/>
                            <img src={marq5} alt="Natural"  class="marq5"/>
                            <img src={marq6} alt="Natural"  class="marq6"/>
                            <img src={marq7} alt="Natural"  class="marq7"/>
                            <img src={marq9} alt="Natural"  class="marq9"/>
                            <img src={marq11} alt="Natural"  class="marq11"/>
                        </div>
                        <div class= "marquee-content" aria-hidden="true" >
                        <img src={boat} alt="Natural"  class="boat"/>
                            <img src={marq1} alt="Natural"  class="marq1"/>
                            <img src={marq4} alt="Natural"  class="marq4"/>
                            <img src={beach}  alt="Natural" class="marqBeach"/>
                            <img src={marq3} alt="Natural"  class="marq3"/>
                            <img src={marq8} alt="Natural"  class="marq8"/>
                            <img src={marq10} alt="Natural"  class="marq10"/>
                            <img src={marq12} alt="Natural"  class="marq12"/>
                            <img src={komodo}  alt="Natural" />
                            <img src={marq2} alt="Natural"  class="marq2"/>
                            <img src={marq5} alt="Natural"  class="marq5"/>
                            <img src={marq6} alt="Natural"  class="marq6"/>
                            <img src={marq7} alt="Natural"  class="marq7"/>
                            <img src={marq9} alt="Natural"  class="marq9"/>
                            <img src={marq11} alt="Natural"  class="marq11"/>
                        </div>
                    </div>      
            </div>
        </div>
    )
};
export default Discover;