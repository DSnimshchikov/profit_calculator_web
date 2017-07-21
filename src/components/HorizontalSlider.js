import React, { Component } from 'react'
import Slider from 'react-rangeslider'

class HorizontalSlider extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      value: 10,
      maxValue: 100
    }
  }

  handleChangeStart() {
    console.log('Change event started')
  };

  handleChange(value) {
    this.setState({
      value: value
    })
  };

  handleChangeComplete() {
    console.log('Change event completed')
  };

  render () {
    const { value } = this.state;
    return (
      <div className='slider b-discount--change-mode--item---current '>
        <Slider
          min={0}
          max={maxValue}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}

export default HorizontalSlider
