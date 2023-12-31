import React from "react";
import { motion, useCycle } from "framer-motion";

import { colors } from "../utils/const";
import "../styles/css/svg.css";
import { IBala, INube } from "./imagesComponets";
import { BehanceIcon, FacebookIcon, InstagramIcon, Trebol } from "../images/icons/icons";
import { SContenedorCloseYLogo, SContenedorContenido, SContenedorNav, SContenedorPrincipalNav, SContenedorRedesYSticker, SContenedorIdioma, SRedesNav, OverButton, Over, SDerechosAutor, SBlur } from "../styles/js/nav";

import { Overlay } from "../styles/js/nav";
import { useI18next, Trans, Link } from 'gatsby-plugin-react-i18next';

export const IconNav = ({ siteTitle }) => {
  const [isOpen, toggleOpen] = useCycle(false, true); // isOpen se inicializa como false

  return (
    <Overlay initial={false} animate={isOpen ? "open" : "closed"}>
      <MenuToggle toggle={() => toggleOpen()} siteTitle={siteTitle} />
      {isOpen && <Nav open={isOpen} toggle={() => toggleOpen()} />}
    </Overlay>
  );
};

const Nav = ({ open = "closed", toggle }) => {
  const { languages, originalPath, i18n } = useI18next();

  return (
    <Over
      animate={open ? "open" : "closed"}
      variants={sidebar}>
      <SContenedorNav variants={variants}>
        <SContenedorPrincipalNav>
          <SContenedorCloseYLogo>
            <SContenedorIdioma>
              {languages.map((lng) => (
                <Link key={lng} to={originalPath} language={lng} style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }}>
                  {lng}
                </Link>
              ))}
            </SContenedorIdioma>
            <Trebol fill={colors.white} className={"svgLogoNav"} />
          </SContenedorCloseYLogo>
          <SContenedorContenido>
            <INube />
            <Link to="/" onClick={toggle}>
              <h1><Trans>NAV_HOME</Trans></h1>
            </Link>
            <a href="behance://profile/LuckyDuckyStudio" rel="noreferrer" target="_blank"  aria-label="Link al Perfil de Behance">
              <h1><Trans>NAV_PROYECTOS</Trans></h1>
            </a>
            <h1 className="menuDisabled"><Trans>NAV_NOSOTROS</Trans></h1>
          </SContenedorContenido>
          <SContenedorRedesYSticker>
            <SRedesNav>
              <a href="behance://profile/LuckyDuckyStudio"  aria-label="Link al Perfil de Behance" rel="noreferrer" target="_blank"><BehanceIcon fill={colors.white} className={"svgNav"} /> </a>
              <a href="fb://profile/luckyducky.studio"  aria-label="Link al Perfil de Facebook" rel="noreferrer" target="_blank"><FacebookIcon fill={colors.white} className={"svgNav"} /> </a>
              <a href="instagram://user?username=lduckystudio"  aria-label="Link al Perfil de Instagram" rel="noreferrer" target="_blank"> <InstagramIcon fill={colors.white} className={"svgNav"} /> </a>
            </SRedesNav>
            <IBala />
          </SContenedorRedesYSticker>
          <SDerechosAutor>
            <p> © LUCKY DUCKY STUDIO {new Date().getFullYear()} </p>
          </SDerechosAutor>

        </SContenedorPrincipalNav>
        <SBlur onClick={toggle} />
      </SContenedorNav>
    </Over>
  )
}


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

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 4 + 200}px at 0px 0px)`,
    transition: {
      type: "spring",
      stiffness: 100,
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


export const MenuToggle = ({ toggle, siteTitle, isOpen }) => {
  console.log("valor de open:", isOpen);
    return (
    <OverButton title="Menu" isOpen={isOpen} onClick={toggle}>
    <svg width="30" height="30" viewBox="-2 -2 25 25">
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
