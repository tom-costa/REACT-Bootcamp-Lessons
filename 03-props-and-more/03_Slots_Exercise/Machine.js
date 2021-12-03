class Machine extends React.Component {
  render(){
    // Object Destructuring, it will make a new variable for each of the values in the backets that appends that to "this.props"
    const {s1, s2, s3} = this.props
    console.log(s1, s2, s3)

    const isWinner = (s1 === s2) && (s2 === s3)

    return (
      <div>
        <p> {s1} {s2} {s3}</p>
        <p> {isWinner ? "Winner!" : "Loser!"} </p>
      </div>
    )
  }
}