import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, fonts, sizes } from "../../utils/const";
import { above } from ".";

/*
Nomenclatura de Estilos:
"S" = Estilos = "SButton"
"I" = Imagenes = "ILogo"
"C" = Componentes = "CHeader"
*/

export const SContenedorPrincipal = styled.div`
  /* Comentario en estilos */
  width: 100vw; /* ancho de mi pagina */
  height: auto; /* largo de mi pagina */
`;

/* -----------INICIO SECCION HEADER ---------------- */

export const SHeader = styled.div`
  /* Comentario en estilos */
  position: relative;
  width: 100vw;
  height: 100vh;
  background: none;
  display: flex; /* utilizar las funciones de flex */
  justify-content: center; /* centrar contenido */
  align-items: center; /* alinear el contenido */
  flex-flow: column wrap; /* utilizar filas y columnas y saltar de linea si no cabe */
  overflow: hidden;

  @media (max-width: ${above.large}px) {
    /* Estilos para dispositivos móviles en modo paisaje */
    justify-content: space-around;
  }
`;

/*+++ INICIA SECCION NAV +++*/

export const SNav = styled.div`
  /* Comentario en estilos */
  display: none; /* utilizar las funciones de flex */

  ${above.large`
    display: flex; /* utilizar las funciones de flex */
    width: 100%; /* ancho de mi pagina */
    height: 20%; /* largo de mi pagina */
    align-items: center;
    justify-content: center;`}
 
`;

export const SLogo = styled.div`
  display: none;

  ${above.large`
    width: 70%;
    height: 100%;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `}
`;

export const SStickers = styled.div`
   position:absolute;
   top: 0;
   z-index: 9;
   width: 100vw;
   height: 100vh;

  ${above.large`
    background: none;
  `}
`;

export const SIdioma = styled.div`
  /* Comentario en estilos */

  width: 50%; /* ancho de mi pagina */
  height: 100%; /* largo de mi pagina */
  background: none; /* color de fondo */
  display: flex; /* utilizar las funciones de flex */
  justify-content: center;
  align-items: center;
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
    width: 15%;
    padding: 0;
    justify-content: flex-start;
    transform: translateY(-3%);
    font-size: 30px;

    a {
      margin: 3%;
      font-size: 25px;
      color: ${colors.black};
    }
  `}
`;

export const Item = styled.li`
  font-family: Montserrat;
  font-size: 0.7em;
  :hover {
    text-decoration: underline;
  }
`;

export const SNavButton = styled.div`
  width: 50%; /* ancho de mi pagina */
  height: 100%; /* largo de mi pagina */
  background: none; /* color de fondo */
  display: flex; /* utilizar las funciones de flex */
  justify-content: flex-start;
  padding: 10%;
  align-items: center;

  ${above.large`
    width: 15%;
    padding: 0;
    justify-content: center;
  `}
`;

/*+++ INICIA SECCION BANER +++*/

export const SContenido = styled.div`
  width: 100%; /* ancho de mi pagina */
  display: flex; /* utilizar las funciones de flex: ; */
  flex-flow: column-reverse wrap;
  background: none; /* color de fondo */


  ${above.large`
    height: 80%; /* largo de mi pagina */
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: flex-start;
  `}
`;

export const SInicioYServicios = styled(motion.div)`
  /* Comentario en estilos */
  width: 100%; /* ancho de mi pagina */
  height: auto; /* largo de mi pagina */
  background: none; /* color de fondo */
  display: flex; /* utilizar las funciones de flex: ; */
  flex-flow: column nowrap;
  align-items: center;

  ${above.large`
    width: 70%; /* ancho de mi pagina */
    height: 100%;
    position: relative;
  `}
`;

export const STextoServiciosHome = styled.div`
  width: 70%; /* an:cho de mi pagina */
  height: auto; /* largo de mi pagina */
  background: none; /* color de fondo */
  display: flex; /* utilizar las funciones de flex */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;

  p {
    color: ${colors.black};
    font-family: ${fonts.montExtraBold};
    font-size: 10px;
    word-spacing: 1px;
  }

  ${above.large`
    width: 100%;
    height: 10%;
    background: none;
    bottom: 0;

    p {
      font-size: 13px;    
      word-spacing: 5px;

    }
  `}
`;

/*+++ INICIA SECCION HEADER IZQUIERDA+++*/

export const SHeaderIzquierda = styled.div`
  display: none; /* utilizar las funciones de flex */

  ${above.large`
    width: 15%; /* ancho de mi pagina */
    height: 100%;
    background: none; /* color de fondo */
    display: flex; /* utilizar las funciones de flex */
    flex-wrap: wrap;
    position: relative;
    justify-content: flex-start;
    align-items: flex-end;

  `}
`;

export const SAnimacionHomeIzq = styled(motion.div)`
  /* Comentario en estilos */
 
  background: none; /* utilizar las funciones de flex */
  justify-content: center;
  align-items: center;
  border: 1px solid none;
  position: absolute;
  left: -10%;
  bottom: 0%;
  transform: scale(1.2);
  transform: translateY(-10%);

  ${above.large`
   
    position: static;
    transform: scale(1.3);
  `}
`;

export const SRedes = styled (motion.div)`
display: none;  // se oculta

  ${above.large`
    width: 22%; /* ancho de mi pagina */
    height: 30%; /* largo de mi pagina */
    background: none; /* color de fondo */
    display: flex; /* utilizar las funciones de flex */
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-left: 5em;

    a {
      height: width;
      margin: 0;
      padding: 10%;
    }
  `}
`;

/*+++ INICIA SECCION HEADER DERECHA+++*/

export const SHeaderDerecha = styled.div`
  display: none; /* utilizar las funciones de flex */

  ${above.large`
    position: relative;
    width: 15%; /* ancho de mi pagina */
    height: 100%; /* largo de mi pagina */
    background: none; /* color de fondo */
    display: flex; /* utilizar las funciones de flex */
    justify-content: flex-end;
    align-items: flex-end;
    background: none;
  `}
`;

export const SAnimacionHomeDer = styled(motion.div)`
  width: 90%; /* ancho de mi pagina */
  height: 30%; /* largo de mi pagina */
  background: none; /* color de fondo */
  display: flex; /* utilizar las funciones de flex */
  justify-content: center;
  align-items: center;
  border: none; /* utilizar las funciones de flex */
  transform: scale(1.3);
  position: absolute;
  top: 77%;
  left: 25%;

  ${above.large`
    width: 100%; /* ancho de mi pagina */
    height: 100%;
    position: static;
    top: 0;
    left: 0;
    transform: scale(1);
  `}
`;

export const STextoInicio = styled.div`
  /* Comentario en estilos */
  width: 100%; /* ancho de mi pagina */
  height: auto; /* largo de mi pagina */
  background-color: none;
  text-align: center;
  position: relative;
  padding: 0 10%;
  color: ${colors.black};

  h1 {
    font-family: ${fonts.reciaB};
    background: none;
    font-size: 1.8em;
    text-align: center;
    line-height: 1.6em;
    letter-spacing: 1px;
    padding: 20% 10% 0 10%;
  }
  h1 > span {
    font-size: 2em;
    background: none;
    margin: 0;
  }

  .Es {
    font-size: 1.3em;
    vertical-align: super;
  }
  .web {
    display: none;
  }
  .movil {
    display: static;
  }

  ${above.large`
    width: 80%;
    height: 80%;
    background: none;
    padding: 0 18% 0;
    text-align: center;

    h1 {
      font-family: ${fonts.reciaB};
      background: none;
      font-size: ${sizes.textoTitulo};
      text-align: center;
      padding: 1%;
    }
    .Es {
      font-size: 1.3em;
      vertical-align: center;
    }
    .movil {
      display: static;
    }
  `}

  ${above.xlarge`
    width: 50%;
    height: 80%;
    padding: 0 20% 0;

    h1 {
      letter-spacing: 5px;
      font-size: 4em;
      padding: 0;
      line-height: 1.2em;

    }
    .exp{
      padding-top: 10px;
    }
  `}
`;
