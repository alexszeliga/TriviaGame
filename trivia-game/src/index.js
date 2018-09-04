import React from "react";
import ReactDOM from "react-dom";
import TriviaGame from "./components/triviaGame";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<TriviaGame />, document.getElementById("root"));
registerServiceWorker();
