import React, { Component } from "react";
import banner from "./assets/banner.svg";
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
      <div className="frame">
            <img src={banner} />
            <p>{this.state.message}</p>
          </div>
      </div>
    );
  }
}

export default App;
