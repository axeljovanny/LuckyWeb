import React from "react"
import { SAnimacionFooter, SAnimacionLDS, SContenedorCentral, SDerFooter, SFooter, SIzqFooter,SRedesFooter,STextoCopy, STextoDerechosAutor, STextoFrase, STextoUbicacion, STextoDH, STextoContacto } from "../styles/js/footer";
import { IStickerFoco, IStickerMesa, IStickerTrebol2, IStickerlogo } from "./imagesComponets";
import "../styles/css/svg.css";
import { BehanceIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from "../images/icons/icons";
import { colors } from "../utils/const";




const Footer = ({ siteTitle }) => {
    return (
        <SFooter>
            <SIzqFooter>
                <SAnimacionLDS>
                    <IStickerlogo/>
                </SAnimacionLDS>
                <SRedesFooter>
                <a href="https://www.behance.net/LuckyDuckyStudio" rel="noreferrer" target="_blank"><BehanceIcon fill={colors.white} className={"svgFooter"} /></a>
            <a href="https://www.facebook.com/luckyducky.studio" rel="noreferrer" target="_blank"><FacebookIcon fill={colors.white} className={"svgFooter"} /></a>
            <a href="https://www.instagram.com/lduckystudio/" rel="noreferrer" target="_blank"> <InstagramIcon fill={colors.white} className={"svgFooter"} /></a>
            <a href="https://www.linkedin.com/company/lduckystudio/" rel="noreferrer" target="_blank"> <LinkedinIcon fill={colors.white} className={"svgFooter"} /></a>
                </SRedesFooter>
            </SIzqFooter>
            <SContenedorCentral>
                <STextoFrase>
                    <p> NO ES DE DONDE TOMAMOS LAS COSAS, SI NO A DONDE LAS VAMOS A LLEVAR.</p>
                </STextoFrase>
                <STextoDH>
                    <p>Ducky House</p>
                </STextoDH>
                <STextoUbicacion>
                    <p>M. Ávila Camacho 17, Mariano Balleza, 37800 Dolores Hidalgo C.I.N. Guanajuato, México.</p>
                </STextoUbicacion>
                <STextoContacto>
                    <p>(+52) 418 111 9941</p>
                    <p>hello@luckyducky.studio</p>
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
                <p>  Lucky Ducky Studio© 2023</p>
                </STextoDerechosAutor>
            </STextoCopy>
        </SFooter>
    )
}

export default Footer