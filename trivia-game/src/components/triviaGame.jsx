import React, { Component } from "react";
import Question from "./question";
import AnswerBank from "./answerBank";
import StatusBar from "./statusBar";

class TriviaGame extends Component {
  state = {
    gameQuestions: [
      {
        text:
          "Welcom to Contrived-ia! Set your options below, then click here to start game!",
        answers: [
          {
            text: "Number of Questions: ",
            correct: false,
            id: 0,
            changeOption: () => {
              console.log("Change clicked");
              //TODO 3, 6, or 10 questions
              switch (this.state.remainingQuestions) {
                case 10:
                  // down to 6
                  this.setState({ remainingQuestions: 6 });
                  this.setState({ totalQuestions: 6 });
                  break;
                case 6:
                  //down to 3
                  this.setState({ remainingQuestions: 3 });
                  this.setState({ totalQuestions: 3 });
                  break;
                case 3:
                  // up to 10
                  this.setState({ remainingQuestions: 10 });
                  this.setState({ totalQuestions: 10 });
                  break;
                default:
                  break;
              }
            }
          },
          {
            text: "Difficulty: ",
            correct: false,
            id: 1,
            changeOption: () => {
              console.log("Change Option Clicked");
              // TODO Easy, Medium, Hard (15 seconds per q, 10sec, 7sec)
              switch (this.state.timeLeft) {
                case 15:
                  // down to 10
                  this.setState({ timeLeft: 10, defaultTime: 10 });
                  break;
                case 10:
                  //down to 7
                  this.setState({ timeLeft: 7, defaultTime: 7 });
                  break;
                case 7:
                  // up to 15
                  this.setState({ timeLeft: 15, defaultTime: 15 });
                  break;
                default:
                  break;
              }
            }
          },
          {
            text: "Lives: ",
            correct: false,
            id: 2,
            changeOption: () => {
              console.log("Change Option Clicked");
              // TODO: Lives 3, 2, or 1.
              switch (this.state.livesLeft) {
                case 3:
                  // down to 2
                  this.setState({ livesLeft: 2 });
                  break;
                case 2:
                  // down to 1
                  this.setState({ livesLeft: 1 });
                  break;
                case 1:
                  // up to 3
                  this.setState({ livesLeft: 3 });
                  break;
                default:
                  break;
              }
            }
          },
          {
            text: "Created by Alex Szeliga in 2018",
            correct: false,
            id: 3,
            changeOption: () => {
              console.log("Change Option Clicked");
            }
          }
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
      },
      {
        text: "Test question number Three",
        answers: [
          { text: "Test answer number one", correct: false, id: 0 },
          { text: "Test answer number two", correct: false, id: 1 },
          { text: "Test answer number three", correct: true, id: 2 },
          { text: "Test answer number four", correct: false, id: 3 }
        ]
      },
      {
        text: "Test question number Four",
        answers: [
          { text: "Test answer number one", correct: false, id: 0 },
          { text: "Test answer number two", correct: false, id: 1 },
          { text: "Test answer number three", correct: true, id: 2 },
          { text: "Test answer number four", correct: false, id: 3 }
        ]
      },
      {
        text: "Test question number Five",
        answers: [
          { text: "Test answer number one", correct: false, id: 0 },
          { text: "Test answer number two", correct: false, id: 1 },
          { text: "Test answer number three", correct: true, id: 2 },
          { text: "Test answer number four", correct: false, id: 3 }
        ]
      },
      {
        text: "Test question number six",
        answers: [
          { text: "Test answer number one", correct: false, id: 0 },
          { text: "Test answer number two", correct: false, id: 1 },
          { text: "Test answer number three", correct: true, id: 2 },
          { text: "Test answer number four", correct: false, id: 3 }
        ]
      },
      {
        text: "Test question number seven",
        answers: [
          { text: "Test answer number one", correct: false, id: 0 },
          { text: "Test answer number two", correct: false, id: 1 },
          { text: "Test answer number three", correct: true, id: 2 },
          { text: "Test answer number four", correct: false, id: 3 }
        ]
      },
      {
        text: "Test question number eight",
        answers: [
          { text: "Test answer number one", correct: false, id: 0 },
          { text: "Test answer number two", correct: false, id: 1 },
          { text: "Test answer number three", correct: true, id: 2 },
          { text: "Test answer number four", correct: false, id: 3 }
        ]
      },
      {
        text: "Test question number nine",
        answers: [
          { text: "Test answer number one", correct: false, id: 0 },
          { text: "Test answer number two", correct: false, id: 1 },
          { text: "Test answer number three", correct: true, id: 2 },
          { text: "Test answer number four", correct: false, id: 3 }
        ]
      },
      {
        text: "Test question number ten",
        answers: [
          { text: "Test answer number one", correct: false, id: 0 },
          { text: "Test answer number two", correct: false, id: 1 },
          { text: "Test answer number three", correct: true, id: 2 },
          { text: "Test answer number four", correct: false, id: 3 }
        ]
      }
    ],
    gameState: 0,
    timeLeft: 15,
    defaultTime: 15,
    livesLeft: 3,
    remainingQuestions: 10,
    gameTimer: undefined,
    playSound: false,
    correctAnswers: 0,
    totalQuestions: 10
  };
  timerTick = () => {
    if (this.state.timeLeft > 0) {
      this.setState({ timeLeft: this.state.timeLeft - 1 });
      console.log(this.state.timeLeft);
    } else {
      clearInterval(this.state.gameTimer);
      console.log("Timer ended at 0");
      this.handleResult();
    }
  };
  handleClick = () => {
    // console.log("you clicked the question");
    if (this.state.gameState === 0) {
      this.setState({ gameState: this.state.gameState + 1 });
      // Start timer
      this.setState({ gameTimer: setInterval(this.timerTick, 1000) });

      //   console.log(this.state.gameState);
    } else {
      //   console.log(this.state.gameState);
    }
  };

  handleGuess = answerId => {
    console.log("Clicked button ID (0 indexed): ", answerId);
    if (this.state.gameState === 0) {
      // Change options
      this.state.gameQuestions[this.state.gameState].answers[
        answerId
      ].changeOption();
    } else if (
      this.state.gameQuestions[this.state.gameState].answers[answerId].correct
    ) {
      //   console.log("Correct");

      //   console.log(this.state.gameState, this.state.gameQuestions.length - 2);
      if (this.state.gameState <= this.state.gameQuestions.length - 2) {
        this.handleResult(true);
      } else {
        // TODO gameover state, re-init
        alert("poop");
      }
    } else {
      //   console.log("Incorrect");
      this.handleResult(false);
      this.setState({ gamestate: this.state.gameState + 1 });
    }
  };
  handleResult = result => {
    // Stop the timer
    clearInterval(this.state.gameTimer);
    // iterate game state
    this.setState({ gameState: this.state.gameState + 1 });
    // count down questions
    this.setState({ remainingQuestions: this.state.remainingQuestions - 1 });
    // reset timer
    this.setState({ timeLeft: this.state.defaultTime });
    if (result) {
      console.log("correct");
      this.setState({ correctAnswers: this.state.correctAnswers + 1 });
    } else {
      console.log("Incorrect");
    }
  };
  render() {
    return (
      <div>
        <StatusBar
          timeLeft={this.state.timeLeft}
          livesLeft={this.state.livesLeft}
          remainingQuestions={this.state.remainingQuestions}
        />
        <Question
          onStart={this.handleClick}
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
