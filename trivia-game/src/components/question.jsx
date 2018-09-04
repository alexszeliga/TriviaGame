import React, { Component } from "react";

class Question extends Component {
  render() {
    return (
      <div className="row alert alert-primary">{this.props.questionText}</div>
    );
  }
}

export default Question;
