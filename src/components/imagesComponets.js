import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/css/rediseño.css"


//TODO: Poner bien las descripciones de los ALT en cada imagen

export function IFondoHeader() {
    return <StaticImage
    src="../images/Fondos/Fondo Claro.jpg"
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
    src="../images/Stickers/sticker_borrego.png"
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
    src="../images/Stickers/sticker_lap.png"
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
    src="../images/Stickers/sticker_corazon.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='90'
    formats={['auto', 'webp', 'avif']}
    className="imgCorazon"

    />

}



export function ILogoTrebol() {
    return <StaticImage
    src="../images/Logos/Isotipo_Black.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='90'
    formats={['auto', 'webp', 'avif']}
    className="imgILogoTrebol"
    />
}

export function ILogoTrebolNav() {
    return <StaticImage
    src="../images/Logos/Isotipo_Black.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='90'
    formats={['auto', 'webp', 'avif']}
    className="imgILogoTrebolNav"
    />
}


export function IGrafiiti() {
    return <StaticImage
    src="../images/Stickers/Grafiiti 1.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='90'
    formats={['auto', 'webp', 'avif']}
    className="imgGrafiiti"
    />

}

export function INube() {
    return <StaticImage
    src="../images/Stickers/Sticker_nube.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='90'
    formats={['auto', 'webp', 'avif']}
    className="imgNube"
   

    />

}


export function IBala() {
    return <StaticImage
    src="../images/Stickers/sticker_bala.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='90'
    formats={['auto', 'webp', 'avif']}
    className="imgBala"
   

    />

}










/// FOOTER



export function IStickerlogo () {
    return <StaticImage
    src="../images/Stickers/logoSticker2.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='80'
    formats={['auto', 'webp', 'avif']}
    className="imglogo"
    imgClassName=""

    />

}


export function IStickerFoco () {
    return <StaticImage
    src="../images/Stickers/Foco.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='80'
    formats={['auto', 'webp', 'avif']}
    className="imgfoco"
    imgClassName=""

    />

}

export function IStickerMesa() {
    return <StaticImage
    src="../images/Stickers/Mesa de trabajo 2.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='80'
    formats={['auto', 'webp', 'avif']}
    className="imgMesa"
    imgClassName=""

    />

}


export function IStickerTrebol2() {
    return <StaticImage
    src="../images/Stickers/trevol2.png"
    alt="Fondo de nuestro header"
    loading="eager"
    placeholder="blurred"
    layout="fullWidth"
    quality='80'
    formats={['auto', 'webp', 'avif']}
    className="imgtrebol2"
    imgClassName=""

    />

}
