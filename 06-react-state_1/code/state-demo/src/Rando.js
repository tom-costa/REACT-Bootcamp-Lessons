import React, { Component } from 'react';

class Rando extends Component {
	constructor(props) {
		super(props);
		this.state = {num:0}
		this.makeTimer90
	}
	maketimer() {
		setInterval( () => {
			let rand = Math.floor(Math.random * this.props.MaxNum)
			this.setState({ num: rand })
		}, 1000)
	}

	render(){
		return <h1> {this.state.num} </h1>
	}
}

export default Rando;