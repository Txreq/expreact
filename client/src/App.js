import React, { Component } from "react";
import "./style.scss";

class App extends Component {
  constructor(){
    super()
    this.state = {
      message: "",
    }
  }

  componentDidMount(){
    fetch("/api")
      .then(res => res.json())
      .then(data => { this.setState({ message: data.message }) })
  }

  render(){
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
