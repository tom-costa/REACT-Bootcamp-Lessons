class Hello extends React.Component {

  // You can define an object with all prop default values ahead of time.
  // MUST use syntax: static defaultProps = { }
  static defaultProps = {
    from: "Anonymous",
    to: "Mr Bean",
    bangs: 2
  }

  render() {
    // let bangs = "!".repeat(this.props.bangs);
    let bangs = "@".repeat(this.props.bangs)
    return (
      <div>
        <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
      </div>
    );
  }
}
