import React from 'react';
import Layout from '../../components/TripLayout';
import image from '../../../public/images/kuta.jpg';
const KutaBeach = () => {
    return (
        <div>
            <Layout country = "Indonesia" title = "Surfing On Kuta Beach"
 introduction="Quisque eu ultricies ex, ac rutrum ligula. Mauris molestie vehicula nisi, nec rutrum lacus auctor et. "
overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lectus suscipit eros dignissim imperdiet at sed erat. Fusce in fringilla mauris. Proin tincidunt lacinia pulvinar. Sed massa enim, cursus vitae cursus a, varius ac velit.Nam lectus dui, pellentesque quis nibh ut, condimentum sodales ante.  et netus et malesuada fames ac turpis egestas. Etiam velit lorem, blandit a urna id, eleifend pulvinar urna. "
transportType ="Bus"
rating  ="4/5"
price="75"
originDestination="Denpasar to Kuta Beach"
foodIncluded= "Food Included" background = {image} imageUrl='kuta.jpg' />
        </div>
    )
}
export default KutaBeach