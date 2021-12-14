import React, { Component } from 'react';

class ScoreKeeper extends Component {
    constructor(props){
        super(props)
        this.state = {score: 0}
        this.increaseCounter = this.increaseCounter.bind(this)
        this.increaseMany = this.increaseMany.bind(this)
    }

    increaseCounter(){
        this.setState( {score: this.state.score + 1} )
        console.log(this.state.score)
    }

    incrementScore(curState) {
        return { score: curState.score + 3 };
    }

    increaseMany() {
        // this.setState(st => { 
        //     return {score: st.score + 3 } 
        // })
        // this.setState(st => { 
        //     return {score: st.score + 2 } 
        // })
        this.setState(this.incrementScore);
    }

    render(){
        return(
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.increaseCounter}>Increase One</button>
                <button onClick={this.increaseMany}>Increase Many</button>
            </div>
        )
    }
}

export default ScoreKeeper 
