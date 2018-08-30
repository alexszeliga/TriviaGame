import React, { Component } from "react";
import OnePossibleAnswer from "./OnePossibleAnswer";

class answerBank extends Component {
  state = {};
  render() {
    const answerArray = this.props.questionData.questionArray[
      this.props.questionData.randomlySelectedQuestionIndex
    ];
    console.log(answerArray);
    return (
      <div>
        <h5>This is AnswerBank:</h5>
        <OnePossibleAnswer />
        <OnePossibleAnswer />
        <OnePossibleAnswer />
        <OnePossibleAnswer />
      </div>
    );
  }
}

export default answerBank;
