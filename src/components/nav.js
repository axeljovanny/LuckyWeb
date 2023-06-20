import React from "react";

import "../styles/css/svg.css";
import { SContenedorCloseYLogo, SContenedorContenido, SContenedorIdioma, SContenedorNav,SContenedorPrincipalNav, SContenedorRedesYSticker, SDerechosAutor, SRedesNav, } from "../styles/js/nav";
import { IBala, ILogoTrebol, INube } from "./imagesComponets";
import { BehanceIcon, FacebookIcon, InstagramIcon } from "../images/icons/icons";
import { colors } from "../utils/const";

const Nav = ({ siteTitle }) => {
  return (
    <SContenedorNav>
      <SContenedorPrincipalNav>

        <SContenedorCloseYLogo>
        <SContenedorIdioma>
         </SContenedorIdioma>
          <ILogoTrebol/>

        </SContenedorCloseYLogo>
         

        <SContenedorContenido>
         <INube/>

          <h1> HOME</h1>
          <h1> PROYECTOS</h1>
          <h1> NOSOTROS</h1>

        </SContenedorContenido>

        <SContenedorRedesYSticker>

          <SRedesNav>
            <BehanceIcon fill={colors.white} className={"svgAbout"} />
            <FacebookIcon fill={colors.white} className={"svgAbout"} />
              <InstagramIcon fill={colors.white} className={"svgAbout"} />
          </SRedesNav>

        
          <IBala/>

          <SDerechosAutor>
          <p> © LUCKY DUCKY STUDIO 2023 </p>
           </SDerechosAutor>
           
        </SContenedorRedesYSticker>

      </SContenedorPrincipalNav>
    </SContenedorNav>
  )
 
}

export default Nav;
