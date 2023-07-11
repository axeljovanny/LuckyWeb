import React from "react";
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
} from "../styles/js/servicios";
import {} from "./imagesComponets";
import { Plus } from "../images/icons/icons";
import "../styles/css/svg.css";
import { colors } from "../utils/const";
import { Trans} from 'gatsby-plugin-react-i18next';

const Call = ({ siteTit }) => {
  return (
    <SContenedorInicial>
      <SContenedorTitulo>
        <h1><Trans>SERVICIOS_TITTLE</Trans></h1>
      </SContenedorTitulo>
      <SContenedorGrid>
        <SBranding>
          {" "}
          <h2><Trans>SERVICIOS_BRANDING</Trans></h2>
        </SBranding>
        <SBrandingTexto>
          <h3>
          <Trans>SERVICIOS_BRANDING_DESC</Trans>
          </h3>
        </SBrandingTexto>
        <SBrandingMas>
          <Plus stroke={colors.black} className={"svgPlus"} />
        </SBrandingMas>
        <SDesarrolloWeb>
          <h2><Trans>SERVICIOS_WEB</Trans></h2>
        </SDesarrolloWeb>
        <SDesarrolloTexto>
        <h3><Trans>SERVICIOS_WEB_DESC</Trans></h3>
        </SDesarrolloTexto>
        <SDesarrolloMas>
          <Plus stroke={colors.black} className={"svgPlus"} />
        </SDesarrolloMas>
        <SCreacionContenido>
          <h2><Trans>SERVICIOS_CONTENIDO</Trans></h2>
        </SCreacionContenido>
        <SCreaciontexto>
        <h3><Trans>SERVICIOS_CONTENIDO_DESC</Trans></h3>
        </SCreaciontexto>
        <SCreacionMas>  <Plus stroke={colors.black} className={"svgPlus"} /></SCreacionMas>
      </SContenedorGrid>
    </SContenedorInicial>
  );
};

export default Call;