import React, { Component } from 'react';
import './Box.css'
import { choice } from './Helpers'

class Box extends Component {
    static defaultProps = {
    }
    constructor(props){
        super(props)
        this.state = { color: choice(this.props.colors)}
        this.handleClick = this.handleClick.bind(this)
    }
    pickColor(){
        // Do While Loop so that it doesn't use repeated values from the randomiser.
        let newColor
        do {
            newColor = choice(this.props.colors)
        } while (newColor === this.state.color)

        // And if the newColor is NOT the same as the 
        // state.color, BREAK out of the loop and SET THE STATE to the newColor
        this.setState({color: newColor})
    }
    handleClick(){
        console.log("Hi")
        this.pickColor()
    }

    render(){
        return(
            <div className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>

            </div>
        )
            
    }
}


export default Box