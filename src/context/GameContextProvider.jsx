import { useState } from "react";
import gameContext from "./GameContext";

const GameContextProvider = ({ children }) => {
  const [gameStart, setGameStart] = useState(false);
  const [choice, setChoice] = useState({});
  const [score, setScore] = useState(0);
  const systemChoices = [
    { class: "gamePaper", src: "./images/icon-paper.svg" },
    { class: "gameScissors", src: "./images/icon-scissors.svg" },
    { class: "gameRock", src: "./images/icon-rock.svg" },
  ];
  const randomNumberGenerator = () => {
    let randomNumber = Math.floor(Math.random() * 3);

    return randomNumber;
  };
  const makeChoice = (option) => {
    setChoice(option);
  };
  const handleGameStart = () => {
    setGameStart(!gameStart);
  };
  return (
    <gameContext.Provider
      value={{
        gameStart,
        choice,
        makeChoice,
        handleGameStart,
        systemChoices,
        randomNumberGenerator,
        score,
        setScore
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameContextProvider;
