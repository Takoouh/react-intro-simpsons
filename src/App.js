import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lamp from "./Lamp";
import Quote from "./Quote";
import NameForm from "./NameForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: false,
      compteur: 5,
      selectedQuote: ""
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          selectedQuote: data[0]
        });
      });
  }

  handleClick = () => {
    console.log(this.state);
    this.setState({ work: !this.state.work });
  };

  incrementClick = () => {
    this.setState({ compteur: this.state.compteur + 1 });
  };
  decrementClick = () => {
    this.setState({ compteur: this.state.compteur - 1 });
  };

  render() {
    const activityHomer = this.state.work ? "activityHomer" : "App-logo";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={activityHomer} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.incrementClick}>+</button>
        <button onClick={this.decrementClick}>-</button>
        <h1>{this.state.compteur}</h1>

        <button onClick={this.handleClick}>Homer's Activity</button>
        <NameForm />
        <Lamp />
        <Lamp on />
        <button onClick={this.getQuote}>Get new Quote</button>
        <Quote
          quote={this.state.selectedQuote.quote}
          character={this.state.selectedQuote.character}
          image={this.state.selectedQuote.image}
        />
      </div>
    );
  }
}

export default App;
