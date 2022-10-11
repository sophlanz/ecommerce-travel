import React from 'react';
import Layout from '../../components/TripLayout';
import image from '../../../public/images/temple.jpg';

const TempleTour = () => {
    return (
        <div>
            <Layout country = "Thailand" title = "Temple Tour"
introduction="Quisque eu ultricies ex, ac rutrum ligula. Mauris molestie vehicula nisi, nec rutrum lacus auctor et. "
overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lectus suscipit eros dignissim imperdiet at sed erat. Fusce in fringilla mauris. Proin tincidunt lacinia pulvinar. Sed massa enim, cursus vitae cursus a, varius ac velit.Nam lectus dui, pellentesque quis nibh ut, condimentum sodales ante.  et netus et malesuada fames ac turpis egestas. Etiam velit lorem, blandit a urna id, eleifend pulvinar urna. "
transportType ="Bus"
rating  ="1/5"
price="30"
position="top"
originDestination="Chiang Mai to Chaing Rai"
foodIncluded= "Food Not Included" background = {image} imageUrl='temple.jpg' />
        </div>
    )
}
export default TempleTour;