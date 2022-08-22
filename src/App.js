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
import Navbar from './components/Navbar';
import ElephantAdenture from './components/ElephantAdenture';
import Marquee from './components/Marquee';
function App() {
  return (
    <div>
        
            <Navbar/>
                <Routes>
                    <Route path = "/" element={<Discover/>}/>
                    <Route path ='/trips/elephant-forest-adventure' element = {<ElephantAdenture/>} />
                </Routes>
            <Marquee/>
        
    
        
    </div>
  );
}

export default App;
