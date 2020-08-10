import React, { useState, useEffect } from "react";
import "./styles1.css";
import Board from "./Components/Board";
import Card from "./Components/Card";
import QuestionBoard from "./Components/QuestionBoard";

export default function TestApp() {
  // hooks to handle the answer cards
  const [state, setState] = useState(0);

  useEffect(() => {
    // console.log("hi");
    setState({
      "0": {
        0: "_qn1",
        1: "_qn2",
        2: "_qn3"
      },
      "1": {
        0: "card-1",
        1: "card-2",
        2: "card-3"
      }
    });
    // setState(localStorage.getItem("card"));
  }, []);

  function checkState(e) {
    e.preventDefault();
    for (let i = 0; i < 3; i++) {
      var board = document.getElementById(state[0][i]);
      board.appendChild(document.getElementById(state[1][i]));
    }
  }

  function reset(e) {
    e.preventDefault();
    for (let i = 0; i < 3; i++) {
      var board = document.getElementById(state[0][i]);
      /* made a change coz it's getting error if there was no
        answers/values on the boxes. So if reset button is pressed 
        with no values in there it will simply refresh the page or 
        else remove the child from the board@1/08/2020
      */
      console.log("board..", board.textContent);
      if (board.textContent === "") {
        window.location.reload("false");
      } else {
        console.log("board..", board.textContent);
        board.removeChild(document.getElementById(state[1][i]));
        window.location.reload("false");
      }
    }
  }

  return (
    <div className="App">
      <h1>Fill in the Blanks</h1>
      <main className="flexbox" id="flex">
        <Board id="board-1" className="board">
          {/* questions section */}
          <QuestionBoard id="board-3" className="_questionBoard">
            {/* questions board section */}
          </QuestionBoard>
        </Board>
        {/* choices board section*/}
        <div className="bottomFlex">
          <Board id="board-2" className="_choiceBoard">
            <Card id="card-1" className="card" draggable="true">
              <p>
                <b>Variable</b>
              </p>
            </Card>
            <Card id="card-2" className="card" draggable="true">
              <p>
                <b>Comments</b>
              </p>
            </Card>
            <Card id="card-3" className="card" draggable="true">
              <p>
                <b>$</b>
              </p>
            </Card>
            <Card id="card-4" className="card" draggable="true">
              <p>
                <b>Semi-Colon</b>
              </p>
            </Card>
          </Board>
        </div>
        <div className="_buttons">
          <button onClick={checkState} className="button">
            Ans
          </button>
          <p />
          <button onClick={reset} className="button">
            Reset
          </button>
        </div>
      </main>
    </div>
  );
}
