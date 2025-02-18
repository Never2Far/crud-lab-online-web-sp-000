import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label>Restaurant Name</label>
        <input 
          type='text'
          name='name'
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.text}
        />
        <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
