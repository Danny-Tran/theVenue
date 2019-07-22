import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/feature/Featured'
import VenueInfo from './components/venueInfo'
import HighLight from './components/venueInfo/HighLight'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <Featured />
        <VenueInfo />
        <HighLight />
      </div>
    );
  }
}

export default App;
