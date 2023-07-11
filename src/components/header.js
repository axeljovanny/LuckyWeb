import React, { useState, useRef } from "react";
import { Item, SAnimacionCentral, SAnimacionHomeDer, SAnimacionHomeIzq, SAnimacionTextoInicio, SContenido, SHeader, SHeaderDerecha, SHeaderIzquierda, SIdioma, SInicioYServicios, SLogo, SNav, SNavButton, SRedes, STextoInicio, STextoServiciosHome } from "../styles/js/header";
import { IFondoHeader, ILogoTrebol, IStickerBorrego, IStickerCorazon, IStickerLap, IGrafiiti } from "./imagesComponets";
import { BehanceIcon, FacebookIcon, InstagramIcon } from "../images/icons/icons";
import { colors } from "../utils/const";
import "../styles/css/svg.css";
import { useI18next, Trans, Link } from 'gatsby-plugin-react-i18next';

const Header = ({ siteTitle }) => {
  const {languages, originalPath, t, i18n } = useI18next();

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
                <span class="Es"><Trans>LA</Trans></span>&nbsp;
                <span><Trans>CREATIVIDAD</Trans></span>&nbsp;
                <span class="Es"><Trans>ES</Trans></span>&nbsp;
                <span class="Es"><Trans>UN</Trans></span>&nbsp;
                <span><Trans>REFLEJO</Trans></span>&nbsp;
                <span class="Es"><Trans>DE</Trans></span>&nbsp;
                <span><Trans>NUESTRA</Trans></span>&nbsp;
                <span style={{position:"relative"}}><IGrafiiti/><Trans i18nKey="exp">EXPERIENCIA</Trans></span>{" "}
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

export default Header;