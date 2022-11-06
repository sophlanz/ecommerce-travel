import React from 'react';
import Layout from '../../components/TripLayout';


const HomeStay = () => {
    return (
        <div>
            <Layout country = "Thailand" title = "Home Stay"
 introduction="Quisque eu ultricies ex, ac rutrum ligula. Mauris molestie vehicula nisi, nec rutrum lacus auctor et. "
overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lectus suscipit eros dignissim imperdiet at sed erat. Fusce in fringilla mauris. Proin tincidunt lacinia pulvinar. Sed massa enim, cursus vitae cursus a, varius ac velit.Nam lectus dui, pellentesque quis nibh ut, condimentum sodales ante.  et netus et malesuada fames ac turpis egestas. Etiam velit lorem, blandit a urna id, eleifend pulvinar urna. "
transportType ="Bus"
rating  ="2/5"
price="90"
originDestination="Chiang Mai to Sok Yai"
foodIncluded= "Food Included" imageUrl='food.jpg' />
        </div>
    )
}
export default HomeStay