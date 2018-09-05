import React, { Component } from "react";

class StatusBar extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col">Time left: {this.props.timeLeft}</div>
        <div className="col">Lives Left: {this.props.livesLeft}</div>
        <div className="col">
          Questions Remaining: {this.props.remainingQuestions}
        </div>
      </div>
    );
  }
}

export default StatusBar;
