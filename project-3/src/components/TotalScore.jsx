import styled from "styled-components";

const TotalScore = () => {
  return (
    <ScoreContainer>
      <h1>0</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
text-align: center;

  h1 {
    font-size: 100px;
    color: #2d2d2d;
    margin: 0;
    font-weight: 800;
    line-height: 100px;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin: 0;
    letter-spacing: 1px;
    font-weight: 500;
  }
`;
