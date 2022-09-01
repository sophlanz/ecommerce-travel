import React from 'react';
import Layout from '../TripLayout';
import image from '../../images/elephant.jpg';
import uniqid from 'uniqid';
const ElephantAdventure = () => {
    return (
        <div>
            <Layout country = "Thailand" title = "Elephant Forest Adventure"
 introduction="Quisque eu ultricies ex, ac rutrum ligula. Mauris molestie vehicula nisi, nec rutrum lacus auctor et. "
overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lectus suscipit eros dignissim imperdiet at sed erat. Fusce in fringilla mauris. Proin tincidunt lacinia pulvinar. Sed massa enim, cursus vitae cursus a, varius ac velit.Nam lectus dui, pellentesque quis nibh ut, condimentum sodales ante.  et netus et malesuada fames ac turpis egestas. Etiam velit lorem, blandit a urna id, eleifend pulvinar urna. "
transportType ="Bus"
rating  ="1/5"
price="100"
id={uniqid()}
originDestination="Chiang Mai to Mae Ping"
foodIncluded= "Food Included" background = {image} imageUrl='elephant' />
        </div>
    )
}
export default ElephantAdventure