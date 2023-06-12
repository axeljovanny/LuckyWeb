import styled from "styled-components"
import { above } from './index'
import { colors, fonts } from "../../utils/const"


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
`