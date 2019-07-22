import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/feature/Featured'
import VenueInfo from './components/venueInfo'
import HighLight from './components/venueInfo/HighLight'
import Price from './components/pricing/Price'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <Featured />
        <VenueInfo />
        <HighLight />
        <Price />
      </div>
    );
  }
}

export default App;
