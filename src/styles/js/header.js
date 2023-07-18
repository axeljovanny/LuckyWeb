import styled from "styled-components"
import { above } from './index'
import { motion } from "framer-motion"
import { colors, fonts, sizes } from "../../utils/const"


/*
Nomenclatura de Estilos:
"S" = Estilos = "SButton"
"I" = Imagenes = "ILogo"
"C" = Componentes = "CHeader"
*/



export const SContenedorPrincipal = styled.div`
 /* Comentario en estilos */
width: 100vw;    /* ancho de mi pagina    */ 
height: auto;    /* largo de mi pagina */

${above.medium`
    
  `}
${above.large`
    
  `}
`





/* -----------INICIO SECCION HEADER ---------------- */

export const SHeader = styled.div`
 /* Comentario en estilos */
  position: relative;
  width: 100vw;
  height: 100vh;
  background: none;
  display: flex;  // utilizar las funciones de flex
  justify-content: center; // centrar contenido
  align-items: center; // alinear el contenido
  flex-flow: row wrap; // utilizar filas y columnas y saltar de linea si no cabe 
  overflow: hidden;

`


/*+++ INICIA SECCION NAV +++*/

export const SNav = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina  
height: 20%;    // largo de mi pagina
display: flex;  // utilizar las funciones de flex
justify-content: flex-end;
align-items: center;
`

export const SLogo = styled.div`
display: none;

${above.large`
    width: 70%; 
    height: 100%; 
    background: none;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: row;
  `}

`

export const SIdioma = styled.div`
 /* Comentario en estilos */

width: 50%;    // ancho de mi pagina  
height: 100%;    // largo de mi pagina
background: none;  /* color de fondo*/
display: flex;  // utilizar las funciones de flex
justify-content:center;
align-items:center ;
flex-direction: row;
position: relative;
font-family: ${fonts.reciaB};
font-size: 33px;

a {
  background-color: none;
  margin: 3%;
  font-family: ${fonts.reciaB};
  color: ${colors.black};
  font-size: 25px;
}


${above.large`
    width: 15%;    // ancho de mi pagina  
    padding: 0;
    justify-content: flex-start;
    transform: translateY(-3%);
    font-size: 30px;
   
  a{
    margin: 3%;
    font-size: 25px;
    color: ${colors.black};

  }
  
  `}

`
export const Item = styled.li`
  font-family: Montserrat;
  font-size: .7em;
  :hover {
    text-decoration: underline;
  }
`;

export const SNavButton = styled.div`
width: 50%;    // ancho de mi pagina  
height: 100%;    // largo de mi pagina
background: none;  /* color de fondo*/
display: flex;  // utilizar las funciones de flex
justify-content:flex-start;
padding: 10%;
align-items:center ;

${above.large`
    width: 15%;
    padding: 0;
    justify-content:center;

  `}

`





/*+++ INICIA SECCION BANER +++*/

export const SContenido = styled.div`
width: 100%;    // ancho de mi pagina  
height: 80%;    // largo de mi pagina
display: flex;  // utilizar las funciones de flex: ;
flex-flow: column-reverse wrap ;

${above.large`
    background: none;  /* color de fondo*/
    flex-flow: column wrap ;
    justify-content: space-around;
    align-items:center;
  `}

`
export const SInicioYServicios = styled (motion.div)`
 /* Comentario en estilos */
  width: 100%;    // ancho de mi pagina  
  height: 80%;    // largo de mi pagina
  background: none;  /* color de fondo*/
  display: flex;  // utilizar las funciones de flex: ;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
${above.large`
    width: 70%;    // ancho de mi pagina    
    height: 100%;  
    position: relative; 
  `}
`

export const STextoServiciosHome = styled.div`
width: 100%;    // an:cho de mi pagina    
height: 25%;    // largo de mi pagina
background: none; //color de fondo
display: flex;  // utilizar las funciones de flex
flex-wrap: wrap;
justify-content: center;
align-items: center;
position: relative;
bottom:25%;
p{
  color: ${colors.black};
  font-family: ${fonts.montExtraBold};
  font-size: 10px;
  word-spacing: 5px;
}

${above.large`
width: 100%;   
height: 10%; 
background:none;

bottom:0;

  p{
  font-size: 13px;
    }
   
  `}
`




/*+++ INICIA SECCION HEADER IZQUIERDA+++*/

export const SHeaderIzquierda = styled.div`
 /* Comentario en estilos */
width: 100%;    // ancho de mi pagina    
height: 20%;    // largo de mi pagina
background: none; //color de fondo
display: flex;  // utilizar las funciones de flex
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
position: relative;

${above.large`
    width: 15%;    // ancho de mi pagina    
    height: 100%;  
    justify-content: center;
    
  `}
`


export const SAnimacionHomeIzq = styled(motion.div)`
 /* Comentario en estilos */

width: 40%;    // ancho de mi pagina    
height: 100%;    // largo de mi pagina
background: none;  // utilizar las funciones de flex
justify-content: center;
align-items: center;
border: 1px solid none;
position: absolute;
left: -10%;
bottom: 0%;
transform: scale(1.2);
transform: translateY(-10%);


${above.large`
    width: 90%;    // ancho de mi pagina    
    height: 40%; 
    position: static;
    transform: scale(1.3);
  `}
`

export const SRedes = styled (motion.div)`
display: none;  // se oculta

${above.large`
    width: 22%;    // ancho de mi pagina    
    height: 30%;    // largo de mi pagina
    background: none; //color de fondo
    display: flex;  // utilizar las funciones de flex
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    a {
      height: width;  
      margin:0;
      padding:10%;
    }
    
  `}


`



/*+++ INICIA SECCION HEADER DERECHA+++*/

export const SHeaderDerecha = styled.div`
position: relative;

display: none;  // utilizar las funciones de flex

${above.large`
    width: 15%;    // ancho de mi pagina    
    height: 100%;    // largo de mi pagina
    background: none; //color de fondo
    display: flex;  // utilizar las funciones de flex
    justify-content: flex-end;
    align-items: flex-end;
    background: none;
  `}

`
export const SAnimacionHomeDer = styled (motion.div)`
    width: 90%;    // ancho de mi pagina    
    height: 30%;    // largo de mi pagina
    background: none ; //color de fondo
    display: flex;  // utilizar las funciones de flex
    justify-content: center;
    align-items: center;
    border: none;// utilizar las funciones de flex
    transform: scale(1.3);
    position: absolute;
    top: 77%;
    left: 25%;

    
`

export const STextoInicio = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 75%;    // largo de mi pagina
background-color:none;
display:${props => props.movil ? "none" : "flex"};
flex-direction:column;
justify-content:center;
align-items: center;
text-align: center;
position: relative;
padding:15% 10% ;
color: ${colors.black};


h1{
  font-family: ${fonts.reciaB};
    background:none;
    font-size: 1.8em;
    text-align: center;
    line-height: 1.6em;
    letter-spacing: 1px;
    padding: 0 10%;
    
    
}

h1 > span {
  
  font-size: 2em;
  background:none;
  margin: 0;

}

.Es{

font-size: 1.3em;
vertical-align: super;

}
.web{display:none;}
.movil{display:static;}




${above.large`
width: 100%;      
height: 80%;
background:none;
padding: 0 18%  0 ;
text-align:center;


h1{
  font-family: ${fonts.reciaB};
    background:none;
    font-size: ${sizes.textoTitulo};
    text-align: center;
    padding: 1%;
}
.Es{
font-size: 1.3em;
vertical-align: center;
}
.movil{display:static;}
`}

${above.xlarge`
height: 80%;
background-color:none;
padding: 0 20%  0 ;

h1{
    letter-spacing: 5px;
    font-size: 4em;
    padding:0;
   
}

`}

`



