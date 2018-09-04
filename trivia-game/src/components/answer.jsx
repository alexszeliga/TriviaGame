import React, { Component } from "react";

class Answer extends Component {
  render() {
    return (
      <div onClick={() => this.props.onGuess(this.props.id)}>
        {this.props.answerText}
      </div>
    );
  }
}

export default Answer;
