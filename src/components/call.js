
import React from "react"
import { SCall, SCallButtom, SCallFrase } from "../styles/js/call";
import { Trans} from 'gatsby-plugin-react-i18next';

const Call = ({ siteTit }) => {
    
    return (
        <SCall>
            <SCallFrase>
                <h3>  
                    <span><Trans i18nKey="CALL_SUB_CTA"/></span> 
                </h3>  
                <h1><Trans i18nKey="CALL_CTA"/></h1>
                <SCallButtom >  
                <a href="https://wa.me/5214181119941" rel="noreferrer" target="_blank"><Trans i18nKey="CALL_CONTACT"/></a> 
                </SCallButtom>
            </SCallFrase>
        </SCall>
    )
}

export default Call