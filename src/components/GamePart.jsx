import { useContext } from "react";
import gameContext from "../context/GameContext";

const GamePart = () => {
  const {
    gameStart,
    choice,
    handleGameStart,
    systemChoices,
    randomNumberGenerator,
    setScore
  } = useContext(gameContext);
  let number = randomNumberGenerator();
  let src = choice.src;
  let systemSrc = systemChoices[number]?.src;
  let className = choice.class;
  let systemClassName = systemChoices[number]?.class;
  let result = "";
  if (className === "gamePaper" && systemClassName === "gameRock") {
    result = "You Won";
  } else if (className === "gamePaper" && systemClassName === "gameScissors") {
    result = "You Lose";
  } else if (className === "gameRock" && systemClassName === "gameScissors") {
    result = "You Won";
  } else if (className === "gameRock" && systemClassName === "gamePaper") {
    result = "You Lose";
  } else if (className === "gameScissors" && systemClassName === "gamePaper") {
    result = "You Won";
  } else if (className === "gameScissors" && systemClassName === "gameRock") {
    result = "You Lose";
  } else {
    result = "It's a draw";
  }
  if(result == 'You Won'){
    setScore(prevScore => prevScore + 1);
  }else if(result == 'You Lose'){
    setScore(prevScore => prevScore - 1);
  }
  if (!gameStart) {
    return;
  }
  return (
    <div className="gameContainer">
      <div className="yourPick">
        <p>You Picked</p>
        <div className={`${className} signs`}>
          <img src={src} alt={`${className} image`} />
        </div>
      </div>
      <div className="result">
        <h1>{result}</h1>
        <button onClick={handleGameStart}>Play Again</button>
      </div>
      <div className="systemPick">
        <p>System Picked</p>
        <div className={`${systemClassName} signs`}>
          <img src={systemSrc} alt={`${systemClassName} image`} />
        </div>
      </div>
    </div>
  );
};

export default GamePart;
