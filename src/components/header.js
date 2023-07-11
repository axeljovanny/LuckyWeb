import React, { useState, useRef } from "react";
import { Item, SAnimacionCentral, SAnimacionHomeDer, SAnimacionHomeIzq, SAnimacionTextoInicio, SContenido, SHeader, SHeaderDerecha, SHeaderIzquierda, SIdioma, SInicioYServicios, SLogo, SNav, SNavButton, SRedes, STextoInicio, STextoServiciosHome } from "../styles/js/header";
import { IFondoHeader, ILogoTrebol, IStickerBorrego, IStickerCorazon, IStickerLap, IconoMenu, IGrafiiti } from "./imagesComponets";
import { BehanceIcon, FacebookIcon, InstagramIcon } from "../images/icons/icons";
import Nav, { MenuToggle } from "./nav";
import { Overlay } from "../styles/js/nav";
import { useCycle } from "framer-motion"
import { colors, sizes  } from "../utils/const";
import "../styles/css/svg.css";
import {Link, useI18next, Trans} from 'gatsby-plugin-react-i18next';

const Header = ({ siteTitle }) => {
  const { languages, originalPath, i18n } = useI18next();

  //console.log(languages);
  return (
    <>
      <SHeader>
        <IFondoHeader />
        <SNav>
          <SNavButton>
          </SNavButton>
          <SLogo>
            <ILogoTrebol />
          </SLogo>
          <SIdioma>
             {/* {languages.map((lng) => (  
                <Link key={lng} to={originalPath} language={lng} style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }}>
                  {lng}
                </Link>
            ))}  */}
          </SIdioma>
        </SNav>
        <SContenido>
          <SHeaderIzquierda>
            <SAnimacionHomeIzq>
              <IStickerBorrego />
            </SAnimacionHomeIzq>
            <SRedes>
            <a href="https://www.behance.net/LuckyDuckyStudio" rel="noreferrer" target="_blank"><BehanceIcon fill={colors.black} className={"svgHeader"} /> </a>
            <a href="https://www.facebook.com/luckyducky.studio" rel="noreferrer" target="_blank"><FacebookIcon fill={colors.black} className={"svgHeader"} /> </a>
            <a href="https://www.instagram.com/lduckystudio/" rel="noreferrer" target="_blank"> <InstagramIcon fill={colors.black} className={"svgHeader"} /> </a>
            </SRedes>
          </SHeaderIzquierda>

          <SInicioYServicios>
            <IStickerLap />
            <STextoInicio>
              <h1>
                <span class="Es web"> <Trans>LA</Trans><br/> </span> 
                <span class="Es movil"> <Trans>LA</Trans> </span>
                <span> <Trans>CREATIVIDAD</Trans> </span>  <span class="Es"><Trans>ES</Trans></span>  <span class="Es"><Trans>UN</Trans></span> <span><Trans>REFLEJO</Trans></span> <span class="Es"><Trans>DE</Trans></span> <span><Trans>NUESTRA</Trans></span> <span><Trans>EXPERIENCIA</Trans></span>{" "}
              </h1>
            </STextoInicio>
            <STextoServiciosHome>
              <p>
                <Trans i18nKey="services">
                BRANDING &nbsp; | &nbsp; PRODUCCION AUDIOVISUAL&nbsp; | &nbsp;
                DESARROLLO WEB
                </Trans>
              </p>
            </STextoServiciosHome>
          </SInicioYServicios>
          <SHeaderDerecha>
            <SAnimacionHomeDer>
              <IStickerCorazon />
            </SAnimacionHomeDer>
          </SHeaderDerecha>
        </SContenido>
      </SHeader>

    </>
  );
};

export const IconNav = ({ siteTitle }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <Overlay
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}>
      <MenuToggle toggle={() => toggleOpen()} siteTitle={siteTitle} />
      <Nav open={isOpen} toggle={() => toggleOpen()} />
    </Overlay>
  );
};

export default Header;