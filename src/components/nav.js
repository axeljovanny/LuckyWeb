import * as React from "react";
import { motion } from "framer-motion";

import { colors } from "../utils/const";
import "../styles/css/svg.css";
import { SBlur, SContenedorCloseYLogo, SContenedorContenido, SContenedorNav,SContenedorPrincipalNav, SContenedorRedesYSticker,SContenedorIdioma , SRedesNav, OverButton, Over, SDerechosAutor } from "../styles/js/nav";
import { IBala, ILogoTrebol, INube } from "./imagesComponets";
import { BehanceIcon, FacebookIcon, InstagramIcon } from "../images/icons/icons";

export const Nav = ({ open, toggle }) => {
  return (
    <Over 
      animate={open? "open" : "closed"}
      variants={sidebar}>
      <SContenedorNav variants={variants}>
      <SContenedorPrincipalNav>
        <SContenedorCloseYLogo>
        <SContenedorIdioma>
             <p> ESP </p>
            <p> | </p>
            <p> ENG</p>
         </SContenedorIdioma>
          <Trebol fill={colors.white} className={"svgLogoNav"}/>
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
          <p> © LUCKY DUCKY STUDIO {new Date().getFullYear()} </p>
           </SDerechosAutor>

        </SContenedorRedesYSticker>

      </SContenedorPrincipalNav>
      <SBlur onClick={toggle}/>
      </SContenedorNav>
    </Over>
  )
}

export const MenuToggle = ({ toggle, siteTitle }) => {
    return (
    <OverButton onClick={toggle}>
    <svg width="40" height="40" viewBox="0 0 23 23">
    <Path
      variants={{
        closed: { d: "M 2 2.5 L 20 2.5", stroke: colors.black },
        open: { d: "M 3 16.5 L 17 2.5", stroke: colors.white}
      }}
    />
    <Path
      d="M 2 9.423 L 20 9.423"
      variants={{
        closed: { opacity: 1, stroke: colors.black  },
        open: { opacity: 0 }
      }}
      transition={{ duration: 0.1 }}
    />
    <Path
      variants={{
        closed: { d: "M 2 16.346 L 20 16.346", stroke: colors.black },
        open: { d: "M 3 2.5 L 17 16.346", stroke: colors.white }
      }}
    />
  </svg>
  </OverButton>)
   
};

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

//propiedades al mostrar menu
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 4 + 200}px at 0px 0px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      duration: .8
    }
  }),
  closed: {
    clipPath: "circle(0px at 0px 0px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      duration: .8
    }
  }
};


export default Nav;
