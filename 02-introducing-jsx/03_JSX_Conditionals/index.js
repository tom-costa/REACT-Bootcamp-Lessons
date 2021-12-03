// function getNum() {
// 	return Math.floor(Math.random() * 10) + 1;
// }
// class NumPicker extends React.Component {
// 	render() {
// 		const num = getNum();
// 		let msg;
// 		if (num === 7) {
// 			msg =
// 				<div>
// 					<h2>CONGRATS YOU WIN!</h2>
// 					<img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
// 				</div>
// 		} else {
// 			msg = <p>Sorry You Lose!</p>
// 		}
// 		return (
// 			<div>
// 				<h1>Your number is: {num} </h1>
// 				{msg}
// 			</div>
// 		);
// 	}
// }

function randomNumber(){
	return Math.floor(Math.random() *10) + 1;
}

console.log(randomNumber());

class NumPicker extends React.Component {
	
	render() {
		const num = randomNumber()
		const success = "Nice one, you win"
		const fail = "Sorry, not this time"

		return (
			<div>
				<h1> Your number is... {num} </h1>

				{/* Simple Ternary Operator */}
				{/* <p> {num === 5  ? success : fail }</p>  */}  

				{/* Or you can use the && Operator to shorthand it but only shows when it's a success */}
				<p> {num === 5 && success }</p>
			</div>
		)

	}
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));