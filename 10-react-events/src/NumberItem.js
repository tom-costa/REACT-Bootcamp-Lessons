import React, { Component } from 'react';


class NumberItem extends Component {
  constructor(props){
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
  }


  handleRemove(evt){
    console.log("Removing command from Inside the handleRemove function")
      this.props.remove(this.props.value)
  }

  render() {
    return (
      <li>
      {this.props.value}
          <button className="NumberItem" onClick={this.handleRemove}> Close </button>
      </li>
    );
  }
}

export default NumberItem;