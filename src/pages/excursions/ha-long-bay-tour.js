import React from 'react';
import Layout from '../../components/TripLayout';
import image from '../../../public/images/halong.jpg';

const HaLongTour = () => {
    return (
        <div>
            <Layout country = "Vietnam" title = "Ha Long Bay Tour"
 introduction="Quisque eu ultricies ex, ac rutrum ligula. Mauris molestie vehicula nisi, nec rutrum lacus auctor et. "
overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lectus suscipit eros dignissim imperdiet at sed erat. Fusce in fringilla mauris. Proin tincidunt lacinia pulvinar. Sed massa enim, cursus vitae cursus a, varius ac velit.Nam lectus dui, pellentesque quis nibh ut, condimentum sodales ante.  et netus et malesuada fames ac turpis egestas. Etiam velit lorem, blandit a urna id, eleifend pulvinar urna. "
transportType ="Bus and Boat"
rating  ="1/5"
price="50"
originDestination="Ho Chi Minh to Ha Long Bay"
foodIncluded= "Food Included" background = {image} imageUrl='halong.jpg' />
        </div>
    )
}
export default HaLongTour