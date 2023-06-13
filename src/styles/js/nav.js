import styled from "styled-components"
import { above } from './index'
import { colors, fonts } from "../../utils/const"


export const SContenedorNav = styled.div`
 /* Comentario en estilos */
width: 50%;    /* ancho de mi pagina    */ 
height: 100%;    /* largo de mi pagina */
background: ${colors.black};
display: flex;
position: absolute;
top: 0;
left: 0;
z-index: 1;



${above.medium`
    
  `}
${above.large`
    width: 50%;
  `}
`

/* ++++++++ INICIO CONTENEDOR NAV ++++ */

export const SContenedorPrincipalNav = styled.div`
 /* Comentario en estilos */
width: 100%;    /* ancho de mi pagina    */ 
height: 100%;    /* largo de mi pagina */
background: none;


${above.medium`
    
  `}
${above.large`
    
  `}
`




export const SContenedorCloseYLogo = styled.div`
 /* Comentario en estilos */
width: 100%;    /* ancho de mi pagina    */ 
height: 25%;    /* largo de mi pagina */
background:aqua;


${above.medium`
    
  `}
${above.large`
    
  `}
`


export const SContenedorContenido = styled.div`
 /* Comentario en estilos */
width: 100%;    /* ancho de mi pagina    */ 
height: 50%;    /* largo de mi pagina */
background:green;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


${above.medium`
    
  `}
${above.large`
    
  `}
`


export const SContenedorRedesYSticker = styled.div`
 /* Comentario en estilos */
width: 100%;    /* ancho de mi pagina    */ 
height: 25%;    /* largo de mi pagina */
background:aqua;
display: flex;
justify-content: center;
align-items: flex-end;
position: relative;


${above.medium`
    
  `}
${above.large`
    
  `}
`

export const SRedesNav = styled.div`
 /* Comentario en estilos */
width: 90%;    /* ancho de mi pagina    */ 
height: 60%;    /* largo de mi pagina */
background:yellow;


${above.medium`
    
  `}
${above.large`
    
    width: 25%;   
    height: 100%;
    position: absolute;
    left:-0;
    
  
  `}
`