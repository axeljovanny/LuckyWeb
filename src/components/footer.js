import React from "react"
import { SAnimacionFooter, SAnimacionLDS, SContenedorCentral, SDerFooter, SFooter, SIzqFooter,SRedesFooter,STextoCopy, STextoDerechosAutor, STextoFrase, STextoUbicacion } from "../styles/js/footer";
import { IStickerFoco, IStickerMesa, IStickerTrebol2, IStickerlogo } from "./imagesComponets";





const Footer = ({ siteTitle }) => {
    return (
        <>
            <SFooter>
        <SIzqFooter>
            <SAnimacionLDS>
                <IStickerlogo/>
            </SAnimacionLDS>
            <SRedesFooter></SRedesFooter>
        </SIzqFooter>
        <SContenedorCentral>
            <STextoFrase>
            <p> NO ES DE DONDE TOMAMOS LAS COSAS, SI NO A DONDE LAS VAMOS A LLEVAR.</p>

            </STextoFrase>
            <STextoUbicacion></STextoUbicacion>

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
        </>
    )

}

export default Footer