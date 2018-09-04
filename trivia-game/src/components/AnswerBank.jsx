import React, { Component } from "react";
import Answer from "./answer";

class AnswerBank extends Component {
  state = {};
  handleGuess = answerId => {
    console.log("test", answerId);
    if (this.props.answerBank[answerId].correct) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
    }
  };
  render() {
    return (
      <div>
        {this.props.answerBank.map(answer => (
          <Answer
            onGuess={this.handleGuess}
            key={answer.id}
            id={answer.id}
            answerText={this.props.answerBank[answer.id].text}
          />
        ))}
      </div>
    );
  }
}

export default AnswerBank;
