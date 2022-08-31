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
import ElephantAdenture from './components/excursions/ElephantAdenture';
import Marquee from './components/Marquee';
import ShoppingCart from './components/ShoppingCart';
import TempleTour from './components/excursions/TempleTour';
function App() {
  return (
    <div>
        
            
                <Routes>
                    <Route path = "/" element={<Discover/>}/>
                    <Route path ='/trips/elephant-forest-adventure' element = {<ElephantAdenture/>} />
                    <Route path='/trips/temple-tour' element={<TempleTour/>}/>
                    <Route path ='/shopping-cart' element = {<ShoppingCart/>}/>
                </Routes>
            <Marquee/>
        
    
        
    </div>
  );
}

export default App;
