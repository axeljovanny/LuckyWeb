
import React from "react"
import { SCall, SCallButtom, SCallFrase } from "../styles/js/call";
import { Trans, useTranslation} from 'gatsby-plugin-react-i18next';

const Call = ({ siteTit }) => {
    const { t } = useTranslation();
    
    return (
        <SCall>
            <SCallFrase>
                <h3>  
                    <span><Trans i18nKey="callFirstRow">TRANSFORMA TU VISIÓN EN REALIDAD</Trans></span> 
                </h3>  
                <h1><Trans i18nKey="callSecRow">CUENTANOS MAS SOBRE TU PROYECTO...  </Trans></h1>
                <SCallButtom >  
                <a href="https://wa.me/5214181119941" rel="noreferrer" target="_blank"><Trans i18nKey="contact">¡CONTÁCTANOS AHORA!</Trans></a> 
                </SCallButtom>
            </SCallFrase>
        </SCall>
    )
}

export default Call