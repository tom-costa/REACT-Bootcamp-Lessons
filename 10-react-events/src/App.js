import React, { Component } from "react";
import ButtonList from "./ButtonList";
import "./App.css";
import NumberList from "./NumberList";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ButtonList />
        <NumberList />
      </div>
    );
  }
}

export default App;
