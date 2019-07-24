import React, { Component } from 'react';
import './resources/styles.css'
import {Element} from 'react-scroll'

import Header from './components/header_footer/Header'
import Featured from './components/feature/Featured'
import VenueInfo from './components/venueInfo'
import HighLight from './components/venueInfo/HighLight'
import Price from './components/pricing/Price'
import Location from './components/location/Location'
import Footer from './components/header_footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Element name='header'>
          <Header />
        </Element>

        <Element name='feature'>
          <Featured />
        </Element>

        <Element name='venueInfo'>
          <VenueInfo />
        </Element>

        <Element name='highLight'>
          <HighLight />
        </Element>

        <Element name='price'>
          <Price />
        </Element>

        <Element name='location'>
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
