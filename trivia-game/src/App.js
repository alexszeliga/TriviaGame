import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AnswerBank from "./components/AnswerBank";
import TriviaQuestion from "./components/TriviaQuestion";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TriviaQuestion />
      </div>
    );
  }
}

export default App;
