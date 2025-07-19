import { useState } from "react";
import styled from "styled-components";

const NumberSelector = () => {
  const array = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState(null);

  return (
    <NumberSelectorContainer >
      {array.map((value, i) => (
        <Box
          key={i}
          isSelected={selectedNumber === value}
          onClick={() => setSelectedNumber(value)}
        >
          {value}
        </Box>
      ))}
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px;
`;

const NumberSelectorContainer = styled.div`

display: flex;
gap: 16px;
justify-content: center;
align-items: center;
margin: 32px 0;
`

const Box = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #ccc;
  display: grid;
  place-items: center;
  border-radius: 10px;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${props => (props.isSelected ? "#000" : "#fff")};
  color: ${props => (props.isSelected ? "#fff" : "#000")};
  transition: all 0.3s ease;

  &:hover {
    border-color: #007bff;
    background-color: #e6f0ff;
  }
`;
