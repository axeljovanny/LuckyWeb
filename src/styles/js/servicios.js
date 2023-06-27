import styled from "styled-components"
import { above } from './index'
import { colors, fonts, sizes } from "../../utils/const"


export const SContenedorInicial = styled.div`
width: 100vw;
height: 80vh; 
background-color:red;  
display: flex;
justify-content:space-around;
align-items: center;
flex-direction: column;




${above.medium`
    
  `}
${above.large`

  `}
`

export const SContenedorTitulo = styled.div`
width: 30%;
height: 16%; 
background-color:white;  
display: flex;
justify-content: center;
align-items: center;




${above.medium`
    
  `}
${above.large`

  `}
`

export const SContenedorGrid = styled.div`
width: 95%;
height: 80%; 
background-color:black;  
display: flex;
justify-content: center;
align-items: center;



${above.medium`
    
  `}
${above.large`

  `}
`