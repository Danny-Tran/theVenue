import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/feature/Featured'
import VenueInfo from './components/venueInfo'
class App extends Component {
  render() {
    return (
      <div className="App" style={{height:'1500px', background:'lightblue'}}>
        <Header />
        <Featured />
        <VenueInfo />
      </div>
    );
  }
}

export default App;
