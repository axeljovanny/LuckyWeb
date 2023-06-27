import styled from "styled-components"
import { above } from './index'
import { colors, fonts, sizes } from "../../utils/const"

export const SCall = styled.div`
width: 100%;
height: 80vh; 
background-color:${colors.white};  
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
background-color:none;  
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;



h1{
    font-family: ${fonts.reciaB};
    color: ${colors.black};
    font-size: 4em;
    text-align: center;
    letter-spacing: 1px;
    margin: 0 0 2%;

}


h3 > span {
  color: ${colors.black};
  font-family: ${fonts.reciaB};
  font-size: 1.5em;
  
}

${above.medium`
    
  `}
${above.large`

 h1{
    
    font-size: 4em;
    
    letter-spacing: 1px;
    padding: 0  10% ;
    margin: 0 0 2%;

}

  `}
`
export const SCallButtom = styled.div`
width: 60%;
height: 8%; 
background-color:none;  
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
border: 1px solid ${colors.black};

a {
  color: ${colors.black};
  font-family: ${fonts.montBlack};
  font-size: 1em;
  
}


${above.medium`
    
  `}
${above.large`
width: 20%;
height: 8%; 
  `}
`