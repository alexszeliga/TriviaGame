import React, { Component } from "react";
import Question from "./question";
import AnswerBank from "./answerBank";
import StatusBar from "./statusBar";
var gameQuestions = [
  {
    text:
      "Welcom to Contrived-ia! Set your options below, then click here to start game!",
    answers: [
      {
        text: "Click here to set the number of Questions: ",
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
        text: "Click here to set the time per question",
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
        text: "",
        correct: false,
        id: 2
      },
      {
        text: "",
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
    text:
      "A boy and his father are in a car accident; the boy is rushed to the hospital for surgery, but the surgeon protests 'I cannot perform surgery on this boy'...why?",
    answers: [
      { text: "Pass", correct: false, id: 0 },
      { text: "The surgeon is his mother", correct: true, id: 1 },
      { text: "His Porsche was in the shop", correct: false, id: 2 },
      {
        text: "Band on the Run by Paul McCartney's doppleganger and Wings",
        correct: false,
        id: 3
      }
    ]
  },
  {
    text: "How many dogs is the correct number of dogs?",
    answers: [
      { text: "I'm more of a cat person", correct: false, id: 0 },
      {
        text: "One; we don't need puppies running around.",
        correct: false,
        id: 1
      },
      { text: "n = n + 1", correct: false, id: 2 },
      { text: "Two. Three is too many.", correct: true, id: 3 }
    ]
  },
  {
    text:
      "A squid eating dough in a polyethylene bag is fast and bulbous, got me?",
    answers: [
      { text: "I'm don't think I do.", correct: false, id: 0 },
      { text: "That sounds inhumane.", correct: false, id: 1 },
      { text: "Yes, the Mascara Snake", correct: true, id: 2 },
      { text: "Jim Carrey in The Truman Show(1998)", correct: false, id: 3 }
    ]
  },
  {
    text: "What is Minnesota Tischmann doing?",
    answers: [
      { text: "I keep eating and eating.", correct: false, id: 0 },
      { text: "I'm sorry, what?", correct: false, id: 1 },
      { text: "Test answer number three", correct: false, id: 2 },
      { text: "He's using a chicken to measure it.", correct: true, id: 3 }
    ]
  },
  {
    text: "Mr. President, where can I get a job?",
    answers: [
      {
        text:
          "You know, the main spring of this country, wound up as tight as it is, is guaranteed for the life of the watch",
        correct: false,
        id: 0
      },
      { text: "Right on; he's jivin' me again.", correct: false, id: 1 },
      { text: "The Job Displacement Market Program", correct: true, id: 2 },
      { text: "No.", correct: false, id: 3 }
    ]
  },
  {
    text: "Why does the porridge bird lay it's egg in the air?",
    answers: [
      { text: "Goshen, PA", correct: false, id: 0 },
      { text: "Goshen, ID", correct: false, id: 1 },
      { text: "Goshen, CA", correct: false, id: 2 },
      { text: "No.", correct: true, id: 3 }
    ]
  },
  {
    text: "What's that on your shirt?",
    answers: [
      { text: "Look down at your shirt", correct: false, id: 0 },
      {
        text: "'I got some sauce on it; I had chili dogs.'",
        correct: true,
        id: 1
      },
      {
        text:
          "Blame it on the third dog. You never should have gotten a third dog. Three is too many.",
        correct: false,
        id: 2
      },
      {
        text:
          "Smile and laught out loud, but intently study them to see if they were just being nice",
        correct: false,
        id: 3
      }
    ]
  },
  {
    text:
      "Do you think old what's-his-name up there in the Whitehouse has ever gotten writers block?",
    answers: [
      {
        text: "Politics is a third rail; just don't touch it.",
        correct: false,
        id: 0
      },
      {
        text:
          "'If there's just two songs in ya, boy, what do you want from me?",
        correct: true,
        id: 1
      },
      {
        text: "I don't have good recall for song lyrics.",
        correct: false,
        id: 2
      },
      { text: "Please call me 'Sir'.", correct: false, id: 3 }
    ]
  },
  {
    text: "What is yacht rock?",
    answers: [
      { text: "Just another way to slice it.", correct: false, id: 0 },
      { text: "Festive, joyous, and harmonious.", correct: false, id: 1 },
      {
        text:
          "Another way to divide 80's pop music well after people stopped caring",
        correct: true,
        id: 2
      },
      {
        text: "I don't know, but we're takin' it to the streets!",
        correct: false,
        id: 3
      }
    ]
  },
  {
    text: "Game Over! Do things like look at your score and restart here.",
    answers: [
      {
        text: "",
        correct: false,
        id: 0
      },
      { text: "", correct: false, id: 1 },
      {
        text: "",
        correct: false,
        id: 2
      },
      { text: "", correct: false, id: 3 }
    ]
  }
];

class TriviaGame extends Component {
  state = {
    gameState: 0,
    timeLeft: 15,
    defaultTime: 15,
    remainingQuestions: 10,
    gameTimer: undefined,
    correctAnswers: 0,
    totalQuestions: 10,
    gameMessage: ""
  };
  timerTick = () => {
    if (this.state.timeLeft > 0) {
      this.setState({ timeLeft: this.state.timeLeft - 1 });
      //   console.log(this.state.timeLeft);
    } else {
      clearInterval(this.state.gameTimer);
      //   console.log("Timer ended at 0");
      this.handleResult(false);
    }
  };
  handleClick = () => {
    // console.log("you clicked the question");
    if (this.state.gameState === 0) {
      // this is the only place where you iterate the gamestate without handleResult
      this.setState({ gameState: this.state.gameState + 1 });
      // Start timer
      this.setState({ gameTimer: setInterval(this.timerTick, 1000) });
    }
  };

  totalOutput = () => {
    return this.state.totalCorrect / this.state.totalQuestions;
  };

  handleGuess = answerId => {
    // console.log("Clicked button ID (0 indexed): ", answerId);
    // if the gamestate is 0, the game hasn't started yet.
    switch (this.state.gameState) {
      case 0:
        {
          gameQuestions[this.state.gameState].answers[answerId].changeOption();
        }
        break;
      case this.state.totalQuestions:
        this.setState({
          remainingQuestions: this.state.remainingQuestions - 1
        });

        // endgame
        console.log("endgame");
        // gameQuestions[11].answers[0].text
        if (gameQuestions[this.state.gameState].answers[answerId].correct) {
          //add 1 correct
          this.setState({ correctAnswers: this.state.correctAnswers + 1 });
          this.setState({ gameMessage: "Correct!" });
        } else {
          // nothing
          this.setState({ gameMessage: "Wrong." });
        }
        clearInterval(this.state.gameTimer);
        this.setState({ gameState: 11 });
        break;
      default:
        {
          if (
            gameQuestions[this.state.gameState].answers[answerId].correct &&
            this.state.gameState < this.state.totalQuestions + 1
          ) {
            // console.log("Correct")
            this.handleResult(true);
          } else if (
            gameQuestions[this.state.gameState].answers[answerId].correct ===
              false &&
            this.state.gameState < this.state.totalQuestions + 1
          ) {
            //   console.log("Incorrect");
            this.handleResult(false);
          }
        }
        break;
    }
  };
  handleResult = result => {
    if (result) {
      console.log("correct");
      this.setState({ correctAnswers: this.state.correctAnswers + 1 });
      this.setState({ gameMessage: "Correct!" });
    } else {
      console.log("Incorrect");
      this.setState({ gameMessage: "Wrong." });
    }
    // Stop the timer
    clearInterval(this.state.gameTimer);
    // count down questions
    setTimeout(this.iterateGameState, 3000);
  };

  iterateGameState = () => {
    this.setState({ gameMessage: "" });
    this.setState({ remainingQuestions: this.state.remainingQuestions - 1 });
    // reset timer
    this.setState({ timeLeft: this.state.defaultTime });
    // iterate game state
    this.setState({ gameState: this.state.gameState + 1 });
    //start the timer
    this.setState({ gameTimer: setInterval(this.timerTick, 1000) });
  };
  reInit = () => {
    this.setState({ gameState: 0 });
    this.setState({ remainingQuestions: this.state.totalQuestions });
    this.setState({ timeLeft: this.state.defaultTime });
    this.setState({ correctAnswers: 0 });
    this.setState({ gameMessage: "" });
  };
  render() {
    return (
      <div>
        <StatusBar
          timeLeft={this.state.timeLeft}
          remainingQuestions={this.state.remainingQuestions}
          gameMessage={this.state.gameMessage}
        />
        <Question
          onStart={this.handleClick}
          questionText={gameQuestions[this.state.gameState].text}
        />
        <AnswerBank
          onGuess={this.handleGuess}
          answerBank={gameQuestions[this.state.gameState].answers}
          totalCorrect={this.state.correctAnswers}
          gameState={this.state.gameState}
          totalQuestions={this.state.totalQuestions}
        />
        {this.state.gameState === 11 ? (
          <div className="row alert alert-secondary">
            You got{" "}
            {Math.floor(
              (this.state.correctAnswers / this.state.totalQuestions) * 100
            )}
            % correct!
          </div>
        ) : null}
        {this.state.gameState === 11 ? (
          <div className="row alert alert-secondary" onClick={this.reInit}>
            Restart
          </div>
        ) : null}
      </div>
    );
  }
}

export default TriviaGame;
