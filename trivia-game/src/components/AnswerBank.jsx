import React, { Component } from "react";

class AnswerBank extends Component {
  render() {
    let wrongAnswerArray = this.props.questionData.questionArray[
      this.props.questionData.randomlySelectedQuestionIndex
    ].wrongAnswers;
    wrongAnswerArray.push(
      this.props.questionData.questionArray[
        this.props.questionData.randomlySelectedQuestionIndex
      ].answerText
    );

    function shuffleArray(array) {
      let j, x, i;
      for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
    }

    shuffleArray(wrongAnswerArray);
    console.log(wrongAnswerArray);
    return (
      <div>
        <h5>This is AnswerBank:</h5>
        <h3>{wrongAnswerArray[0]}</h3>
        <h3>{wrongAnswerArray[1]}</h3>
        <h3>{wrongAnswerArray[2]}</h3>
        <h3>{wrongAnswerArray[3]}</h3>
      </div>
    );
  }
}

export default AnswerBank;
