import React, { Component } from 'react';
import Box from './Box'
import './BoxContainer.css'

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 18,
        colors: ['blue', 'pink', 'red', 'grey', 'yellow', 'green', 'purple', 'magenta']
    }
    render(){
        const boxes = Array.from( {length: this.props.numBoxes}).map(
            () => <Box colors={this.props.colors}/>
        )
        return (
        <div>
            <h1>Random Color Boxes Generator!</h1>
            <div className='BoxContainer'>{boxes}</div>
        </div>
        )
    }
}

export default BoxContainer