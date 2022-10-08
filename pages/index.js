import React from 'react';
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
import "../fonts/OggThinItalic.ttf";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Discover from '../src/components/Discover';
import Contact from '../src/components/Contact';
import About from '../src/components/About';
import ElephantAdenture from '../src/components/excursions/ElephantAdenture';
import Marquee from '../src/components/Marquee';
import ShoppingCart from '../src/components/ShoppingCart';
import TempleTour from '../src/components/excursions/TempleTour';
import KohPhiPhi from '../src/components/excursions/KohPhiPhi';
import HomeStay from '../src/components/excursions/HomeStay';
import HaLongBay from '../src/components/excursions/HaLongBay';
import HanoiTour from '../src/components/excursions/HanoiTour';
import HaGiangLoop from '../src/components/excursions/HaGiangLoop';
import MarketTour from '../src/components/excursions/MarketTour';
import RajaAmpat from '../src/components/excursions/ScubaDiving';
import TrekkingKelimutu from '../src/components/excursions/Trekking';
import KomodoDragon from '../src/components/excursions/KomodoDragon';
import KutaSurfing from '../src/components/excursions/Surfing';
import Footer from '../src/components/Footer';
import '../src/sass/sections/Discover.module.scss'
export default function Home () {
    return (
        <div>
                    <Routes>
                        <Route path = "/" element={<Discover/>}/>
                        <Route path="/About" element={<About/>}/>
                        <Route path="/Contact" element={<Contact/>}/>
                        <Route path ='/trips/elephant-forest-adventure' element = {<ElephantAdenture/>} />
                        <Route path='/trips/temple-tour' element={<TempleTour/>}/>
                        <Route path="/trips/koh-phi-phi-escape" element={<KohPhiPhi/>}/>
                        <Route path="/trips/home-stay" element={<HomeStay/>}/>
                        <Route path="trips/ha-long-bay-tour" element={<HaLongBay/>}/>
                        <Route path="trips/hanoi-walking-tour" element={<HanoiTour/>}/>
                        <Route path="trips/ha-giang-loop-on-motorbike" element={<HaGiangLoop/>}/>
                        <Route path="trips/market-tour-and-cooking-class" element ={<MarketTour/>}/>
                        <Route path="trips/scuba-diving-at-raja-ampat" element = {<RajaAmpat/>}/>
                        <Route path="trips/trekking-kelimutu-volcano" element = {<TrekkingKelimutu/>}/>
                        <Route path="trips/komodo-dragon-watching-on-komodo-island" element={<KomodoDragon/>}/>
                        <Route path="trips/surfing-on-kuta-beach" element={<KutaSurfing/>}/>
                        <Route path ='/shopping-cart' element = {<ShoppingCart/>}/>
                    </Routes>
                <Marquee/>
              <Footer/>
        </div>
      );
}