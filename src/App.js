import './sass/App.scss'
import './fonts/OggBold.ttf';
import "./fonts/OggBoldItalic.ttf";
import "./fonts/OggLight.ttf";
import "./fonts/OggLightItalic.ttf";
import "./fonts/OggMedium.ttf";
import "./fonts/OggMediumItalic.ttf";
import "./fonts/OggRegular.ttf";
import "./fonts/OggRegularItalic.ttf";
import "./fonts/OggThin.ttf";
import "./fonts/OggThinItalic.ttf";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Discover from './components/Discover';
import Contact from './components/Contact';
import About from './components/About';
import ElephantAdenture from './components/excursions/ElephantAdenture';
import Marquee from './components/Marquee';
import ShoppingCart from './components/ShoppingCart';
import TempleTour from './components/excursions/TempleTour';
import KohPhiPhi from './components/excursions/KohPhiPhi';
import HomeStay from './components/excursions/HomeStay';
import HaLongBay from './components/excursions/HaLongBay';
import HanoiTour from './components/excursions/HanoiTour';
import HaGiangLoop from './components/excursions/HaGiangLoop';
import MarketTour from './components/excursions/MarketTour';
import RajaAmpat from './components/excursions/ScubaDiving';
import TrekkingKelimutu from './components/excursions/Trekking';
import KomodoDragon from './components/excursions/KomodoDragon';
import KutaSurfing from './components/excursions/Surfing';
import Footer from './components/Footer';
function App() {
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

export default App;
