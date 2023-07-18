import { useMediaQuery } from 'react-responsive';
import React from "react"
import "../styles/css/rediseño.css"
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

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
        style={{
            position: "absolute"
        }}
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
        style={{
            position: "absolute"
        }}

    />

}

export function IStickerCorazon(isMobile) {
    if (isMobile) {
        return (
            <StaticImage
                src="../images/Stickers/sticker_corazon.png"
                alt="Fondo de nuestro header"
                loading="eager"
                placeholder="blurred"
                layout='constrained'
                quality='70'
                formats={['auto', 'webp', 'avif']}
                className="imgCorazon"
                style={{
                    position: "absolute"
                }}
            />
        );
    }
    return null;

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
        style={{
            position: "absolute"
        }}
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
        style={{
            position: "absolute"
        }}
    />
}


export function IGrafiiti(isMobile) {

    return (
        <StaticImage
            src="../images/Stickers/Grafiiti 1.png"
            alt="Fondo de nuestro header"
            loading="eager"
            placeholder="blurred"
            quality={70}
            formats={['auto', 'webp', 'avif']}
            width={isMobile ? 220 : 500}
            height={isMobile ? 60 : 60}
            style={{
                position: "absolute",
                bottom: "-20%"
            }}
            objectFit="contain"
        />
    );

}

export function INube() {
    return <StaticImage
        src="../images/Stickers/sticker_nube.png"
        alt="Fondo de nuestro header"
        loading="eager"
        placeholder="blurred"
        layout="fullWidth"
        quality='90'
        formats={['auto', 'webp', 'avif']}
        className="imgNube"
        style={{
            position: "absolute"
        }}


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
        style={{
            position: "absolute"
        }}


    />

}










/// FOOTER



export function IStickerlogo() {
    return <StaticImage
        src="../images/Stickers/logoSticker2.png"
        alt="Fondo de nuestro header"
        loading="eager"
        placeholder="blurred"
        layout="fullWidth"
        quality='80'
        formats={['auto', 'webp', 'avif']}
        className="imglogo"

    />

}


export function IStickerFoco() {
    return <StaticImage
        src="../images/Stickers/Foco.png"
        alt="Fondo de nuestro header"
        loading="eager"
        placeholder="blurred"
        layout="fullWidth"
        quality='80'
        formats={['auto', 'webp', 'avif']}
        className="imgfoco"
        style={{
            position: "absolute"
        }}
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
        style={{
            position: "absolute"
        }}
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
        style={{
            position: "absolute"
        }}
    />

}


export function IPortafolio() {
    return <StaticImage
        src="../images/Fondos/Portafolio.jpg"
        alt="Fondo de nuestro header"
        loading="eager"
        placeholder="blurred"
        layout="fullWidth"
        quality='80'
        formats={['auto', 'webp', 'avif']}
        className="portafolio"

    />

}

export function IPortafolioMovil() {
    return <StaticImage
        src="../images/Fondos/PortafolioMovil.jpg"
        alt="Fondo de nuestro header"
        loading="eager"
        placeholder="blurred"
        layout="fullWidth"
        quality='80'
        formats={['auto', 'webp', 'avif']}
        className="portafoliomovil"

    />

}