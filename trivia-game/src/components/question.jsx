import React, { Component } from "react";

class Question extends Component {
  state = {};
  render() {
    return <div>{this.props.questionText}</div>;
  }
}

export default Question;
