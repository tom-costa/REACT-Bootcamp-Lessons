import React, { Component } from 'react'
import './Dog.css'
import pug from './pug.jpeg'

class Dog extends Component {
	render(){
		return (
			<div className="Dog">
				<h1> DOG </h1>
				<img className="Dog-img" src={pug} />
				<h1>WANTED!</h1>
			</div>
		)
	}
}
export default Dog