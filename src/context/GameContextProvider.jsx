import { useState } from "react";
import gameContext from "./GameContext";

const GameContextProvider = ({ children }) => {
  const [gameStart, setGameStart] = useState(false);
  const [choice, setChoice] = useState({});
  const [score, setScore] = useState(0);
  let isWinner;
  const systemChoices = [
    { class: "gamePaper", src: "./images/icon-paper.svg" },
    { class: "gameScissors", src: "./images/icon-scissors.svg" },
    { class: "gameRock", src: "./images/icon-rock.svg" },
  ];

  const makeChoice = (option) => {
    setChoice(option);
  };
  const handleGameStart = () => {
    setGameStart(!gameStart);
  };
  function determineResult(userClass, systemClass) {
    let output;
    if (
      (userClass === "gamePaper" && systemClass === "gameRock") ||
      (userClass === "gameRock" && systemClass === "gameScissors") ||
      (userClass === "gameScissors" && systemClass === "gamePaper")
    ) {
      isWinner = 'you';
      output = "You Won";
      return [output, isWinner];
    } else if (userClass === systemClass) {
      output = "It's a draw";
      return [output];
    } else {
      isWinner = 'system';
      output = "You Lose";
      return [output, isWinner];
    }
  }
  function updateScore(result, setScore) {
    if (result === "You Won") {
      setScore(score + 1);
    } else if (result === "You Lose") {
      setScore(score - 1);
    } else {
      setScore(score + 0);
    }
  }
  return (
    <gameContext.Provider
      value={{
        gameStart,
        choice,
        makeChoice,
        handleGameStart,
        systemChoices,
        score,
        setScore,
        determineResult,
        updateScore,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameContextProvider;
