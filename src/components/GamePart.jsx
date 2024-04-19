import { useContext, useEffect, useState } from "react";
import gameContext from "../context/GameContext";

const GamePart = () => {
  const {
    gameStart,
    choice,
    handleGameStart,
    systemChoices,
    setScore,
    determineResult,
    updateScore,
  } = useContext(gameContext);
  
  const randomNumberGenerator = () => {
    let randomNumber = Math.floor(Math.random() * 3);

    return randomNumber;
  };
  const [number, setNumber] = useState(null);
  useEffect(() => {
    setNumber(randomNumberGenerator());
  }, [choice]);
  let systemClassName = systemChoices[number]?.class;
  let className = choice.class;
  let systemSrc = systemChoices[number]?.src;
  let src = choice.src;
  console.log(className, systemClassName);
  let [output, isWinner] = determineResult(className, systemClassName);
  useEffect(() => {
    setTimeout(() => {
      updateScore(output, setScore);
    }, 0);
  }, [output]);
  console.log(output);
  return (
    <div className="gameContainer">
      <div className="yourPick">
        <p>You Picked</p>
        <div className={isWinner === 'you' ? `${className} winner signs` : `${className} signs`}>
          <img src={src} alt={`${className} image`} />
        </div>
      </div>
      <div className="result">
        <h1>{output}</h1>
        <button onClick={handleGameStart}>Play Again</button>
      </div>
      <div className="systemPick">
        <p>System Picked</p>
        <div className={isWinner === 'system' ? `${systemClassName} winner signs`:`${systemClassName} signs`}>
          <img src={systemSrc} alt={`${systemClassName} image`} />
        </div>
      </div>
    </div>
  );
};

export default GamePart;
