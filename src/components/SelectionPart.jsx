import { useContext } from "react";
import gameContext from "../context/GameContext";

const SelectionPart = () => {
  const { gameStart,makeChoice, handleGameStart } =
    useContext(gameContext);

  const handleClick = (value)=> {
    handleGameStart();
    makeChoice(value);
  }

  if (gameStart) {
    return;
  }
  return (
    <article className="selectorContainer">
      <div className="triangle">
        <img src="./images/bg-triangle.svg" alt="triangle-img" />
        <div className="paper signs" onClick={()=>handleClick({class:'gamePaper', src:'./images/icon-paper.svg'})} >
          <img src="./images/icon-paper.svg" alt="paper" />
        </div>
        <div className="scissors signs" onClick={()=>handleClick({class:'gameScissors', src:'./images/icon-scissors.svg'})}>
          <img src="./images/icon-scissors.svg" alt="scissors" />
        </div>
        <div className="rock signs" onClick={()=>handleClick({class:'gameRock', src:'./images/icon-rock.svg'})}>
          <img src="./images/icon-rock.svg" alt="rock" />
        </div>
      </div>
    </article>
  );
};

export default SelectionPart;
