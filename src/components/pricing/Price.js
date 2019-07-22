import React, { Component } from 'react';
import MyButton from '../util/MyButton'
import Zoom from 'react-reveal/Zoom'

class Price extends Component {

  state = {
    prices:[100,150,250],
    positions:['Balcony','Medium','Star'],
    desc:[
      'Praesent commodo justo et leo fermentum, eu ultrices augue hendrerit. Donec porttitor justo sed arcu hendrerit',
      'Sed a sapien massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam a finibus risus, nec ullamcorper purus.',
      'Aliquam maximus venenatis odio, vitae gravida ligula lacinia et. Integer consectetur est sed metus rutrum sollicitudin. Praesent volutpat cursus nisi.'
    ],
    linkto:['https://sales/b','https://sales/m','https://sales/s'],
    delay:[500,0,500]
  }

  showBoxes = () => (
    this.state.prices.map((box,i) =>(
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className='pricing_item'> 
          <div className='pricing_inner_wrapper'>
            <div className='pricing_title'>
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>

            <div className='pricing_description'>
              <span>{this.state.desc[i]}</span>
            </div>

            <div className='pricing_buttons'>
              <MyButton 
                text='Purchase'
                bck='#ffa800'
                color='#ffffff'
                link={this.state.linkto[i]}
                />
            </div>
          </div>
        </div>
      </Zoom>
    ))    
  )

  render() {
    return (
      <div className='bck_black'>
        <div className='center_wrapper pricing_section'>
          <h2>Pricing</h2>

          <div className='pricing_wrapper'>
            {this.showBoxes()}
          </div>

        </div>
        
      </div>
    );
  }
}

export default Price;