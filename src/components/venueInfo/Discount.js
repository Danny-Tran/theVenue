import React, { Component } from 'react';
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import MyButton from '../util/MyButton'

class Discount extends Component {

  state = {
    discountStart:0,
    discountEnd:30
  }

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd){
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate(){
    setTimeout(()=>{
      this.percentage()
    },30)
  }

  render() {
    return (
      <div className='center_wrapper'>
        <div className='discount_wrapper'>

          <Fade
            onReveal={()=> this.percentage()}
          >
          <div className='discount_porcentage'>
            <span>{this.state.discountStart}%</span>
            <span>OFF</span>
          </div>
          </Fade>

          <Slide right>

          <div className='discount_discription'>

            <h3>Until Jan 1, 2020</h3>
            <p>Praesent commodo justo et leo fermentum, eu ultrices augue hendrerit. Donec porttitor justo sed arcu hendrerit, id aliquet lectus sollicitudin. Sed a sapien massa. </p>
          
            <MyButton />

          </div>
          </Slide>

        </div>
      </div>
    );
  }
}

export default Discount;
