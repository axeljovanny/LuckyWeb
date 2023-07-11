import React from "react";
import { SAnimacionHomeDer, SAnimacionHomeIzq, SContenido, SHeader, SHeaderDerecha, SHeaderIzquierda, SIdioma, SInicioYServicios, SLogo, SNav, SNavButton, SRedes, STextoInicio, STextoServiciosHome } from "../styles/js/header";
import { IFondoHeader, ILogoTrebol, IStickerBorrego, IStickerCorazon, IStickerLap, IGrafiiti } from "./imagesComponets";
import { BehanceIcon, FacebookIcon, InstagramIcon } from "../images/icons/icons";
import { colors } from "../utils/const";
import "../styles/css/svg.css";
import { Trans } from 'gatsby-plugin-react-i18next';

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
          <SIdioma/>
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
                <span class="Es web"> <Trans>HEADER_LA</Trans><br/> </span> 
                <span class="Es movil"> <Trans>HEADER_LA</Trans> </span>
                <span> <Trans>HEADER_CREATIVIDAD</Trans> </span>  <span class="Es"><Trans>HEADER_ES</Trans></span>  <span class="Es"><Trans>HEADER_UN</Trans></span> <span><Trans>HEADER_REFLEJO</Trans></span> <span class="Es"><Trans>HEADER_DE</Trans></span> <span><Trans>HEADER_NUESTRA</Trans></span> <span><Trans>HEADER_EXPERIENCIA</Trans></span>{" "}
              </h1>
            </STextoInicio>
            <STextoServiciosHome>
              <p>
                <Trans i18nKey="SERVICES"/>
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