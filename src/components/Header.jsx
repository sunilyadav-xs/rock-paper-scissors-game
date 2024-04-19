import { useContext} from "react";
import gameContext from "../context/GameContext";

const Header = () => {
  const { score } =
    useContext(gameContext);
  return (
    <header className="header">
      <div className="name">
      <img src="./images/logo.svg" alt="logo-img" />
      </div>
      <div className="score">
        <p>Score</p>
        <span>{score}</span>
      </div>
    </header>
  )
}

export default Header
