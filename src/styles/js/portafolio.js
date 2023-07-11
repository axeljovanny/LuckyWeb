import styled from "styled-components"
import { above } from './index'
import { colors } from "../../utils/const"


export const SPortafolio = styled.div`
width: 100vw;
height: 100vh; 
background-color:${colors.white};  
display: flex;
justify-content: center;
align-items: center;



${above.medium`
    
  `}
${above.large`

  `}
`
