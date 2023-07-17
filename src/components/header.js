import React from "react";
import { SAnimacionHomeDer, SAnimacionHomeIzq, SContenido, SHeader, SHeaderDerecha, SHeaderIzquierda, SIdioma, SInicioYServicios, SLogo, SNav, SNavButton, SRedes, STextoInicio, STextoServiciosHome } from "../styles/js/header";
import { IFondoHeader, ILogoTrebol, IStickerBorrego, IStickerCorazon, IStickerLap, IGrafiiti } from "./imagesComponets";
import { BehanceIcon, FacebookIcon, InstagramIcon } from "../images/icons/icons";
import { motion } from "framer-motion"
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
          <SIdioma />
        </SNav>
        <SContenido>
          <SHeaderIzquierda>
            <SAnimacionHomeIzq initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4, ease: "easeInOut", type: "spring" }}>
              <IStickerBorrego />
            </SAnimacionHomeIzq>
            <SRedes>
              <a href="https://www.behance.net/LuckyDuckyStudio" rel="noreferrer" target="_blank"><BehanceIcon fill={colors.black} className={"svgHeader"} /> </a>
              <a href="https://www.facebook.com/luckyducky.studio" rel="noreferrer" target="_blank"><FacebookIcon fill={colors.black} className={"svgHeader"} /> </a>
              <a href="https://www.instagram.com/lduckystudio/" rel="noreferrer" target="_blank"> <InstagramIcon fill={colors.black} className={"svgHeader"} /> </a>
            </SRedes>
          </SHeaderIzquierda>

          <SInicioYServicios>
            <motion.div >
              <IStickerLap />
            </motion.div>
            <STextoInicio>
              <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.9, ease: "easeInOut", type: "spring" }}>
                <span class="Es web"> <Trans>HEADER_LA</Trans><br /> </span>
                <span class="Es movil"> <Trans>HEADER_LA</Trans> </span>
                <span> <Trans>HEADER_CREATIVIDAD</Trans> </span>  <span class="Es"><Trans>HEADER_ES</Trans></span>  <span class="Es"><Trans>HEADER_UN</Trans></span> <span><Trans>HEADER_REFLEJO</Trans></span> <span class="Es"><Trans>HEADER_DE</Trans></span> <span><Trans>HEADER_NUESTRA</Trans></span><span style={{ position: "relative", display: "inline-block" }}>
                  <IGrafiiti />
                  <Trans>HEADER_EXPERIENCIA</Trans>
                </span>
                {" "}
              </motion.h1>
            </STextoInicio>
            <STextoServiciosHome>
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.9, ease: "easeInOut", type: "spring", delay: 1.3 }}>
                <Trans i18nKey="SERVICES" />
              </motion.p>
            </STextoServiciosHome>
          </SInicioYServicios>
          <SHeaderDerecha>
            <SAnimacionHomeDer initial={{ opacity: 0, y: 30, x: 30 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 1.9, ease: "easeInOut", type: "spring" }}>
              <IStickerCorazon />
            </SAnimacionHomeDer>
          </SHeaderDerecha>
        </SContenido>
      </SHeader>
    </>
  );
};

export default Header;
