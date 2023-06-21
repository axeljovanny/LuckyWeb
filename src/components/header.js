import React, { useState, useRef } from "react";
import { SAnimacionCentral, SAnimacionHomeDer, SAnimacionHomeIzq, SAnimacionTextoInicio, SContenido, SHeader, SHeaderDerecha, SHeaderIzquierda, SIdioma, SInicioYServicios, SLogo, SNav, SNavButton, SRedes, STextoInicio, STextoServiciosHome } from "../styles/js/header";
import { IFondoHeader, ILogoTrebol, IStickerBorrego, IStickerCorazon, IStickerLap, IconoMenu, IGrafiiti } from "./imagesComponets";
import { BehanceIcon, FacebookIcon, InstagramIcon } from "../images/icons/icons";
import Nav, { MenuToggle } from "./nav";
import { Overlay } from "../styles/js/nav";
import { useCycle } from "framer-motion"
import { colors } from "../utils/const";
import "../styles/css/svg.css";

const Header = ({ siteTitle }) => {
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
            <a> ESP </a>|<a> ENG</a>
          </SIdioma>
        </SNav>

        <SContenido>
          <SHeaderIzquierda>
            <SAnimacionHomeIzq>
              <IStickerBorrego />
            </SAnimacionHomeIzq>
            <SRedes>
            <a href="https://www.behance.net/LuckyDuckyStudio" rel="noreferrer" target="_blank"><BehanceIcon fill={colors.black} className={"svgHeader"} /></a>
            <a href="https://www.facebook.com/luckyducky.studio" rel="noreferrer" target="_blank"><FacebookIcon fill={colors.black} className={"svgHeader"} /></a>
            <a href="https://www.instagram.com/lduckystudio/" rel="noreferrer" target="_blank"> <InstagramIcon fill={colors.black} className={"svgHeader"} /></a>
            </SRedes>
          </SHeaderIzquierda>

          <SInicioYServicios>
            <IStickerLap />
            <STextoInicio>
              <h1>
                <span class="Es">LA</span>  <span>CREATIVIDAD</span>  <span class="Es">ES</span>  <span class="Es">UN</span> <span>REFLEJO</span> <span class="Es">DE</span> <span>NUESTRA</span> <span>NUESTRA</span>{" "}
              </h1>
              <IGrafiiti/>
            </STextoInicio>
            <STextoServiciosHome>
              <p>
                BRANDING &nbsp; | &nbsp; PRODUCCION AUDIOVISUAL&nbsp; |&nbsp;
                DESARROLLO WEB
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
