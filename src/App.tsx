import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import Message from "./components/Message";

const colors = ["red", "green", "yellow", "blue"];

const App: React.FC = () => {
  // State to keep track of the current score
  const [currentScore, setCurrentScore] = useState(0);
  // State to keep track of the highest score
  const [highScore, setHighScore] = useState(0);
  // State to keep track of the game buttons in the current round
  const [gameButtons, setGameButtons] = useState<number[]>([]);
  // State to keep track of the current round
  const [round, setRound] = useState(0);
  // State to keep track of the current game status (message to show to the player)
  const [gameStatus, setGameStatus] = useState("Click on a button to start");
  // State to keep track of the player's turn (true if it's the player's turn, false otherwise)
  const [playerTurn, setPlayerTurn] = useState(false);
  // State to keep track of the player's current pick (index of the button picked)
  const [playerPick, setPlayerPick] = useState(-1);

  // Effect to update the high score whenever the current score changes
  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }, [currentScore]);

  // Function to handle a button click by the player
  const handleButtonClick = (index: number) => {
    // Check if it's the player's turn
    if (playerTurn) {
      // Check if the player's pick is correct
      if (gameButtons[playerPick] === index) {
        setPlayerPick(playerPick + 1);
        // Check if the player has completed the current round
        if (playerPick + 1 === gameButtons.length) {
          setCurrentScore(currentScore + 1);
          setRound(round + 1);
          setPlayerTurn(false);
          setGameStatus("Watch and remember!");
          setTimeout(() => {
            setGameButtons([...gameButtons, Math.floor(Math.random() * 4)]);
            setGameStatus("Your turn!");
            setPlayerTurn(true);
            setPlayerPick(0);
          }, 1000);
        }
      } else {
        // The player's pick is incorrect, reset the game
        setCurrentScore(0);
        setRound(0);
        setGameButtons([]);
        setGameStatus("Incorrect, click on a button to start again");
        setPlayerTurn(false);
        setPlayerPick(-1);
      }
    } else {
      // It's not the player's turn, start the game
      setRound(1);
      setGameButtons([Math.floor(Math.random() * 4)]);
      setGameStatus("Watch and remember!");
      setTimeout(() => {
        setGameStatus("Your turn!");
        setPlayerTurn(true);
        setPlayerPick(0);
      }, 1000);
    }
  };
  
  return (
  <div className="App">
    <Display currentScore={currentScore} highScore={highScore} />
    <Message message={gameStatus} />
    <div className="buttons-container">
      {colors.map((color, index) => (
      <Button
      key={index}
      color={color}
      handleClick={() => handleButtonClick(index)}
      />
      ))}
      </div>
      </div>
      );
    };
    
    
    export default App;
