import React from 'react';
import {scroller} from 'react-scroll'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'


const SideDraw = (props) => {

  const scrollToElements = (element) => {
    scroller.scrollTo(element,{
      duration: 1500,
      delay: 100,
      smooth: true,
    })
  }

  return (
    
      <Drawer
      anchor='right'
      open={props.open}
      onClose={() => props.onClose(false)}
      >
        <List>
          <ListItem button onClick={() => scrollToElements('header')}>
            Event start in
          </ListItem>

          <ListItem button onClick={() => scrollToElements('venueInfo')}>
            Venue Info
          </ListItem>

          <ListItem button onClick={() => scrollToElements('highLight')}>
            Highlights
          </ListItem>

          <ListItem button onClick={() => scrollToElements('pricing')}>
            Pricing
          </ListItem>

          <ListItem button onClick={() => scrollToElements('location')}>
            Location
          </ListItem>

          
        </List>
      </Drawer>
      
    
  );
};

export default SideDraw;