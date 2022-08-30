import React from 'react';
import NavBar from './Navbar';
import transport from '../images/transport.png';
import level from '../images/level.png';
import food from '../images/food.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToBag } from '../redux/bagSlice';
import { totalCount } from '../redux/countSlice';

const TripLayout = ({country = "Country", title = "Title",
 introduction="Quisque eu ultricies ex, ac rutrum ligula. Mauris molestie vehicula nisi, nec rutrum lacus auctor et. Aliquam erat volutpat. Sed eleifend ante ac volutpat convallis. Maecenas eu leo nisi. ",
overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lectus suscipit eros dignissim imperdiet at sed erat. Fusce in fringilla mauris. Proin tincidunt lacinia pulvinar. Sed massa enim, cursus vitae cursus a, varius ac velit. ",
transportType ="transport type",
foodIncluded= "food included",
background = "../images/cover.jpg",
originDestination = "from here to there",
imageUrl="url",
rating="1/5",
price = "price"
}) => {
    //change price to number for calculation
    let priceNum = Number(price)
    const [date,setDate] = useState('')
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count[0].count)
    let image = imageUrl
    console.log(imageUrl)
    const onSubmit = () => {
                dispatch(
                    addToBag({
                        title:title,
                        price:priceNum ,
                        date:date ,
                        image:image
                    })
                )
                dispatch (
                    totalCount({
                        count:count +1
                    })
                )
            
        };
    return(
        <div>
            <NavBar />
            <div class="headerTrip" style ={{backgroundImage : `url(${background})`}}>
                <div class="titles">
                    <p class="countryTrip">{country}</p>
                    <p class = "titleTrip">{title}</p>
                </div>   
            </div>
            <div class = "tripInfo">
                <div class="tripOverview">
                        <h1>Trip Overview</h1>
                        <p class="introduction">{introduction}</p>
                        <p class="overview">{overview}</p>
                        <div class="moreInfo">
                            <div class="transport">
                                <img src = {transport} alt="bus"/>
                                <h2>Transport Types:</h2>
                                <p>{transportType}</p>
                            </div>
                            <div class="food">
                                <img src={food} alt="food"/>
                                <h2>Food:</h2>
                                <p>{foodIncluded}</p>
                            </div>
                            <div class = "difficulty">
                                <img src = {level} alt="rating"/>
                                <h2>Excursion Difficulty Rating:</h2>
                                <p>{rating}</p>
                            </div>
                        </div>
                </div>
                <div class = "bookTrip">
                    <div class = "dateSelect">
                        <p>Select Date</p>
                        <input  value ={date} type="date" class="datePicker" onChange = {(e)=> setDate(e.target.value)} required/>
                    </div>
                    <p class="originDestination">{originDestination}</p>
                    <div class = "price">
                        <p>From</p>
                        <div class = "pricePerson">
                            <h1>{price}</h1>
                            <p>/pp</p>
                        </div>
                    </div>
                    <button class="bookButton" onClick = {onSubmit}>Add To Bag</button>
                    <div class = "contactInfo">
                        <h1>Contact Us</h1>
                        <p>excursions@excursionescape.com</p>
                    </div>
                    <div class = "hoursInfo">
                        <h1>Opening Hours</h1>
                        <p>Mon-Fri: 9am - 5pm</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TripLayout;