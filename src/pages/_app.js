//import global css into here
import React from 'react';
import '../sass/global.scss'
import Marquee from '../components/Marquee';
//import provider and redux store
import { Provider } from 'react-redux';
import store from '../redux/store';
 function MyApp({ Component, pageProps }) {
    return <Provider store={store}>
               <Component {...pageProps} />
               <Marquee/>
            </Provider>
  }
  
  export default MyApp; 
