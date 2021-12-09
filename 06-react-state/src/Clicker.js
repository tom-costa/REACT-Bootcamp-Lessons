import React, { Component } from 'react';

class Clicker extends Component {
	constructor(props) {
		super(props);
		this.state = { num: 1}
		this.genRandom = this.genRandom.bind(this)
	}

	genRandom(){
		// the random snippet only goes to 9, so the +1 at the end is to make the generator go up to 10.
		let rand = Math.floor(Math.random() * 10) + 1;
		this.setState( {num: rand} )
	}

	render(){
		return (
			<div>
				 <h1>Number is: {this.state.num}</h1>
				{this.state.num === 7 
				? <h1>You WIN!</h1>
				: <button onClick={this.genRandom}>Click Me</button>
				}
			</div>
		)
	}
}
export default Clicker;
