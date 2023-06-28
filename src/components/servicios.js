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

const Call = ({ siteTit }) => {
  return (
    <SContenedorInicial>
      <SContenedorTitulo>
        <h1> SERVICIOS </h1>
      </SContenedorTitulo>
      <SContenedorGrid>
        <SBranding>
          {" "}
          <h2> BRANDING</h2>
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
          <h2> DESARROLLO WEB</h2>
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
          <h2> CREACION DE CONTENIDO</h2>
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
