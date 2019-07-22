import React, { Component } from 'react';

class Price extends Component {

  state = {
    prices:[100,150,250],
    positions:['Balcony','Medium','Star'],
    desc:[
      'Praesent commodo justo et leo fermentum, eu ultrices augue hendrerit. Donec porttitor justo sed arcu hendrerit',
      'Sed a sapien massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam a finibus risus, nec ullamcorper purus.',
      'Aliquam maximus venenatis odio, vitae gravida ligula lacinia et. Integer consectetur est sed metus rutrum sollicitudin. Praesent volutpat cursus nisi, et lacinia tellus condimentum vel. Fusce lectus ex, condimentum nec mollis eu, elementum vel tortor.'
    ],
    linkto:['https://sales/b','https://sales/m','https://sales/s']
  }

  showBoxes = () => (
    this.state.prices.map((box,i) =>(
      <div className='pricing_item'> 
        <div className='pricing_inner_wrapper'>

          <div className='pricing_title'>
            <span>${this.state.prices[i]}</span>
          </div>

          <div className='pricing_description'>
            Description
          </div>

          <div className='pricing_buttons'>
            button
          </div>

        </div>
      </div>
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