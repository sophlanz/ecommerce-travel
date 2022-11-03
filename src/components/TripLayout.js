import React from 'react';
import NavBar from './Navbar';
import transport from '../../public/images/transport.png';
import level from '../../public/images/level.png';
import food from '../../public/images/food.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToBag, increaseQuantity } from '../redux/bagSlice';
import { totalCount } from '../redux/countSlice';
import Image from 'next/image';

const TripLayout = ({country = "Country", title = "Title",
 introduction="Quisque eu ultricies ex, ac rutrum ligula. Mauris molestie vehicula nisi, nec rutrum lacus auctor et. Aliquam erat volutpat. Sed eleifend ante ac volutpat convallis. Maecenas eu leo nisi. ",
overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lectus suscipit eros dignissim imperdiet at sed erat. Fusce in fringilla mauris. Proin tincidunt lacinia pulvinar. Sed massa enim, cursus vitae cursus a, varius ac velit. ",
transportType ="transport type",
foodIncluded= "food included",
background = "../images/cover.jpg",
originDestination = "from here to there",
imageUrl="url",
rating="1/5",
price = "price",
position="bottom"
}) => {
    //change price to number for calculation
    let priceNum = Number(price)
    const [date,setDate] = useState('')
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count[0].count)
    let image = imageUrl
    //get items, and get count
    //if there aren't any items, set items to null
  let items=0;
  let item = 0;
  items = useSelector((state)=> state.bag)
  console.log(items);
    const handleDate = (e) => {
        let date =e.target.value;
       let newDate = new Date(date).toLocaleDateString("en-US");
       console.log(newDate);
        setDate(newDate);
    }
    const onSubmit = () => {
        const titleExist = items.findIndex(item => item.title === title)
        //if the items array is empty or there is no matching title
        if(items.length === 0 || titleExist === -1) {
            dispatch(
                addToBag({
                    title:title,
                    price:priceNum ,
                    date:date ,
                    image:image,
                })
            ) 
        } else {
            dispatch(
                increaseQuantity({title})
            )
        }         dispatch (
                    totalCount({
                        count:count +1
                    })
                )
        };
        console.log(background);
        console.log(imageUrl)
    return(
        <div>
            <NavBar />
            <div class="headerTrip">
                <Image src = {`/images/${imageUrl}`} alt="bus" layout='fill' objectPosition={position} objectFit="cover" />
                <div class="titles">
                    <p class="countryTrip">{country}</p>
                    <p className= "titleTrip">{title}</p>
                </div>    
            </div>
            <div className= "tripInfo">
                <div class="tripOverview">
                        <h1>Trip Overview</h1>
                        <p class="introduction">{introduction}</p>
                        <p class="overview">{overview}</p>
                        <div class="moreInfo">
                            <div class="transport">
                                <div>
                                <Image src = "/images/transport.png" alt="bus" height="50px" width="50px"/>
                                </div>
                                
                                <h2>Transport Types:</h2>
                                <p>{transportType}</p>
                            </div>
                            <div class="food">
                                <div>
                                <Image src = "/images/food.png" alt="bus" height="50px" width="50px"/>
                                </div>
                                <h2>Food:</h2>
                                <p>{foodIncluded}</p>
                            </div>
                            <div className= "difficulty">
                                <div>
                                <Image src = "/images/level.png" alt="bus" height="50px" width="50px"/>
                                </div>
                                <h2>Excursion Difficulty Rating:</h2>
                                <p>{rating}</p>
                            </div>
                        </div>
                </div>
                <div className= "bookTrip">
                    <div className= "dateSelect">
                        <p>Select Date</p>
                        <input  value ={date} type="date" class="datePicker" onChange = {(e) => handleDate(e)} required/>
                    </div>
                    <p class="originDestination">{originDestination}</p>
                    <div className= "price">
                        <p>From</p>
                        <div className= "pricePerson">
                            <h1>{price}</h1>
                            <p>/pp</p>
                        </div>
                    </div>
                    <button class="bookButton" onClick = {onSubmit}>Add To Bag</button>
                    <div className= "contactInfo">
                        <h1>Contact Us</h1>
                        <p>excursions@excursionescape.com</p>
                    </div>
                    <div className= "hoursInfo">
                        <h1>Opening Hours</h1>
                        <p>Mon-Fri: 9am - 5pm</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TripLayout;