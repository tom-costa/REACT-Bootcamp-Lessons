import React, { Component } from 'react';
import {choice} from './Helpers'
import Coin from './Coin'

class Flipper extends Component {
    static defaultProps = {
        coins: [
            { side: 'heads', imgSrc: "https://ichef.bbci.co.uk/news/624/mcs/media/images/81334000/png/_81334239_queen2015.png" },
            { side: 'tails', imgSrc: "https://media.wired.co.uk/photos/606da41a5113453af57347d2/master/w_1600%2Cc_limit/pound-coin.png" }
        ]
    };
    constructor(props) {
        super(props)
        this.state = {
            currCoin: null,
            numFlips: 0,
            numHeads: 0,
            numTails: 0
        };
        this.handleClick = this.handleClick.bind(this)
    }

    flipCoin(){
        const newCoin = choice(this.props.coins)
        this.setState( oldState => {
            return{
                currCoin: newCoin,
                numFlips: oldState.numFlips + 1,
                numHeads: oldState.numHeads + (newCoin.side === "heads" ? 1 : 0),
                numTails: oldState.numTails + (newCoin.side === "tails" ? 1 : 0)
            }
        })
    }
    handleClick(e) {
        console.log("Console logging a test")
        this.flipCoin()
    }

    render() {
        return (
            <div className="Flipper">
                <h2>🪙 Let's Flip a Coin! 🪙</h2>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}

                <button onClick={this.handleClick}>Flip Coin</button>
                <p>
                Out of {this.state.numFlips}, there have been: {this.state.numHeads} Heads and {this.state.numTails} Tails
                </p>
            </div>
        )
    }
}
export default Flipper
