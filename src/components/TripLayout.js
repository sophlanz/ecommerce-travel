import React from 'react';
import NavBar from './Navbar';
import Marquee from './Marquee';
import transport from '../images/transport.png';
import level from '../images/level.png';
import food from '../images/food.png';
const TripLayout = ({country = "Country", title = "Title",
 introduction="Quisque eu ultricies ex, ac rutrum ligula. Mauris molestie vehicula nisi, nec rutrum lacus auctor et. Aliquam erat volutpat. Sed eleifend ante ac volutpat convallis. Maecenas eu leo nisi. ",
overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lectus suscipit eros dignissim imperdiet at sed erat. Fusce in fringilla mauris. Proin tincidunt lacinia pulvinar. Sed massa enim, cursus vitae cursus a, varius ac velit. ",
transportType ="transport type",
foodIncluded= "food included",
background = "../images/cover.jpg",
}) => {
    return(
        <div>
            <NavBar/>
            <div class="headerTrip" style ={{backgroundImage : `url(${background})`}}>
                <div class="titles">
                    <p class="countryTrip">{country}</p>
                    <p class = "titleTrip">{title}</p>
                </div>   
            </div>
            <div class="tripOverview">
                <h1>Trip Overview</h1>
                <p class="introduction">{introduction}</p>
                <p class="overview">{overview}</p>
                <div class="moreInfo">
                    <div class="transport">
                        <img src = {transport} alt="bus"/>
                        <p>{transportType}</p>
                    </div>
                    <div class="food">
                        <img src={food} alt="food"/>
                        <p>{foodIncluded}</p>
                    </div>
                    <div class = "difficulty">
                        <img src = {level} alt="rating"/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TripLayout;