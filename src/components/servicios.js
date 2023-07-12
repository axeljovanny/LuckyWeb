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
        <h1><Trans>SERVICIOS_TITTLE</Trans></h1>
      </SContenedorTitulo>
      <SContenedorGrid>
        <SBranding>
          <h2><Trans>SERVICIOS_BRANDING</Trans></h2>
        </SBranding>
        <SBrandingTexto>
          <h3>
            <Trans>SERVICIOS_BRANDING_DESC</Trans>
          </h3>
          <ShowBranding open={brand}>
            <p><Trans>SERVICIOS_BRANDING_1</Trans></p>
            <p><Trans>SERVICIOS_BRANDING_2</Trans></p>
            <p><Trans>SERVICIOS_BRANDING_3</Trans></p>
            <p><Trans>SERVICIOS_BRANDING_4</Trans></p>
            <p><Trans>SERVICIOS_BRANDING_5</Trans></p>
            <p><Trans>SERVICIOS_BRANDING_6</Trans></p>
          </ShowBranding>
        </SBrandingTexto>
        <SBrandingMas onClick={() => toggleBrand(!brand)}>
          {brand ? (<Minus stroke={colors.black} className={"svgPlus"}/>) : (<Plus stroke={colors.black} className={"svgPlus"}/>)}
        </SBrandingMas>
        <SDesarrolloWeb>
          <h2><Trans>SERVICIOS_WEB</Trans></h2>
        </SDesarrolloWeb>
        <SDesarrolloTexto>
          <h3><Trans>SERVICIOS_WEB_DESC</Trans></h3>
          <ShowWeb open={web}>
          <p><Trans>SERVICIOS_WEB_1</Trans></p>
          <p><Trans>SERVICIOS_WEB_2</Trans></p>
          <p><Trans>SERVICIOS_WEB_3</Trans></p>
          <p><Trans>SERVICIOS_WEB_4</Trans></p>
          <p><Trans>SERVICIOS_WEB_5</Trans></p>
          </ShowWeb>
        </SDesarrolloTexto>
        <SDesarrolloMas onClick={() => toggleWeb(!web)}>
        {web ? (<Minus stroke={colors.black} className={"svgPlus"}/>) : (<Plus stroke={colors.black} className={"svgPlus"}/>)}
        </SDesarrolloMas>
        <SCreacionContenido>
          <h2><Trans>SERVICIOS_CONTENIDO</Trans></h2>
        </SCreacionContenido>
        <SCreaciontexto>
          <h3><Trans>SERVICIOS_CONTENIDO_DESC</Trans></h3>
          <ShowContent open={content}>
          <p><Trans>SERVICIOS_CONTENIDO_1</Trans></p>
          <p><Trans>SERVICIOS_CONTENIDO_2</Trans></p>
          <p><Trans>SERVICIOS_CONTENIDO_3</Trans></p>
          <p><Trans>SERVICIOS_CONTENIDO_4</Trans></p>
          <p><Trans>SERVICIOS_CONTENIDO_5</Trans></p>
          <p><Trans>SERVICIOS_CONTENIDO_6</Trans></p>
          <p><Trans>SERVICIOS_CONTENIDO_7</Trans></p>
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