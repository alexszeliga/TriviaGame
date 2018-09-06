import React, { Component } from "react";

class StatusBar extends Component {
  state = {};
  render() {
    const classes = "col alert alert-";
    let timeClasses = classes;
    let liveClasses = classes;
    let remainingClasses = classes;

    timeClasses += this.props.timeLeft < 11 ? "warning" : "success";
    liveClasses += this.props.livesLeft < 3 ? "warning" : "success";
    remainingClasses +=
      this.props.remainingQuestions < 7 ? "warning" : "success";
    return (
      <div className="row">
        <div className={timeClasses}>Time left: {this.props.timeLeft}</div>
        <div className={liveClasses}>Lives Left: {this.props.livesLeft}</div>
        <div className={remainingClasses}>
          Questions Remaining: {this.props.remainingQuestions}
        </div>
      </div>
    );
  }
}

export default StatusBar;
