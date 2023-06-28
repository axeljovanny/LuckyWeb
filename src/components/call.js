
import React from "react"
import { SCall, SCallButtom, SCallFrase } from "../styles/js/call";






const Call = ({ siteTit }) => {
    return (
        <SCall>
            <SCallFrase>
                <h3>  <span>TRANSFORMA TU VISIÓN EN REALIDAD</span> </h3>  <h1>CUENTANOS MAS SOBRE TU PROYECTO...  </h1>
                <SCallButtom >  
                <a href="https://wa.me/5214181119941" rel="noreferrer" target="_blank">¡CONTÁCTANOS AHORA!</a> 
                </SCallButtom>
            </SCallFrase>
        </SCall>
    )
}

export default Call