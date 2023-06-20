import styled from "styled-components";
import { above } from "./index";
import { colors, fonts } from "../../utils/const";
import { motion } from "framer-motion"

export const SContenedorNav = styled.div`
  /* Comentario en estilos */
  width: 100%; /* ancho de mi pagina    */
  height: 100vh; /* largo de mi pagina */
  background: ${colors.black};
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  ${above.medium`
    
  `}
  ${above.large`
    width: 60%;
  `}
`;

/* ++++++++ INICIO CONTENEDOR NAV ++++ */

export const SContenedorPrincipalNav = styled.div`
  /* Comentario en estilos */
  width: 100%; /* ancho de mi pagina    */
  height: 100%; /* largo de mi pagina */
  background: none;

  ${above.medium`
    
  `}
  ${above.large`
      width: 90%;
  `}
`;

export const SContenedorCloseYLogo = styled.div`
  /* Comentario en estilos */
  width: 90%; /* ancho de mi pagina    */
  height: 15%; /* largo de mi pagina */
  background: aqua;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10% 0 0;

  ${above.medium`
    
  `}
  ${above.large`
    
  `}
`;


export const SContenedorIdioma = styled.div`
  /* Comentario en estilos */
  display: flex;
  width: 50%; /* ancho de mi pagina    */
  height: 100%; /* largo de mi pagina */
  background: red;
  justify-content: flex-end;
  align-items: center ;
  
 
 
  p{
  color: white;
  font-family: ${fonts.reciaB};
  font-size: 25px;
  padding: 0 2%;
  letter-spacing: 1px;
  transform: translateY(-10%);
}
  

  ${above.medium`
    
  `}
  ${above.large`
    display: none;
  `}
`;




export const SContenedorContenido = styled.div`
  /* Comentario en estilos */
  width: 100%; /* ancho de mi pagina    */
  height: 60%; /* largo de mi pagina */
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    font-family: ${fonts.reciaB};
    font-size: 70px;
    margin: 3px;
    color: ${colors.white};
  }

  ${above.medium`
    
  `}
  ${above.large`
height: 45%;    
justify-content: flex-end;
  
  h1{

font-size: 60px;


}
  `}
`;

export const SContenedorRedesYSticker = styled.div`
  /* Comentario en estilos */
  width: 100%; /* ancho de mi pagina    */
  height: 25%; /* largo de mi pagina */
  background: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  ${above.medium`
    
  `}
  ${above.large`
height:25%;
width: 100%;    /* ancho de mi pagina    */ 
height: 25%;    /* largo de mi pagina */
background: none;
display: flex;
justify-content: center;
align-items: flex-end;
position: relative;

  `}
`;

export const SRedesNav = styled.div`
  /* Comentario en estilos */
  width: 50%; /* ancho de mi pagina    */
  height: 30%;
  background: none;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 30%;
  align-items: center;
  flex-direction: row;
  

  ${above.medium`
    
  `}
  ${above.large`
    
    width: 25%;   
    height: 95% ;
    position: absolute;
    left:-0;
     bottom:-20%;
     justify-content: center;
    align-items: center;
    flex-direction: column;

  
  `}
`;
export const SDerechosAutor = styled.div`
  /* Comentario en estilos */
  width: 90%; /* ancho de mi pagina    */
  height: 35%; /* largo de mi pagina */
  background: none;
  position: absolute;
  bottom: 0;

  p {
    color: white;
    font-family: ${fonts.montExtraBold};
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${above.medium`
    
    `}
  ${above.large`
  p{

  color: white;
  font-size: 20px;
  transform: translateY(-10%);
}
      
      width: 50%;   
      height: 45%;
      top: 110%;
    
    
    `}
`;

export const OverButton = styled(motion.button)`
  position: fixed;
  z-index: 13;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 70px;
  left: 40px ;

  ${above.large`
    top: 55px;
    left: 80px ;

  `}

`;

export const Overlay = styled(motion.div)`

  display: flex;
  flex-direction: column;
  height: 10%;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 12;
  background: ${colors.none};



  ${above.large` 
    
  `}
`;

export const Over = styled(motion.div)`
  flex-direction: column;
  width: 100vw;
  position: fixed;
  top:0;

  ${above.large`

  `}
`;
