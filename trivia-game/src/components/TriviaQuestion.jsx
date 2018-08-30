import React, { Component } from "react";
import AnswerBank from "./AnswerBank";

class TriviaQuestion extends Component {
  state = {};
  render() {
    const questionData = {
      randomlySelectedQuestionIndex: Math.floor(Math.random() * 5),
      questionArray: [
        {
          questionText: "question 1",
          answerText: "answer 1",
          wrongAnswers: [
            "wrong answer 1.1",
            "wrong answer 1.2",
            "wrong answer 1.3"
          ]
        },
        {
          questionText: "question 2",
          answerText: "answer 2",
          wrongAnswers: [
            "wrong answer 2.1",
            "wrong answer 2.2",
            "wrong answer 2.3"
          ]
        },
        {
          questionText: "question 3",
          answerText: "answer 3",
          wrongAnswers: [
            "wrong answer 3.1",
            "wrong answer 3.2",
            "wrong answer 3.3"
          ]
        },
        {
          questionText: "question 4",
          answerText: "answer 4",
          wrongAnswers: [
            "wrong answer 4.1",
            "wrong answer 4.2",
            "wrong answer 4.3"
          ]
        },
        {
          questionText: "question 5",
          answerText: "answer 5",
          wrongAnswers: [
            "wrong answer 5.1",
            "wrong answer 5.2",
            "wrong answer 5.3"
          ]
        }
      ]
    };
    return (
      <div>
        <h5>Question Text</h5>
        <h3>
          {
            questionData.questionArray[
              questionData.randomlySelectedQuestionIndex
            ].questionText
          }
        </h3>
        <AnswerBank questionData={questionData} />
      </div>
    );
  }
}

export default TriviaQuestion;
