import React from 'react';
import Layout from '../TripLayout';
import image from '../../../public/images/hanoi.jpg';
import uniqid from 'uniqid';
const HanoiTour = () => {
    return (
        <div>
            <Layout country = "Vietnam" title = "Hanoi Walking Tour"
 introduction="Quisque eu ultricies ex, ac rutrum ligula. Mauris molestie vehicula nisi, nec rutrum lacus auctor et. "
overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lectus suscipit eros dignissim imperdiet at sed erat. Fusce in fringilla mauris. Proin tincidunt lacinia pulvinar. Sed massa enim, cursus vitae cursus a, varius ac velit.Nam lectus dui, pellentesque quis nibh ut, condimentum sodales ante.  et netus et malesuada fames ac turpis egestas. Etiam velit lorem, blandit a urna id, eleifend pulvinar urna. "
transportType ="walking"
rating  ="1/5"
price="30"
originDestination="Hanoi to The Old City"
foodIncluded= "Food Not Included" background = {image} imageUrl='hanoi' />
        </div>
    )
}
export default HanoiTour