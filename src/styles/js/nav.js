import styled from "styled-components";
import { above } from "./index";
import { colors, fonts } from "../../utils/const";
import { motion } from "framer-motion";

//TODO BLUREAR
export const SBlur = styled.div`
  /* Comentario en estilos */
  height: 100%; /* largo de mi pagina */
  background: rgba(0, 0, 0, 0.65);
  //-webkit-backdrop-filter: blur(5px);
  //backdrop-filter: blur(5px);
  display: none;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10% 0 0;

  ${above.medium`
    width: 20%;
    display: flex;
  `}
  ${above.large`
    width: 40%;
    display: flex;
  `}
`;
//
export const SContenedorNav = styled.div`
  /* Comentario en estilos */
  width: 100%; /* ancho de mi pagina    */
  height: 100vh; /* largo de mi pagina */
  //background: ${colors.blur};
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;

  ${above.medium`
    
  `}
  ${above.large`
    width: 100%;
  `}
`;

/* ++++++++ INICIO CONTENEDOR NAV ++++ */

export const SContenedorPrincipalNav = styled.div`
  /* Comentario en estilos */
  width: 100%;
  height: 100%; /* largo de mi pagina */
  background: ${colors.black};
  overflow: hidden;

  ${above.medium`
      width: 80%;
  `}
  ${above.large`
      width: 60%;
  `}
`;

export const SContenedorCloseYLogo = styled.div`
  /* Comentario en estilos */
  width: 96%; /* ancho de mi pagina    */
  height: 15%; /* largo de mi pagina */
  background: none;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 10% 0 0;
  svg {
    display: none;
  }

  ${above.medium`
  svg { display:flex }

  `}
  ${above.large`
    padding: 0 4% 0 0;
  `}
`;

export const SContenedorIdioma = styled.div`
  /* Comentario en estilos */
  display: flex;
  width: 50%; /* ancho de mi pagina    */
  height: 100%; /* largo de mi pagina */
  background: none;
  justify-content: flex-end;
  align-items: flex-end;

  a,
  p {
    margin: 1%;
    font-family: ${fonts.reciaB};
    color: ${colors.white};
    font-size: 25px;
    transform: translateY(-10%);
  }

  ${above.medium`
    
  `}
  ${above.large`

  `}
`;

export const SContenedorContenido = styled.div`
  /* Comentario en estilos */
  width: 100%; /* ancho de mi pagina    */
  height: 55%; /* largo de mi pagina */
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .menuDisabled {
    color: #525151;
    text-decoration: line-through;
  }

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

width: 100%;    /* ancho de mi pagina    */ 
height: 25%;    /* largo de mi pagina */
background: none;
display: flex;
justify-content: flex-start;
align-items: flex-end;


  `}
`;

export const SRedesNav = styled.div`
  /* Comentario en estilos */
  width: 50%; /* ancho de mi pagina    */
  height: auto;
  background: none;
  display: flex;
  justify-content: center;

  align-items: center;
  flex-direction: row;

  ${above.medium`
    
  `}
  ${above.large`
    
    width: 30%;   
    height: 70% ;
  
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

  
  `}
`;
export const SDerechosAutor = styled.div`
  /* Comentario en estilos */
  width: 100%;
  height: auto;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: ${colors.white};
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
  font-size: 13px;
  
}
      
      width: 100%;   
      height: auto;
      
    
    
    `}
`;

export const OverButton = styled(motion.button)`
  position: fixed;
  z-index: 13;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50px;
  left: 30px;
  background: ${(props) => (props.isOpen ? "#706d68a3" : "#bbb3a685")};
  padding: 10px;
  border-radius: 50%;

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
  top: 0;

  ${above.large`

  `}
`;
