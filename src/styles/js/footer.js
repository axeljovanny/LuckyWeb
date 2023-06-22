import styled from "styled-components"
import { above } from './index'
import { colors, fonts, sizes } from "../../utils/const"

export const SFooter = styled.div`
 /* Comentario en estilos */
width: 100%;    /* ancho de mi pagina    */ 
height: 60vh; 
background-color:black;   /* largo de mi pagina */
display: grid;
grid-template-columns: 35% 50% 15%;
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
 width: 100%;
grid-area: 1 / 1 / 2 / 2;
display: flex;
background-color:none;  
justify-content: flex-end;
align-items: center;
flex-flow: column;
position: relative;

${above.medium`
    
  `}
${above.large`
    
  `}
`
export const SAnimacionLDS = styled.div`
 /* Comentario en estilos */
width: 50%;    /* ancho de mi pagina    */ 
height: 50%; 
background-color:none;   /* largo de mi pagina */
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 17%;





${above.medium`
    
  `}
${above.large`
    
  `}
`

export const SRedesFooter = styled.div`
 /* Comentario en estilos */
width: 50%;    /* ancho de mi pagina    */ 
height: 20%; 
background-color:red;   /* largo de mi pagina */
display: flex;
justify-content: center;
align-items: center;
position: absolute;
bottom:15%;
right: 25%;


${above.medium`
    
  `}
${above.large`
    
  `}
`

export const SDerFooter = styled.div`
 /* Comentario en estilos */
width: 100%;
background-color:none;   /* largo de mi pagina */
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
background-color:none;   /* largo de mi pagina */
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
  width:100%;
  background-color:none; 
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  //justify-content:center;
  //align-items: center;
  flex-flow: column;
  position: relative;

${above.medium`
    
  `}
${above.large`
    
  `}
`

export const STextoFrase = styled.div`
 /* Comentario en estilos */
  width: 75%;    /* ancho de mi pagina    */ 
  //height: 30%; 
  background-color: none;   /* largo de mi pagina */
  display: flex;
  //justify-content: center;
  //align-items: center;
  //padding: 0 4%;
  position: relative;
  //left: 7%;
  //top: 10%;


  font-family: ${fonts.reciaB};
  color: ${colors.white};

${above.medium`
    font-size: 2em;
  `}
${above.large`
    font-size: 3em;
  `}
`

export const STextoDH = styled.div`
 /* Comentario en estilos */
 width: 75%;    /* ancho de mi pagina    */ 
//height: 30%; 
background-color: none;   /* largo de mi pagina */
display: flex;
/*
justify-content: center;
align-items: center;*/
//padding: 0 4%;
position: relative;


font-family: ${fonts.handOfSean};
color: ${colors.white};


${above.medium`
    font-size: 1.5em;
  `}
${above.large`
    font-size: 2em;
  `}
`
export const STextoUbicacion = styled.div`
 /* Comentario en estilos */
 width: 75%;    /* ancho de mi pagina    */ 
//height: 30%; 
background-color: none;   /* largo de mi pagina */
display: flex;
//justify-content: center;
//align-items: center;
//padding: 0 4%;
position: relative;

font-family: ${fonts.montExtraLight};
color: ${colors.white};

${above.medium`
    font-size: .6em;
  `}
${above.large`
    font-size: 1em;
  `}
`

export const STextoContacto = styled.div`
 /* Comentario en estilos */
  width: 75%;    /* ancho de mi pagina    */ 
  //height: 30%; 
  background-color: none;   /* largo de mi pagina */
  display: flex;
  justify-content: space-between;
  //align-items: center;
  //padding: 0 4%;
  position: relative;

p{
  font-family: ${fonts.montExtraLight};
  font-size: 1em;
  color: ${colors.white};
}

${above.medium`
    
  `}
${above.large`
    
  `}
`

export const STextoCopy = styled.div`
width: 100%;
background-color: black; 
border-top: solid 0.1em white;
grid-area: 2 / 1 / 3 / 4;
display: flex;
justify-content:flex-end;
align-items: center;
position: relative;
${above.medium`
    
  `}
${above.large`
    
  `}
`
export const STextoDerechosAutor = styled.div`
 /* Comentario en estilos */
width: 30%;    /* ancho de mi pagina    */ 
height: 80%; 
background-color: black;   /* largo de mi pagina */
display: flex;
justify-content: center;
align-items: center;
position: absolute;
right: 33%;

p{
  font-family: ${fonts.montItalic};
  font-size: 1em;
  color: ${colors.white};
}




${above.medium`
    
  `}
${above.large`
    
  `}
`