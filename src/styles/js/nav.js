import styled from "styled-components"
import { above } from './index'
import { colors, fonts } from "../../utils/const"
import { motion } from "framer-motion"

export const SContenedorNav = styled.div`
 /* Comentario en estilos */
width: 55vw;    /* ancho de mi pagina    */ 
height: 100vh;    /* largo de mi pagina */
background: ${colors.black};
position: absolute;
top: 0;
left: 0;
z-index: 1;

${above.medium`
    
  `}
${above.large`
    
  `}
`;

export const OverButton = styled(motion.button)`
  position: fixed;
  z-index: 13;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;

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



  ${above.large` {
    display: none;
    }
  `}
`;

export const Over = styled(motion.div)`
  flex-direction: column;
  width: 100vw;
  position: fixed;
  top:0;

  ${above.large` {
    display: none;
    }
  `}
`;
