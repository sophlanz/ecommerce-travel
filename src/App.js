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
import Discover from './components/Discover';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
        <Navbar/>
        <Discover/>
    </div>
  );
}

export default App;
