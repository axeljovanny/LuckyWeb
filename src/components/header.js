import React, { useState, useRef } from "react";
import { SAnimacionCentral, SAnimacionHomeDer, SAnimacionHomeIzq, SAnimacionTextoInicio, SContenido, SHeader, SHeaderDerecha, SHeaderIzquierda, SIdioma, SInicioYServicios, SLogo, SNav, SNavButton, SRedes, STextoInicio, STextoServiciosHome } from "../styles/js/header";
import { IFondoHeader, ILogoTrebol, IStickerBorrego, IStickerCorazon, IStickerLap, IconoMenu, IGrafiiti } from "./imagesComponets";
import { BehanceIcon, FacebookIcon, InstagramIcon } from "../images/icons/icons";
import { MenuToggle, Nav } from "./nav";
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
            <IconoMenu />
          </SNavButton>
          <SLogo>
            <ILogoTrebol />
          </SLogo>

          <SIdioma>
            <p> ESP </p>
            <p> | </p>
            <p> ENG</p>
          </SIdioma>
        </SNav>

        <SContenido>
          <SHeaderIzquierda>
            <SAnimacionHomeIzq>
              <IStickerBorrego />
            </SAnimacionHomeIzq>
            <SRedes>
              <BehanceIcon fill={colors.black} className={"svgAbout"} />
              <FacebookIcon fill={colors.black} className={"svgAbout"} />
              <InstagramIcon fill={colors.black} className={"svgAbout"} />
            </SRedes>
          </SHeaderIzquierda>

          <SInicioYServicios>
            {/* <div>
              <h1>
              LA <span>CREATIVIDAD</span>  <span class="Es">ES</span>  <span class="Un"> UN </span> <span>REFLEJO</span> DE <span>NUESTRA</span>{" "}  
              </h1>
              <div>
                <IStickerLap />
              </div>
              <div>
                <IGrafiiti />
              </div>
            </div> */}
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

const IconNav = ({ siteTitle }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
      <Overlay
          initial={false}
          animate={isOpen ? "open" : "closed"}
          ref={containerRef}>
          <MenuToggle toggle={() => toggleOpen()} siteTitle={siteTitle} />
          <Nav open={isOpen} />
      </Overlay>
  );
};

export default Header;
