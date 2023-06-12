import styled from "styled-components"
import { above } from './index'
import { colors, fonts } from "../../utils/const"

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
padding: 10%;
justify-content:center;
align-items:center ;
flex-direction: row;
position: relative;

a {
  background-color: none;
  margin: 5%;
  font-family: ${fonts.reciaB};
    font-size: 20px;
}

p{
  font-family: ${fonts.montExtraBold};
  font-size: 20px;
  transform: translateY(-10%);
}

${above.large`
    width: 15%;    // ancho de mi pagina  
    padding: 0;
    justify-content: flex-start;
   
  a{
  margin: 3%;
  font-size: 20px;
  }

  p{
  transform: translateY(-10%);
}
  `}

`

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
export const SInicioYServicios = styled.div`
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
    
  `}
`



export const STextoServiciosHome = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 25%;    // largo de mi pagina
background: none; //color de fondo
display: flex;  // utilizar las funciones de flex
flex-wrap: wrap;
justify-content: center;
align-items: center;
position: relative;

p{

  font-family: ${fonts.montExtraBold};
font-size: 10px;


}

${above.large`
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


export const SAnimacionHomeIzq = styled.div`
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

export const SRedes = styled.div`
display: none;  // se oculta

${above.large`
    width: 15%;    // ancho de mi pagina    
    height: 25%;    // largo de mi pagina
    background: none; //color de fondo
    display: flex;  // utilizar las funciones de flex
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(-15%);

    div{
    margin: 2px 0px;
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
export const SAnimacionHomeDer = styled.div`
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





/* -----------FIN SECCION HEADER ---------------- */

export const SAbout = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 50vh;    // largo de mi pagina
background: gray; //color de fondo
display: flex;  // utilizar las funciones de flex
justify-content: center;
align-items: center;

`


export const SPortafolio = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 100vh;    // largo de mi pagina
background: none; //color de fondo
display: flex;  // utilizar las funciones de flex
justify-content: center;
align-items: center;

`


export const SServicios = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 100vh;    // largo de mi pagina
background: green; //color de fondo
display: flex;  // utilizar las funciones de flex
justify-content: center;
align-items: center;

`

export const STeam = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 100vh;    // largo de mi pagina
background: purple; //color de fondo
display: flex;  // utilizar las funciones de flex
justify-content: center;
align-items: center;

`

export const SFooter = styled.div`
 /* Comentario en estilos */

width: 100%;    // ancho de mi pagina    
height: 60vh;    // largo de mi pagina
background: maroon; //color de fondo
display: flex;  // utilizar las funciones de flex
justify-content: center;
align-items: center;

`



