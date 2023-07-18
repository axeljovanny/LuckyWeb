import styled from "styled-components";
import { above } from "./index";
import { colors, fonts } from "../../utils/const";

export const SFooter = styled.div`
  /* Comentario en estilos */
  width: 100%; /* ancho de mi pagina    */
  height: auto;
  background-color: ${colors.black}; /* largo de mi pagina */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70% 20% 20%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  ${above.medium`
    
  `}
  ${above.large`
    width: 100%;    /* ancho de mi pagina    */ 
    height: auto;
    grid-template-columns: 35% 50% 15%;
    grid-template-rows: 85% 15%;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  `}
`;

export const SIzqFooter = styled.div`
  /* Comentario en estilos */
  width: 100%;

  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  background-color: none;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin: 15% 0% 0%;

  ${above.medium`
    
  `}
  ${above.large`
    margin: 5% 0% 0%; 

  `}
`;
export const SAnimacionLDS = styled.div`
  /* Comentario en estilos */
  width: 60%; /* ancho de mi pagina    */
  height: 60%;
  background-color: none; /* largo de mi pagina */
  display: flex;
  justify-content: center;
  align-items: center;

  ${above.medium`
    
  `}
  ${above.large`
    width: 50%;    /* ancho de mi pagina    */ 
    height: 50%; 
    background-color:none;   /* largo de mi pagina */
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const SRedesFooter = styled.div`
  /* Comentario en estilos */
  width: 60%; /* ancho de mi pagina    */
  height: 20%;
  background-color: none; /* largo de mi pagina */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12% 0 0 0;

  ${above.medium`
    
  `}
  ${above.large`
    width: 35%;        
    bottom:15%;
    right: 25%;
    margin: 6% 0 0 0;
  `}
`;

export const SDerFooter = styled.div`
  /* Comentario en estilos */
  width: 100%;
  background-color: none; /* largo de mi pagina */

  display: none;
  justify-content: center;
  align-items: center;
  ${above.medium`
    
  `}
  ${above.large`
    grid-area: 1 / 3 / 2 / 4;
    width: 100%;
    background-color:none;   /* largo de mi pagina */

    display: flex;
    justify-content: center;
    align-items: center;  
  `}
`;
export const SAnimacionFooter = styled.div`
  /* Comentario en estilos */
  width: 80%; /* ancho de mi pagina    */
  height: 80%;
  background-color: none; /* largo de mi pagina */
  display: none;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px;

  ${above.medium`
    
  `}
  ${above.large`
    width: 80%;    /* ancho de mi pagina    */ 
    height: 80%; 
    background-color:none;   /* largo de mi pagina */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 10px;
  `}
`;

export const SContenedorCentral = styled.div`
  /* Comentario en estilos */
  width: 100%;
  background-color: none;
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  //justify-content:center;
  //align-items: center;
  flex-flow: column;
  position: relative;

  ${above.medium`
    
  `}
  ${above.large`
    grid-area: 1 / 2 / 2 / 3;
    width:100%;
    background-color:none; 

    display: flex;
    //justify-content:center;
    //align-items: center;
    flex-flow: column;
    position: relative;
  `}
`;

export const STextoFrase = styled.div`
  /* Comentario en estilos */
  width: 75%;
  height: 25%; /* ancho de mi pagina    */
  //height: 30%;
  background-color: none; /* largo de mi pagina */
  display: none;
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
    font-size: 1.7em;
    /* Comentario en estilos */
    width: 75%;
    height:25%;    /* ancho de mi pagina    */ 
    //height: 30%; 
    background-color: none;   /* largo de mi pagina */
    display: flex;
    //justify-content: center;
    //align-items: center;
    //padding: 0 4%;
    position: relative;
    //left: 7%;
    //top: 10%;

  `}
`;

export const STextoDH = styled.div`
  /* Comentario en estilos */
  width: 75%;
  height: 30%; /* ancho de mi pagina    */
  //height: 30%;
  background-color: none; /* largo de mi pagina */
  display: none;
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
    /* Comentario en estilos */
    width: 75%;
    height: 30%;    /* ancho de mi pagina    */ 
    //height: 30%; 
    background-color: none;   /* largo de mi pagina */
    display: flex;
    /*
    justify-content: center;
    align-items: center;*/
    //padding: 0 4%;
    position: relative;
  `}
`;
export const STextoUbicacion = styled.div`
  /* Comentario en estilos */
  width: 75%; /* ancho de mi pagina    */
  //height: 30%;
  background-color: none; /* largo de mi pagina */
  display: none;
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
    /* Comentario en estilos */
    width: 75%;    /* ancho de mi pagina    */ 
    //height: 30%; 
    background-color: none;   /* largo de mi pagina */
    display: flex;
    //justify-content: center;
    //align-items: center;
    //padding: 0 4%;
    position: relative;
  `}
`;

export const STextoContacto = styled.div`
 /* Comentario en estilos */
  width: 100%;    /* ancho de mi pagina    */ 

  background-color: none;   /* largo de mi pagina */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //align-items: center;
  //padding: 0 4%;
  position: relative;

  p {
    font-family: ${fonts.montExtraLight};
    font-size: 1em;
    color: ${colors.white};
  }

  ${above.medium`
    
  `}
  ${above.large`
    width: 75%;
    flex-direction:row;
    justify-content: space-between;

  `}
`;

export const STextoCopy = styled.div`
width: 100%;
height: 100%;
grid-area: 3 / 1 / 4 / 2;
background-color:none; 
border-top: solid 0.1em white;
display: flex;
justify-content:center;
align-items: center;

  ${above.medium`
    
  `}
  ${above.large`
    grid-area: 2 / 1 / 3 / 4;
    width: 100%;
    justify-content:center;
    align-items: center;
  `}
`;
export const STextoDerechosAutor = styled.div`
 /* Comentario en estilos */


background-color: none;   /* largo de mi pagina */

  p {
    font-family: ${fonts.montItalic};
    font-size: 1em;
    color: ${colors.white};
  }


p{
  font-family: ${fonts.montItalic};
  font-size: 1em;
  color: ${colors.white};
}




${above.medium`
    
  `}
${above.large`
   
  `}
`;
