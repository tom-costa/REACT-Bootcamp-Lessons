import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
   
    render() {
        const classFace = `Die fas fa-dice-${this.props.face} 
        ${this.props.rolling && "rotating" }`

        return(
            <div>
                <i className={classFace}></i>
            </div>
        )
    }
}

export default Die;