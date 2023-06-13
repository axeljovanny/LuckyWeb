import React from "react";

import { colors } from "../utils/const";
import "../styles/css/svg.css";
import { SContenedorCloseYLogo, SContenedorContenido, SContenedorNav,SContenedorPrincipalNav, SContenedorRedesYSticker, SRedesNav } from "../styles/js/nav";
import { INube } from "./imagesComponets";

const Nav = ({ siteTitle }) => {
  return (
    <SContenedorNav>
      <SContenedorPrincipalNav>

        <SContenedorCloseYLogo>
        </SContenedorCloseYLogo>

        <SContenedorContenido>
         <INube/>
          <h1> HOME</h1>
          <h1> PROYECTOS</h1>
          <h1> NOSOTROS</h1>

        </SContenedorContenido>

        <SContenedorRedesYSticker>

          <SRedesNav>
          </SRedesNav>

        </SContenedorRedesYSticker>

      </SContenedorPrincipalNav>
    </SContenedorNav>
  )
}

export default Nav;