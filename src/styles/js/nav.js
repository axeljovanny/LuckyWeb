import styled from "styled-components"
import { above } from './index'
import { colors, fonts } from "../../utils/const"


export const SContenedorNav = styled.div`
 /* Comentario en estilos */
width: 100%;    /* ancho de mi pagina    */ 
height: 100vh;    /* largo de mi pagina */
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
width: 90%;    /* ancho de mi pagina    */ 
height: 15%;    /* largo de mi pagina */
background:none;
display: flex;
justify-content: flex-end;
align-items: center;
padding: 0 10% 0 0;


${above.medium`
    
  `}
${above.large`
    
  `}
`


export const SContenedorContenido = styled.div`
 /* Comentario en estilos */
width: 100%;    /* ancho de mi pagina    */ 
height: 60%;    /* largo de mi pagina */
background:none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;

h1{

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
`



export const SContenedorRedesYSticker = styled.div`
 /* Comentario en estilos */
width: 100%;    /* ancho de mi pagina    */ 
height: 25%;    /* largo de mi pagina */
background:none;
display: flex;
justify-content: center;
align-items: flex-end;
position: relative;


${above.medium`
    
  `}
${above.large`
   height:25%;
  `}
`

export const SRedesNav = styled.div`
 /* Comentario en estilos */
width: 90%;    /* ancho de mi pagina    */ 
height: 100%;    /* largo de mi pagina */
background:none;
display: flex;  // utilizar las funciones de flex
    justify-content: center;
    align-items: center;
    flex-direction: column;

${above.medium`
    
  `}
${above.large`
    
    width: 25%;   
    height: 100% ;
    position: absolute;
    left:-0;
     bottom:-20%;
  
  `}
`