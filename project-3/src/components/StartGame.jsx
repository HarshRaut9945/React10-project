import styled from 'styled-components';


const StartGame = () => {
  return <Container>
   <img src="/public/dices.png" alt="" />

   <div className='content'>
    <h1>Dice GAme</h1>
    <Button>Play Now</Button>
   </div>

  </Container>
}

export default StartGame;

const Container=styled.div`
  max-width: 1180px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 40px;

  img {
    width: 250px;
    height: auto;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #333;
    letter-spacing: 2px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4f8cff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #2563eb;
  }

  `;

