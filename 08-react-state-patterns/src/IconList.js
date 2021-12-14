import React, { Component } from 'react';

class IconList extends Component {
    static defaultProps = {
        options: [
            "angry",
            "anchor",
            "archive",
            "at",
            "archway",
            "baby",
            "bell",
            "bolt",
            "bone",
            "car",
            "city",
            "cloud",
            "couch"
          ]
    }

    constructor(props){
        super(props)
        this.state = { icons: ["angry"] }
        this.addIcon = this.addIcon.bind(this)
    }

    addIcon() {
        let optionsVar = this.props.options
        let idx = Math.floor(Math.random() * optionsVar.length)
        let newIcon = optionsVar[idx]
        this.setState({ icons: [...this.state.icons, newIcon] })
        console.log(idx)
        console.log(newIcon)
    }

    render() {
        const icons = this.state.icons.map( icon => <i className={`fas fa-${icon}`} />)
        return(
            <div>
                <h1>Icons: {icons} </h1>
                <button onClick={this.addIcon}>Add new Icon</button>
            </div>
        )
    }
}

export default IconList