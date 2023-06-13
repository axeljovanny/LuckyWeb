import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/css/rediseño.css"


//TODO: Poner bien las descripciones de los ALT en cada imagen

export function IFondoHeader() {
    return <StaticImage
    src="../images/rediseño/Fondos/Fondo Claro.jpg"
    alt="Fondo de nuestro header"
    layout="fullWidth"
    loading="eager"
    placeholder="blurred"
    quality='100'
    formats={['auto', 'webp', 'avif']}
    style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    />

}


export function IStickerBorrego() {
    return <StaticImage
    src="../images/rediseño/Stickers/sticker_borrego.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='80'
    formats={['auto', 'webp', 'avif']}
    className="imgBorrego"
    imgClassName=""

    />

}


export function IStickerLap() {
    return <StaticImage
    src="../images/rediseño/Stickers/sticker_lap.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='90'
    formats={['auto', 'webp', 'avif']}
    className="imgLap"

    />

}



export function IStickerCorazon() {
    return <StaticImage
    src="../images/rediseño/Stickers/sticker_corazon.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='90'
    formats={['auto', 'webp', 'avif']}
    className="imgCorazon"

    />

}



export function IconoMenu() {
    return <StaticImage
    src="../images/rediseño/iconos/Menu.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='90'
    formats={['auto', 'webp', 'avif']}
    className="imgMenu"

    />

}



export function ILogoTrebol() {
    return <StaticImage
    src="../images/rediseño/logos/Isotipo_Black.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='90'
    formats={['auto', 'webp', 'avif']}
    className="imgILogoTrebol"

    />

}


export function IFacebook() {
    return <StaticImage
    src="../images/rediseño/iconos/Facebook.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='90'
    formats={['auto', 'webp', 'avif']}
    className="imgFacebook"

    />

}

export function Instagram() {
    return <StaticImage
    src="../images/rediseño/iconos/Instagram.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='90'
    formats={['auto', 'webp', 'avif']}
    className="imgInstagram"

    />

}

export function IWhatsApp() {
    return <StaticImage
    src="../images/rediseño/iconos/WhatsApp.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='90'
    formats={['auto', 'webp', 'avif']}
    className="imgWhatsApp"

    />

}


export function IGrafiiti() {
    return <StaticImage
    src="../images/rediseño/Stickers/Grafiiti 1.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='90'
    formats={['auto', 'webp', 'avif']}
    className="imgGrafiiti"
    style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}

    />

}

/// FOOTER
export function ImgFooter() {
    return <StaticImage
        src="../images/rediseño/Footer/footer.png"
        alt="lucky ducky studio art"
        loading="lazy"
        placeholder="blurred"
        layout="fullWidth"
        quality='90'
        formats={['auto', 'webp', 'avif']}
        className="imgFooter"
    />

}

