import React from 'react';
import Layout from './TripLayout';
import image from '../images/elephant.jpg'

const ElephantAdventure = () => {
    return (
        <div>
            <Layout country = "Thailand" title = "Elephant Forest Adventure"
 introduction="Quisque eu ultricies ex, ac rutrum ligula. Mauris molestie vehicula nisi, nec rutrum lacus auctor et. Aliquam erat volutpat. Sed eleifend ante ac volutpat convallis. Maecenas eu leo nisi. "
overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lectus suscipit eros dignissim imperdiet at sed erat. Fusce in fringilla mauris. Proin tincidunt lacinia pulvinar. Sed massa enim, cursus vitae cursus a, varius ac velit. "
transportType ="Bus"
foodIncluded= "Food Included" background = {image}/>
        </div>
    )
}
export default ElephantAdventure