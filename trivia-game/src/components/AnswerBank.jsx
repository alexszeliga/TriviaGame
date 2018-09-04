import React, { Component } from "react";
import Answer from "./answer";

class AnswerBank extends Component {
  state = {};

  render() {
    return (
      <div>
        {this.props.answerBank.map(answer => (
          <Answer
            onGuess={this.props.onGuess}
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
