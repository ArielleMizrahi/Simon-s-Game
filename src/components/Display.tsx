import React from "react";

interface DisplayProps {
  currentScore: number;
  highScore: number;
}

const Display: React.FC<DisplayProps> = ({ currentScore, highScore }) => {
  return (
    <div>
      <p>Current Score: {currentScore}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
};

export default Display;
