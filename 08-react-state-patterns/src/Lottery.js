import React, { Component } from 'react';
import './Ball.css'
import Ball from './Ball'

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    }

    constructor(props){
        super(props)
        this.state = {nums: Array.from( {length: this.props.maxBalls}) }
        this.handleClick = this.handleClick.bind(this)
    }
    generate(){
        this.setState(curState => ({
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }))
        console.log(this.state)
    }
    
    handleClick(){
        this.generate()
    }

    render(){
        return(
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(number => <Ball uniqueNum={number} /> )}
                </div>
                <button onClick={this.handleClick}>Generate Results</button>

            </section>
       
        )
    }
}

export default Lottery