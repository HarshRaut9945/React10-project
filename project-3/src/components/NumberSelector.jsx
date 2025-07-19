import styled from "styled-components"

const NumberSelector = () => {

    const array= [1, 2, 3, 4, 5, 6];
  return (
    <div>
        {
 array.map((value,i) =>(
   <Box> 1 </Box>
            ))  }
   
    

    </div>
  )
}

export default NumberSelector

const Box= styled.div`
width: 40px;
height: 40px;
border: 2px solid #ddd;
display: grid;
place-items: center;
align-items: center;
justify-content: center;
margin: 4px;
border-radius: 8px;
font-size: 24px;
font-weight: 700;
cursor: pointer;
background: #fff;
transition: border 0.2s, background 0.2s;
&:hover {
    border: 2px solid #007bff;
    background: #f0f8ff;
}

`
