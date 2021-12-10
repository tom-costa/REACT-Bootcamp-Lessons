import React, { Component } from 'react';
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five' , 'six']
    }

    constructor(props) {
        super(props);
        this.state = {
            die1: 'one',
            die2: 'one',
            rolling: false
        }
        this.roll = this.roll.bind(this)
    }
    roll(){
        // Pick 2 new rolls
        const randDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const randDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        console.log("Hand 1: ", randDie1)
        console.log("Hand 2: ", randDie2)

        // Set state with 2 new rolls
        this.setState({ die1: randDie1, die2: randDie2, rolling:true })

        setTimeout( () => 
        this.setState({rolling:false}),600)
    }

    render(){
        return (
            <div className="RollDice">
                <div className="dice-container">
                    <Die face={this.state.die1} rolling={this.state.rolling}/>
                    <Die face={this.state.die2} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}> 
                { this.state.rolling ? "Rolling..." : "Roll DICE!" } 
                </button>
            </div>
        )
    }
}

export default RollDice;