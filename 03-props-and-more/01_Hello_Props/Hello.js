class Hello extends React.Component {
  render(){
    return (
      <div> 
        <p> Hi everybody! Message from {this.props.from} to {this.props.to}!</p>
        {/* <p> Hi {props.from.}!</p> */}
      </div>
    )
  }
}