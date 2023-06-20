import styled from "styled-components"
import { above } from './index'
import { colors, fonts, sizes } from "../../utils/const"

export const SFooter = styled.div`
 /* Comentario en estilos */
width: 100%;    /* ancho de mi pagina    */ 
height: 60vh; 
background-color:none;   /* largo de mi pagina */
display: grid;
grid-template-columns: 25% 50% 25%;
grid-template-rows: 85% 15%;
grid-column-gap: 0px;
grid-row-gap: 0px;


${above.medium`
    
  `}
${above.large`
    
  `}
`


export const SIzqFooter = styled.div`
 /* Comentario en estilos */
 
grid-area: 1 / 1 / 2 / 2;
display: flex;
background-color:yellow;  
justify-content: center;
align-items: center;
flex-flow: column;


${above.medium`
    
  `}
${above.large`
    
  `}
`
export const SAnimacionLDS = styled.div`
 /* Comentario en estilos */
width: 90%;    /* ancho de mi pagina    */ 
height: 70%; 
background-color:black;   /* largo de mi pagina */
display: flex;
justify-content: center;
align-items: center;
margin: 0 0 10px;



${above.medium`
    
  `}
${above.large`
    
  `}
`

export const SRedesFooter = styled.div`
 /* Comentario en estilos */
width: 90%;    /* ancho de mi pagina    */ 
height: 20%; 
background-color:black;   /* largo de mi pagina */
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

background-color:yellow;   /* largo de mi pagina */
grid-area: 1 / 3 / 2 / 4;
display: flex;
justify-content: center;
align-items: center;
${above.medium`
    
  `}
${above.large`
    
  `}
`
export const SAnimacionFooter = styled.div`
 /* Comentario en estilos */
width: 80%;    /* ancho de mi pagina    */ 
height: 80%; 
background-color:black;   /* largo de mi pagina */
display: flex;
justify-content: center;
align-items: center;
margin: 0 0 10px;



${above.medium`
    
  `}
${above.large`
    
  `}
`

export const SContenedorCentral = styled.div`
 /* Comentario en estilos */
 width:60vw;
background-color:green; 
grid-area: 1 / 2 / 2 / 3;
display: flex;
justify-content:center;
align-items: flex-start;
flex-flow: column;

${above.medium`
    
  `}
${above.large`
    
  `}
`
export const STextoFrase = styled.div`
 /* Comentario en estilos */
width: 80%;    /* ancho de mi pagina    */ 
height: 30%; 
background-color:black;   /* largo de mi pagina */
display: flex;
justify-content: center;
align-items: center;
padding: 0 10%;
margin: 0 0 10px;




${above.medium`
    
  `}
${above.large`
    
  `}
`
export const STextoUbicacion = styled.div`
 /* Comentario en estilos */
width: 80%;    /* ancho de mi pagina    */ 
height: 60%; 
background-color:black;   /* largo de mi pagina */
display: flex;
justify-content: center;
align-items: center;
padding: 0 10%;



${above.medium`
    
  `}
${above.large`
    
  `}
`
export const STextoCopy = styled.div`
 /* Comentario en estilos */

background-color:aqua;   /* largo de mi pagina */
grid-area: 2 / 1 / 3 / 4;
display: flex;
justify-content:center;
align-items:  center
${above.medium`
    
  `}
${above.large`
    
  `}
`
export const STextoDerechosAutor = styled.div`
 /* Comentario en estilos */
width: 90%;    /* ancho de mi pagina    */ 
height: 90%; 
background-color:black;   /* largo de mi pagina */
display: flex;
justify-content: center;
align-items: center;


${above.medium`
    
  `}
${above.large`
    
  `}
`