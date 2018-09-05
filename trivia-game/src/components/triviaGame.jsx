import React, { Component } from "react";
import Question from "./question";
import AnswerBank from "./answerBank";
import StatusBar from "./statusBar";

class TriviaGame extends Component {
  // TODO add more questions
  state = {
    gameQuestions: [
      {
        text: "Init state: Click here to start game",
        answers: [
          { text: "Number of Questions: ", correct: false, id: 0 },
          { text: "Difficulty: ", correct: false, id: 1 },
          { text: "Lives: ", correct: false, id: 2 },
          { text: "Sound: ", correct: false, id: 3 }
        ]
      },
      {
        text: "Where is the London Bridge currently located?",
        answers: [
          { text: "Lake Havasu City, Arizona, USA", correct: true, id: 0 },
          { text: "Dubai, UAE", correct: false, id: 1 },
          {
            text: "The Nürburgring, Nürburg, Rhineland-Palatinate, GER",
            correct: false,
            id: 2
          },
          { text: "That's offensive. I'm not answering", correct: false, id: 3 }
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
    gameState: 0,
    timeLeft: 10,
    livesLeft: 3,
    difficultyLevel: 0,
    remainingQuestions: 10
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
      if (this.state.gameState <= this.state.gameQuestions.length) {
        this.setState({ gameState: this.state.gameState + 1 });
      }
    } else {
      //   console.log("Incorrect");
      //   console.log(this);
    }
  };
  render() {
    return (
      // TODO game progression through multiple questions
      <div onClick={this.handleClick}>
        <StatusBar
          timeLeft={this.state.timeLeft}
          livesLeft={this.state.livesLeft}
          remainingQuestions={this.state.remainingQuestions}
        />
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
