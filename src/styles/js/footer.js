import styled from "styled-components"
import { above } from './index'
import { colors, fonts, sizes } from "../../utils/const"

export const SFooter = styled.div`
 /* Comentario en estilos */
width: 100%;    /* ancho de mi pagina    */ 
height: 60vh; 
background-color:red;   /* largo de mi pagina */
display: flex;
justify-content: space-between;
align-items:center;
${above.medium`
    
  `}
${above.large`
    
  `}
`

export const SIzqFooter = styled.div`
 /* Comentario en estilos */
width: 25%;    /* ancho de mi pagina    */ 
height: 80%; 
background-color:aqua;   /* largo de mi pagina */
display: flex;
justify-content: center;
align-items: center;
${above.medium`
    
  `}
${above.large`
    
  `}
`

export const SDerFooter = styled.div`
 /* Comentario en estilos */
width: 25%;    /* ancho de mi pagina    */ 
height: 80%; 
background-color:aqua;   /* largo de mi pagina */
display: flex;
justify-content: center;
align-items: center;
${above.medium`
    
  `}
${above.large`
    
  `}
`

export const SContenedorCentral = styled.div`
 /* Comentario en estilos */
width: 50%;    /* ancho de mi pagina    */ 
height: 100%; 
background-color:green;   /* largo de mi pagina */
display: flex;
justify-content:end;
align-items:  center
${above.medium`
    
  `}
${above.large`
    
  `}
`