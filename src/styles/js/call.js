import styled from "styled-components"
import { above } from './index'
import { colors, fonts, sizes } from "../../utils/const"

export const SCall = styled.div`
width: 100%;
height: 100vh; 
background-color:aqua;  
display: flex;
justify-content: center;
align-items: center;



${above.medium`
    
  `}
${above.large`

  `}
`



export const SCallFrase= styled.div`
width: 80%;
height: 60%; 
background-color:black;  
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


h1{
    font-family: ${fonts.reciaB};
    color: white;
    font-size: 4em;
    text-align: center;
    letter-spacing: 1px;
    margin: 0;
}

h3 > span {
    font-family: ${fonts.reciaB};
  font-size: 16px;
  color:red;
  

}
${above.medium`
    
  `}
${above.large`

  `}
`
