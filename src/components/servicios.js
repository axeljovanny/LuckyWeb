import React, { useState } from "react";
import {
  SBranding,
  SBrandingMas,
  SBrandingTexto,
  SContenedorGrid,
  SContenedorInicial,
  SContenedorTitulo,
  SCreacionContenido,
  SCreacionMas,
  SCreaciontexto,
  SDesarrolloMas,
  SDesarrolloTexto,
  SDesarrolloWeb,
  ShowBranding,
  ShowContent,
  ShowWeb,
} from "../styles/js/servicios";
import { } from "./imagesComponets";
import { motion } from "framer-motion";
import { Minus, Plus } from "../images/icons/icons";
import "../styles/css/svg.css";
import { colors } from "../utils/const";
import { Trans } from 'gatsby-plugin-react-i18next';

const Call = ({ siteTit }) => {
  const [content, toggleContent] = useState(false);
  const [web, toggleWeb] = useState(false);
  const [brand, toggleBrand] = useState(false);

  return (
    <SContenedorInicial>
      <SContenedorTitulo>
        <motion.h1 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.8 }} viewport={{ once: true }}><Trans>SERVICIOS_TITTLE</Trans></motion.h1>
      </SContenedorTitulo>
      <SContenedorGrid>
        <SBranding>
          <motion.h2 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.8 }} viewport={{ once: true }}><Trans>SERVICIOS_BRANDING</Trans></motion.h2>
        </SBranding>
        <SBrandingTexto>
          <motion.h3 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1.8 }} viewport={{ once: true }}>
            <Trans>SERVICIOS_BRANDING_DESC</Trans>
          </motion.h3>
          <ShowBranding open={brand}>
            <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_BRANDING_1</Trans></motion.p>
            <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_BRANDING_2</Trans></motion.p>
            <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_BRANDING_3</Trans></motion.p>
            <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_BRANDING_4</Trans></motion.p>
            <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_BRANDING_5</Trans></motion.p>
            <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_BRANDING_6</Trans></motion.p>
          </ShowBranding>
        </SBrandingTexto>
        <SBrandingMas onClick={() => toggleBrand(!brand)}>
          {brand ? (<Minus stroke={colors.black} className={"svgPlus"}/>) : (<Plus stroke={colors.black} className={"svgPlus"}/>)}
        </SBrandingMas>
        <SDesarrolloWeb>
          <motion.h2 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}><Trans>SERVICIOS_WEB</Trans></motion.h2>
        </SDesarrolloWeb>
        <SDesarrolloTexto>
          <motion.h3 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}><Trans>SERVICIOS_WEB_DESC</Trans></motion.h3>
          <ShowWeb open={web}>
          <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_WEB_1</Trans></motion.p>
          <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_WEB_2</Trans></motion.p>
          <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_WEB_3</Trans></motion.p>
          <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_WEB_4</Trans></motion.p>
          <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_WEB_5</Trans></motion.p>
          </ShowWeb>
        </SDesarrolloTexto>
        <SDesarrolloMas onClick={() => toggleWeb(!web)}>
        {web ? (<Minus stroke={colors.black} className={"svgPlus"}/>) : (<Plus stroke={colors.black} className={"svgPlus"}/>)}
        </SDesarrolloMas>
        <SCreacionContenido>
          <motion.h2 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 2.5 }} viewport={{ once: true }}><Trans>SERVICIOS_CONTENIDO</Trans></motion.h2>
        </SCreacionContenido>
        <SCreaciontexto>
          <motion.h3 initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 2.5 }} viewport={{ once: true }}><Trans>SERVICIOS_CONTENIDO_DESC</Trans></motion.h3>
          <ShowContent open={content}>
          <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_CONTENIDO_1</Trans></motion.p>
          <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_CONTENIDO_2</Trans></motion.p>
          <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_CONTENIDO_3</Trans></motion.p>
          <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_CONTENIDO_4</Trans></motion.p>
          <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_CONTENIDO_5</Trans></motion.p>
          <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_CONTENIDO_6</Trans></motion.p>
          <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}><Trans>SERVICIOS_CONTENIDO_7</Trans></motion.p>
          </ShowContent>
        </SCreaciontexto>
        <SCreacionMas onClick={() => toggleContent(!content)}>  
        {content ? (<Minus stroke={colors.black} className={"svgPlus"}/>) : (<Plus stroke={colors.black} className={"svgPlus"}/>)}
        </SCreacionMas>
      </SContenedorGrid>
    </SContenedorInicial>
  );
};

export default Call;