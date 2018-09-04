import React, { Component } from "react";
import Question from "./question";
import AnswerBank from "./answerBank";

class TriviaGame extends Component {
  // TODO add more questions
  state = {
    gameQuestions: [
      {
        text: "Init state: Click here to start game",
        answers: [
          { text: "", correct: false, id: 0 },
          { text: "", correct: false, id: 1 },
          { text: "", correct: false, id: 2 },
          { text: "", correct: false, id: 3 }
        ]
      },
      {
        text: "Test question number one",
        answers: [
          { text: "Test answer number one", correct: true, id: 0 },
          { text: "Test answer number two", correct: false, id: 1 },
          { text: "Test answer number three", correct: false, id: 2 },
          { text: "Test answer number four", correct: false, id: 3 }
        ]
      },

      {
        text: "Test question number Two",
        answers: [
          { text: "Test answer number one", correct: false, id: 0 },
          { text: "Test answer number two", correct: false, id: 1 },
          { text: "Test answer number three", correct: true, id: 2 },
          { text: "Test answer number four", correct: false, id: 3 }
        ]
      }
    ],
    gameState: 0
  };

  handleClick = () => {
    if (this.state.gameState === 0) {
      this.setState({ gameState: this.state.gameState + 1 });
      //   console.log(this.state.gameState);
    } else {
      //   console.log(this.state.gameState);
    }
  };
  handleGuess = answerId => {
    console.log("test", answerId);
    // console.log(
    //   this.state.gameQuestions[this.state.gameState].answers[answerId].correct
    // );
    if (
      this.state.gameQuestions[this.state.gameState].answers[answerId].correct
    ) {
      console.log("Correct");
      this.setState({ gameState: this.state.gameState + 1 });
    } else {
      //   console.log("Incorrect");
      //   console.log(this);
    }
  };
  render() {
    return (
      // TODO game progression through multiple questions
      <div onClick={this.handleClick}>
        <Question
          questionText={this.state.gameQuestions[this.state.gameState].text}
        />
        <AnswerBank
          onGuess={this.handleGuess}
          answerBank={this.state.gameQuestions[this.state.gameState].answers}
        />
      </div>
    );
  }
}

export default TriviaGame;
