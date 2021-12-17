import React, { Component } from 'react';
import NumberItem from './NumberItem'

class NumberList extends Component {
    constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5, 6] };
    this.remove = this.remove.bind(this)
  }

  remove(num) {
      console.log("Value of num: ", num)
      this.setState(prevState => ({
          nums: prevState.nums.filter(n => n !== num)
      }))
  }

  render() {
      let nums = this.state.nums.map( n => (
          <NumberItem key={n}value={n} remove={this.remove}/>

      ))
    return (
      <div>
        <h1>First Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

export default NumberList;