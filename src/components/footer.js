import React from "react"
import { SAnimacionFooter, SAnimacionLDS, SContenedorCentral, SDerFooter, SFooter, SIzqFooter,SRedesFooter,STextoCopy, STextoDerechosAutor, STextoFrase, STextoUbicacion } from "../styles/js/footer";





const Footer = ({ siteTitle }) => {
    return (
        <>
            <SFooter>
        <SIzqFooter>
            <SAnimacionLDS></SAnimacionLDS>
            <SRedesFooter></SRedesFooter>
        </SIzqFooter>
        <SContenedorCentral>
            <STextoFrase></STextoFrase>
            <STextoUbicacion></STextoUbicacion>
        </SContenedorCentral>
        <SDerFooter>
            <SAnimacionFooter></SAnimacionFooter>
        </SDerFooter>
        <STextoCopy>
            <STextoDerechosAutor></STextoDerechosAutor>
        </STextoCopy>





            </SFooter>
        </>
    )

}

export default Footer