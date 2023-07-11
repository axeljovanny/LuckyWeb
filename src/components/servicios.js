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
import {useI18next, Trans} from 'gatsby-plugin-react-i18next';

const Call = ({ siteTit }) => {
  const {languages, originalPath, t} = useI18next();

  return (
    <SContenedorInicial>
      <SContenedorTitulo>
        <h1><Trans>SERVICIOS</Trans></h1>
      </SContenedorTitulo>
      <SContenedorGrid>
        <SBranding>
          {" "}
          <h2><Trans>BRANDING</Trans></h2>
        </SBranding>
        <SBrandingTexto>
          <h3>
            {" "}
            lorem ipsum dolor sit amet, consectetur adipsing elit, sed do
            eiusmod tempor incididut.{" "}
          </h3>
        </SBrandingTexto>
        <SBrandingMas>
          <Plus stroke={colors.black} className={"svgPlus"} />
        </SBrandingMas>
        <SDesarrolloWeb>
          {" "}
          <h2><Trans>DESARROLLO WEB</Trans></h2>
        </SDesarrolloWeb>
        <SDesarrolloTexto>
          {" "}
          <h3>
            {" "}
            lorem ipsum dolor sit amet, consectetur adipsing elit, sed do
            eiusmod tempor incididut.{" "}
          </h3>{" "}
        </SDesarrolloTexto>
        <SDesarrolloMas>
          <Plus stroke={colors.black} className={"svgPlus"} />
        </SDesarrolloMas>

        <SCreacionContenido>
          <h2><Trans>CREACIÓN DE CONTENIDO</Trans></h2>
        </SCreacionContenido>
        <SCreaciontexto>
          <h3>
            {" "}
            lorem ipsum dolor sit amet, consectetur adipsing elit, sed do
            eiusmod tempor incididut.{" "}
          </h3>{" "}
        </SCreaciontexto>
        <SCreacionMas>  <Plus stroke={colors.black} className={"svgPlus"} /></SCreacionMas>
      </SContenedorGrid>
    </SContenedorInicial>
  );
};

export default Call;