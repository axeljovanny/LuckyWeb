import React from "react";
import {
  SAnimacionHomeDer,
  SAnimacionHomeIzq,
  SContenido,
  SHeader,
  SHeaderDerecha,
  SHeaderIzquierda,
  SIdioma,
  SInicioYServicios,
  SLogo,
  SNav,
  SNavButton,
  SRedes,
  SStickers,
  STextoInicio,
  STextoServiciosHome,
} from "../styles/js/header";
import {
  IFondoHeader,
  ILogoTrebol,
  IStickerBorrego,
  IStickerCorazon,
  IStickerLap,
  IGrafiiti,
} from "./imagesComponets";
import {
  BehanceIcon,
  FacebookIcon,
  InstagramIcon,
} from "../images/icons/icons";
import { motion } from "framer-motion";
import { colors } from "../utils/const";
import "../styles/css/svg.css";
import { Trans } from 'gatsby-plugin-react-i18next';
import { useMediaQuery } from "react-responsive";

const Stickers = (isMobile) => {
  return (
    
    <SStickers>
      
        <IStickerBorrego />
        <IStickerLap />
        <IStickerCorazon />

    </SStickers>
  )
}

const Header = ({ siteTitle }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <> 
      {/* <Stickers isMobile={isMobile}/> */}
      <SHeader>
        <IFondoHeader /> 
        <SNav>
          <SNavButton></SNavButton>
          <SLogo>
            <ILogoTrebol /> 
          </SLogo>
          <SIdioma /> 
        </SNav>
        <SContenido>
          <SHeaderIzquierda>
            <SRedes>
              <motion.a
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.9,
                  ease: "easeInOut",
                  type: "spring",
                  delay: 1,
                }}
                href="https://www.behance.net/LuckyDuckyStudio"
                rel="noreferrer"
                target="_blank"
              >
                <BehanceIcon fill={colors.black} className={"svgHeader"} />{" "}
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.9,
                  ease: "easeInOut",
                  type: "spring",
                  delay: 1.2,
                }}
                href="https://www.facebook.com/luckyducky.studio"
                rel="noreferrer"
                target="_blank"
              >
                <FacebookIcon fill={colors.black} className={"svgHeader"} />{" "}
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.9,
                  ease: "easeInOut",
                  type: "spring",
                  delay: 1.4,
                }}
                href="https://www.instagram.com/lduckystudio/"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <InstagramIcon
                  fill={colors.black}
                  className={"svgHeader"}
                />{" "}
              </motion.a>
            </SRedes>
          </SHeaderIzquierda>
          <SInicioYServicios
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.9, ease: "easeInOut", type: "spring" }}
          >
            <STextoInicio>
              <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.9, ease: "easeInOut", type: "spring", delay: .3 }}>
                <span className="Es web"> <Trans>HEADER_LA</Trans><br /> </span>
                <span className="Es movil"> <Trans>HEADER_LA</Trans> </span>
                <span> <Trans>HEADER_CREATIVIDAD</Trans> </span>  <span className="Es"><Trans>HEADER_ES</Trans></span>  <span className="Es"><Trans>HEADER_UN</Trans></span> <span><Trans>HEADER_REFLEJO</Trans></span> <span className="Es"><Trans>HEADER_DE</Trans></span> <span><Trans>HEADER_NUESTRA</Trans></span><span className="exp" style={{ position: "relative", display: "inline-block" }}>
                  <IGrafiiti isMobile={isMobile} />
                  <Trans>HEADER_EXPERIENCIA</Trans>
                </span>{" "}
              </motion.h1>
            </STextoInicio>
            <STextoServiciosHome>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.9,
                  ease: "easeInOut",
                  type: "spring",
                  delay: 1.3,
                }}
              >
                <Trans i18nKey="SERVICES" />
              </motion.p>
            </STextoServiciosHome>
          </SInicioYServicios>
          <SHeaderDerecha>
          </SHeaderDerecha>
        </SContenido>
      </SHeader>
    </>
  );
};

export default Header;
