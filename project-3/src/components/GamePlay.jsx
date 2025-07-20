import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import { useState } from "react";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomDice = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(random);
    console.log("Rolled Dice:", random);

    // Optional score logic
    if (selectedNumber === random) {
      setScore(prev => prev + random);
    }
  };

  return (
    <main>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice
        currentDice={currentDice}
        generateRandomDice={generateRandomDice}
      />
    </main>
  );
};

export default GamePlay;
