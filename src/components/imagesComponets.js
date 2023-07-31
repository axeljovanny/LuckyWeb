import React from "react"
import "../styles/css/rediseño.css"
import { StaticImage } from "gatsby-plugin-image";

//TODO: Poner bien las descripciones de los ALT en cada imagen

export function IFondoHeader() {
    return <StaticImage
        src="../images/Fondos/Fondo Claro.jpg"
        alt="Fondo de header, imagen de textura de papel"
        layout="fullWidth"
        loading="eager"
        placeholder="blurred"
        quality='100'
        formats={['auto', 'webp']}
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
        alt="Sticker de Borrego morado"
        loading="eager"
        placeholder="blurred"
        quality='90'
        formats={['auto', 'webp']}
        className='imgBorrego'
        style={{
            position: "absolute"
        }}

    />

}


export function IStickerLap() {
    return <StaticImage
        src="../images/Stickers/sticker_lap.png"
        alt="Sticker de laptop ilustrado"
        loading="eager"
        placeholder="blurred"
        quality='90'
        formats={['auto', 'webp']}
        className='imgLap'
        style={{
            position: "absolute"
        }}
    />

}

export function IStickerCorazon(isMobile) {
        return (
            <StaticImage
                src="../images/Stickers/sticker_corazon.png"
                alt="Sticker Corazón ilustrado"
                loading="eager"
                placeholder="blurred"
                quality='70'
                formats={['auto', 'webp']}
                className='imgCorazon'
                style={{
                    position: "absolute"
                }}
            />
        );
}

export function ILogoTrebol() {
    return <StaticImage
        src="../images/Logos/Isotipo_Black.png"
        alt="Isotipo trebol Lucky Ducky Studio"
        loading="eager"
        placeholder="blurred"
        layout="fullWidth"
        quality='90'
        formats={['auto', 'webp']}
        className="imgILogoTrebol"
        style={{
            position: "absolute"
        }}
    />
}

export function ILogoTrebolNav() {
    return <StaticImage
        src="../images/Logos/Isotipo_Black.png"
        alt="Isotipo trebol Lucky Ducky Studio"
        loading="eager"
        placeholder="blurred"
        layout="fullWidth"
        quality='90'
        formats={['auto', 'webp']}
        className="imgILogoTrebolNav"
        style={{
            position: "absolute"
        }}
    />
}


export function IGrafiiti(isMobile) {

    return (
        <StaticImage
            src="../images/Stickers/Grafiiti 1.png"
            alt="Graffiti intervención tacha la palabra experiencia y agrega la palabra Pasión"
            loading="eager"
            placeholder="blurred"
            quality={80}
            formats={['auto', 'webp']}
            className='imgGraf'
            style={{
                position: "absolute"
            }}
        />
    );

}

export function INube() {
    return <StaticImage
        src="../images/Stickers/sticker_nube.png"
        alt="Sticker Nube ilustrada"
        loading="eager"
        placeholder="blurred"
        layout="fullWidth"
        quality='90'
        formats={['auto', 'webp']}
        className="imgNube"
        style={{
            position: "absolute"
        }}


    />

}


export function IBala() {
    return <StaticImage
        src="../images/Stickers/sticker_bala.png"
        alt="Sticker Bala ilustrada"
        loading="eager"
        placeholder="blurred"
        layout="fullWidth"
        quality='90'
        formats={['auto', 'webp']}
        className="imgBala"
        style={{
            position: "absolute"
        }}


    />

}










/// FOOTER



export function IStickerlogo() {
    return <StaticImage
        src="../images/Stickers/logoSticker2.png"
        alt="Sticker Logo Lucky Ducky Studio"
        loading="eager"
        placeholder="blurred"
        layout="fullWidth"
        quality='80'
        formats={['auto', 'webp']}
        className="imglogo"

    />

}


export function IStickerFoco() {
    return <StaticImage
        src="../images/Stickers/Foco.png"
        alt="Sticker Foco ilustrado"
        loading="eager"
        placeholder="blurred"
        layout="fullWidth"
        quality='80'
        formats={['auto', 'webp']}
        className="imgfoco"
        style={{
            position: "absolute"
        }}
    />

}

export function IStickerMesa() {
    return <StaticImage
        src="../images/Stickers/Mesa de trabajo 2.png"
        alt="Sticker pato ilustrado"
        loading="eager"
        placeholder="blurred"
        layout="fullWidth"
        quality='80'
        formats={['auto', 'webp']}
        className="imgMesa"
        style={{
            position: "absolute"
        }}
    />

}


export function IStickerTrebol2() {
    return <StaticImage
        src="../images/Stickers/trevol2.png"
        alt="Sticker trebol ilustrado"
        loading="eager"
        placeholder="blurred"
        layout="fullWidth"
        quality='80'
        formats={['auto', 'webp']}
        className="imgtrebol2"
        style={{
            position: "absolute"
        }}
    />

}


export function IPortafolio() {
    return <StaticImage
        src="../images/Fondos/Portafolio.jpg"
        alt="Imagen que menciona que se esta trabajando en un video perron de portafolio"
        loading="eager"
        placeholder="blurred"
        layout="fullWidth"
        quality='80'
        formats={['auto', 'webp']}
        className="portafolio"

    />

}

export function IPortafolioMovil() {
    return <StaticImage
        src="../images/Fondos/PortafolioMovil.jpg"
        alt="Imagen que menciona que se esta trabajando en un video perron de portafolio"
        loading="eager"
        placeholder="blurred"
        layout="fullWidth"
        quality='80'
        formats={['auto', 'webp']}
        className="portafoliomovil"

    />

}