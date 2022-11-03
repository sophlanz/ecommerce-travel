/* import React from 'react';
//import './sass/global.scss'
import '../fonts/OggBold.ttf';
import "../fonts/OggBoldItalic.ttf";
import "../fonts/OggLight.ttf";
import "../fonts/OggLightItalic.ttf";
import "../fonts/OggMedium.ttf";
import "../fonts/OggMediumItalic.ttf";
import "../fonts/OggRegular.ttf";
import "../fonts/OggRegularItalic.ttf";
import "../fonts/OggThin.ttf";
import "../fonts/OggThinItalic.ttf"; */

//import discover component
import React, {useState} from 'react';

import Navbar from '../components/Navbar';
//import {Link} from 'react-router-dom';
import Image from 'next/image';
import Link from 'next/Link';
import '../sass/sections/discover.module.scss'
export default function DiscoverComponent() {
    const[indonesia,setIndonesia]= useState(true)
    const[thailand, setThailand] = useState(true)
    console.log(thailand);
    const [vietnam, setVietnam] = useState(true);
    const[fullDay,setFullDay] = useState(true);
    const[halfDay,setHalfDay] = useState(true);
    const[overNight,setOverNight] = useState(true);
    const [budget50, setBudget50] = useState(true);
    const [budget100, setBudget100] = useState(true);
    const [budget150, setBudget150] = useState(true);
    //value of datalist county selection, default is any
    const [value,setValue] = useState("Any")
    const handleFilterDuration = (e) => {
        const value = e.target.value;
        switch(value){
        //0, half-day
        case "0" :
            return setHalfDay(true), setFullDay(false), setOverNight(false);
         //1, full-day
          case "1":
            return setFullDay(true), setHalfDay(false), setOverNight(false);
        //2, over-night
        case "2":
            return setOverNight(true), setHalfDay(false), setFullDay(false);
        //3 any
        case "3":
            return  setFullDay(true), setHalfDay(true), setOverNight(true);
        }
    }
    const handleFilterBudget = (e) => {
        //get selected budget
        const value = e.target.value
        switch(value) {
            //set budget 50 to true, and the others to false
            case "0":
                return setBudget50(true), setBudget100(false), setBudget150(false);
                //set 50 and 100 to true, 150 false
            case "1":
                return setBudget100(true), setBudget50(true), setBudget150(false);
                //set all to true
            case "2":
                return setBudget100(true), setBudget50(true), setBudget150(true);
        }
        
        //set budget 100
        //set budget 150+
    }
    const handleSortCountry = (e)=> {
        //get value from event
        const value = e.target.value
        //turn display off for all non countries
        console.log(value);
        //set new value
        setValue(value);
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
            case "Any":
                setThailand(true)
                setIndonesia(true)
                setVietnam(true)
                break;
        }
        //when state is set to true we'll display the div. Default display will be none
    }
   const clear = (e) => {
       //clear for on focus of input
       setValue('');
   };
    return (
        <div>
        <Navbar/>
        
            <div id = "header">
                    <Image className="coverPhoto" src='/images/cover.jpg' blurDataURL='/images/cover.jpg' alt = "beach" layout="fill" objectFit="cover" placeholder="blur"/>
                    <div className="title">
                            <p>Moments.</p>
                            <p>Enjoyed.</p>
                            <p className="welcome">Welcome to Excursion Escape!</p>
                    </div>
                    <button className="imageButton"></button>
            </div>
            
            <blockquote className= "quote">Discover cutlure in an intimate setting. Discover
                            the hidden gems cherished by locals. Discover Excursion 
                            Escape.
            </blockquote>
            <div id = "trips">
                    <div id="instruction">
                        <h1>Find your dream excursion</h1>
                        <p>Explore all of our excursions, or apply a filter to narrow your search...</p>
                    </div> 
                    <div className="filterTrips">
                        <div className= "destination">
                            <h1>Destination</h1>
                            <p>Select your dream destination...</p>
                            <label htmlFor="destinationInput">
                            <input 
                            value= {value}
                            onFocus={(e)=> clear(e)}
                         onChange={(e)=>handleSortCountry(e)}  list = "destinations" placeholder="Select your destination..." name = "destinationInput" id="destinationInput"/>
                            </label>
                            <datalist id="destinations" >
                                <option value ="Indonesia"/>
                                <option value ="Thailand"/>
                                <option value ="Vietnam"/>
                                <option value ="Any"/>
                            </datalist>
                        </div>
                        <div className= "duration">
                            <h1>Duration</h1>
                            <p>Select length of the excursion...</p>
                            <input onChange={(e)=> handleFilterDuration(e)}  defaultValue = "3" type = "range" list="tickmarks"  step="1" min="0" max="3"/>
                            <datalist id= "tickmarks">
                                <option value="0" label="Half-Day"/>
                                <option value="1" label = "Full-Day"/>
                                <option value="2" label = "Over-Night"/>
                                <option value ="3" label="Any"/>
                            </datalist>
                        </div>
                        <div className= "budget">
                            <h1>Budget</h1>
                            <p>How much are you looking to spend?</p>
                            <input onChange={(e)=> handleFilterBudget(e)} defaultValue = "2" type = "range" list = "tickmarks" step="1"min="0" max="2"/>
                            <datalist id = "tickmarks">
                                <option value = "0">$50</option>
                                <option value = "1">$100</option>
                                <option value = "2">$150+</option>
                            </datalist>
                        </div>
                    </div>
                   
                    <div id="exploreTrips">
                    {/*Thailand*/}
                        
                        <div  id="excursion"  style={{ display: thailand && fullDay && budget100 ? "flex" : null }}>
                            <Image className="cardImage" src='/images/elephant2.jpg' alt = "elephant" layout= "fill" blurDataURL='/images/elephant2.jpg' placeholder="blur"/>
                            <div id="country">Thailand</div>
                            <div id="excursionTitle">Elephant Forest Adventure</div>
                            <div className= "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$100</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Full-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link href="/excursions/elephant-forest-adventure">More Information</Link></button>
                        </div>
                        <div id="excursion" style={{ display: thailand && halfDay && budget50 ? "flex" : null  }}>
                            
                            <div id="country">Thailand</div>
                            <div id="excursionTitle">Temple Tour</div>
                            <div className= "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$30</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Half-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link href="/excursions/temple-tour">More Information</Link></button>
                            <Image className="cardImage" src='/images/temple2.jpg' alt = "temple" layout="fill" blurDataURL='/images/temple2.jpg' placeholder="blur"/>
                        </div>
                        <div id="excursion" style={{display: thailand && halfDay && budget100 ? "flex" : null }}>
                            <Image className="cardImage" src='/images/beach2.jpg' alt = "beach" layout="fill" blurDataURL='/images/beach2.jpg' placeholder="blur"/>
                            <div id="country">Thailand</div>
                            <div id="excursionTitle">Koh Phi Phi Espcape</div>
                            <div className= "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$60</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Half-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link href="/excursions/koh-phi-phi-escape">More Information</Link></button>
                        </div>
                        <div id="excursion" style={{display: thailand && overNight && budget100 ? "flex" : null }}>
                            <Image className="cardImage" src='/images/food2.jpg' alt = "food" layout="fill" blurDataURL='/images/food2.jpg' placeholder="blur"/>
                            <div id="country">Thailand</div>
                            <div id="excursionTitle">Home Stay</div>
                            <div className= "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$90</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Over-Night</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link href="/excursions/home-stay">More Information</Link></button>
                        </div>
                        {/*Vietnam*/}
                        <div id="excursion" style={{ display: vietnam && halfDay && budget50 ? "flex" : null }} >
                            <Image className="cardImage" src='/images/halong2.jpg' alt = "Halong Bay" layout="fill" blurDataURL='/images/halong2.jpg' placeholder="blur"/>
                            <div id="country">Vietnam</div>
                            <div id="excursionTitle"> Ha Long Bay Tour </div>
                            <div className= "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$50</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Half-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link href="/excursions/ha-long-bay-tour">More Information</Link></button>
                        </div>
                        <div id="excursion" style={{display: vietnam && halfDay && budget50 ? "flex" : null }}>
                            <Image className="cardImage" src='/images/hanoi2.jpg' alt = "hanoi" layout="fill" blurDataURL='/images/hanoi2.jpg' placeholder="blur"/>
                            <div id="country">Vietnam</div>
                            <div id="excursionTitle">Hanoi walking tour</div>
                            <div className= "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$30</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Half-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link href="/excursions/hanoi-walking-tour">More Information</Link></button>
                        </div>
                        <div id="excursion" style={{display: vietnam && overNight && budget150 ? "flex" : null  }}>
                            <Image  className="cardImage" src='/images/loop2.jpg' alt = "Ha Giang Loop" layout="fill" blurDataURL='/images/loop2.jpg' placeholder="blur"/>
                            <div id="country">Vietnam</div>

                            <div id="excursionTitle">Ha Giang Loop On Motorbike</div>
                            <div className= "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$150</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Over-Night</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link href="/excursions/ha-giang-loop-on-motorbike">More Information</Link></button>
                        </div>
                        <div id="excursion" style={{ display: vietnam && halfDay && budget50 ? "flex" : null }}>
                            <Image className="cardImage" src='/images/market2.jpg' alt = "Vietnam Market" layout="fill" blurDataURL='/images/market2.jpg' placeholder="blur"/>
                            <div id="country">Vietnam</div>
                            <div id="excursionTitle">Market Tour and Cooking Class</div>
                            <div className= "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$40</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Half-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link href="/excursions/market-tour-and-cooking-class">More Information</Link></button>
                        </div>
                        {/*Indonesia*/}
                        <div id="excursion" style={{ display: indonesia && fullDay && budget150  ? "flex" : null }} >
                        <Image className="cardImage" src='/images/rajaampat2.jpg' alt = "rajaampat indonesia" layout="fill" blurDataURL='/images/rajaampat2.jpg' placeholder="blur"/>
                            <div id="country">Indonesia</div>
                            <div id="excursionTitle">Scuba Diving at Raja Ampat</div>
                            <div className= "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$110</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Full-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link href="/excursions/scuba-diving-at-raja-ampat">More Information</Link></button>
                        </div>
                        <div id="excursion" style={{display: indonesia && fullDay && budget100 ? "flex" : null  }}>
                            <Image className="cardImage" src='/images/kelimutu2.jpg' alt = "kelimutu indonesia" layout="fill" blurDataURL='/images/kelimutu2.jpg' placeholder="blur"/>
                            <div id="country">Indonesia</div>
                            <div id="excursionTitle">Trekking Kelimutu Volcano</div>
                            <div className= "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$80</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Full-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link href="/excusrions/trekking-kelimutu-volcano">More Information</Link></button>
                        </div>
                        <div id="excursion" style={{display: indonesia && halfDay && budget50 ? "flex" : null }}>
                            <Image className="cardImage" src='/images/komodo2.jpg' alt = "komodo island" layout="fill" blurDataURL='/images/komodo2.jpg' placeholder="blur"/>
                            <div id="country">Indonesia</div>
                            <div id="excursionTitle"> Komodo Dragon Watching on Komodo Island</div>
                            <div className= "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$50</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Half-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link href="/excursions/komodo-dragon-watching-on-komodo-island">More Information</Link></button>
                        </div>
                        <div id="excursion" style={{ display: indonesia && halfDay && budget100 ? "flex" : null  }}>
                            <Image className="cardImage" src='/images/kuta2.jpg' alt = "kuta indonesia" layout="fill" blurDataURL='/images/kuta2.jpg' placeholder="blur"/>
                            <div id="country">Indonesia</div>
                            <div id="excursionTitle">Surfing On Kuta Beach</div>
                            <div className= "priceDuration">
                                <div id="excursionPrice">
                                    <h1>from</h1>
                                    <p>$75</p>
                                </div>
                                <div id="excursionDuration">
                                    <h1>duration</h1>
                                    <p>Half-Day</p>
                                </div>
                            </div>
                            <button id = "moreInfo"><Link href="/excursions/surfing-on-kuta-beach">More Information</Link></button>
                        </div>
                    </div> 
                   
            </div>
        </div>
    )
}