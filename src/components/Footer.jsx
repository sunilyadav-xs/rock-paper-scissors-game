import { useState } from "react";
import "./rules.css";

const Footer = () => {
  const [showRules, setShowRules] = useState(false);
  const handleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <footer>
      <div className="rules">
        <button onClick={handleRules}>Rules</button>
      </div>
      {showRules && (
        <div className="modal" onClick={handleRules}>
          <span className="close" onClick={handleRules} >&times;</span>
          <img
            className="modal-content"
            src="./images/image-rules.svg"
            alt="rules-image"
          />
        </div>
      )}
    </footer>
  );
};

export default Footer;
