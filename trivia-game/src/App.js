import React, { Component } from "react";
import "./App.css";
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
