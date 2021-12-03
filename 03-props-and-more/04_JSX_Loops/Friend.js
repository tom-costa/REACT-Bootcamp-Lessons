class Friend extends React.Component {
  render(){
    const {name, hobbies} = this.props
  
    console.log(name, hobbies)


    return (
      <div>
        <h2>{name}:</h2>
        <ul> 
          {hobbies.map(h => <li>{h}</li> )}
        </ul>
      </div>
    )
  }
}