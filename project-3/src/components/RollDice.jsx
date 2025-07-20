import styled from "styled-components";

const RollDice = ({ currentDice, generateRandomDice }) => {
  return (
    <DiceContainer>
      <div onClick={generateRandomDice}>
        <img
          src={`/dice/dice_${currentDice}.png`}
          alt={`Dice ${currentDice}`}
        />
      </div>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  img {
    width: 100px;
    height: 100px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  img:hover {
    transform: scale(1.1);
  }
`;
