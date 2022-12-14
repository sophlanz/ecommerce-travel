import React from 'react';
import Layout from '../../components/TripLayout';

const KomodoDragon = () => {
    return (
        <div>
            <Layout country = "Indonesia" title = "Komodo Dragon Watching On Komodo Island"
 introduction="Quisque eu ultricies ex, ac rutrum ligula. Mauris molestie vehicula nisi, nec rutrum lacus auctor et. "
overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id lectus suscipit eros dignissim imperdiet at sed erat. Fusce in fringilla mauris. Proin tincidunt lacinia pulvinar. Sed massa enim, cursus vitae cursus a, varius ac velit.Nam lectus dui, pellentesque quis nibh ut, condimentum sodales ante.  et netus et malesuada fames ac turpis egestas. Etiam velit lorem, blandit a urna id, eleifend pulvinar urna. "
transportType ="Bus and Car"
rating  ="2/5"
price="50"
originDestination="Labuan Bajo to Komodo Island"
foodIncluded= "Food Not Included" imageUrl='komodo.jpg' />
        </div>
    )
}
export default KomodoDragon