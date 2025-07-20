import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  text-align: center;

  h1 {
    font-size: 4rem;
    color: #2d2d2d;
    margin: 0;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin: 0;
    letter-spacing: 1px;
    font-weight: 500;
  }
`;
