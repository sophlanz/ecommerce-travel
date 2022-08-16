import React, {useState} from 'react';
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
                            <label for="destinationInput">Select your destination...
                            <input  list = "destinations" name = "destinationInput" id="destinationInput"/>
                            </label>
                            <datalist id="destinations">
                                <option value ="Spain"/>
                                <option value ="Thailand"/>
                                <option value ="Vietnam"/>
                            </datalist>
                        </div>
                        <div class = "duration">
                            <h1>Duration</h1>
                            <p>Select how much of your day you want the excursion to occupy...</p>
                            <input type = "range" list="tickmarks"  step="1" min="1" max="3"/>
                            <datalist id= "tickmarks">
                                <option value="1" label="half day"/>
                                <option value="2" label = "full day"/>
                                <option value="3" label = "over night"/>
                            </datalist>
                            
                        </div>
                        <div class = "budget">
                            <h1>Budget</h1>
                            <p>How much are you looking to spend?</p>
                            <input type = "range" list = "tickmarks" step="1"min="1" max="3"/>
                            <datalist id = "tickmarks">
                                <option value = "1">$0-$100</option>
                                <option value = "2">$101-$250</option>
                                <option value = "3">$251-$500</option>
                            </datalist>
                        </div>
                    </div>
                    <div id="exploreTips"></div>       
            </div>
        </div>
    )
};
export default Discover;