import React, { Component } from "react";

class Answer extends Component {
  state = {};

  render() {
    return (
      <div onClick={() => this.props.onGuess(this.props.id)}>
        {this.props.answerText}
      </div>
    );
  }
}

export default Answer;
