import React from "react"
import { SAnimacionFooter, SAnimacionLDS, SContenedorCentral, SDerFooter, SFooter, SIzqFooter,SRedesFooter,STextoCopy, STextoDerechosAutor, STextoFrase, STextoUbicacion, STextoDH, STextoContacto } from "../styles/js/footer";
import { IStickerFoco, IStickerMesa, IStickerTrebol2, IStickerlogo } from "./imagesComponets";
import "../styles/css/svg.css";
import { BehanceIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from "../images/icons/icons";
import { colors } from "../utils/const";
import { Trans} from 'gatsby-plugin-react-i18next';


const Footer = ({ siteTitle}) => {
    const currentYear = new Date().getFullYear();
    return (
        <SFooter>
            <SIzqFooter>
                <SAnimacionLDS>
                    <IStickerlogo/>
                </SAnimacionLDS>
                <SRedesFooter>
                    <a href="behance://profile/LuckyDuckyStudio" aria-label="Link al Portafolio en Behance" rel="noreferrer" target="_blank"><BehanceIcon fill={colors.white} className={"svgFooter"} /> </a>
                    <a href="fb://profile/luckyducky.studio" aria-label="Link al Perfil de Facebook"  rel="noreferrer" target="_blank"><FacebookIcon fill={colors.white} className={"svgFooter"} /> </a>
                    <a href="instagram://user?username=lduckystudio"  aria-label="Link al Perfil de Instagram" rel="noreferrer" target="_blank"> <InstagramIcon fill={colors.white} className={"svgFooter"} /> </a>
                    <a href="https://www.linkedin.com/company/lduckystudio/" aria-label="Link al Perfil de LinkedIn"  rel="noreferrer" target="_blank"> <LinkedinIcon fill={colors.white} className={"svgFooter"} /> </a>
                </SRedesFooter>
            </SIzqFooter>
            <SContenedorCentral>
                <STextoFrase>
                    <p>"<Trans>FOOTER_FRASE</Trans>"</p>
                </STextoFrase>
                <STextoDH>
                    <p><Trans>FOOTER_HOUSE</Trans></p>
                </STextoDH>
                <STextoUbicacion>
                    <p><Trans>FOOTER_DIRECCION</Trans></p>
                </STextoUbicacion>
                <STextoContacto>
                    <p><Trans>FOOTER_TEL</Trans></p>
                    <p><Trans>FOOTER_MAIL</Trans></p>
                </STextoContacto>
            </SContenedorCentral>
            <SDerFooter>
                <SAnimacionFooter>
                    <IStickerFoco/>
                    <IStickerMesa/>
                    <IStickerTrebol2/>
                </SAnimacionFooter>
            </SDerFooter>
            <STextoCopy>
                <STextoDerechosAutor>
                <p><Trans>FOOTER_C</Trans>&copy; {currentYear}</p>
                </STextoDerechosAutor>
            </STextoCopy>
        </SFooter>
    )
}

export default Footer