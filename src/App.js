import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lamp from "./Lamp"
import Quote from "./Quotes";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      work: false
    };
  }
  handleClick = () => {
    console.log(this.state)
    this.setState({ work: !this.state.work })
  }
  render() {
    const activityHomer = this.state.work? "activityHomer" : "App-logo"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={activityHomer} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
      <button
        onClick={this.handleClick}
        
      >Homer's Activity</button>
      <Lamp />
      <Lamp on />
       <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
      </div>
    );
  }
}

export default App;