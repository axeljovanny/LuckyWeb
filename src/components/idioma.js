import * as React from "react";
import { SIdioma, SOverlay } from "../styles/js/idioma";
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

export const Idiomas = ({ siteTitle }) => {
    const { languages, originalPath, i18n } = useI18next();

    console.log(languages);

    return (  
        <SOverlay>  
            <SIdioma>
                {languages.map((lng) => (  
                    <Link key={lng} to={originalPath} language={lng} style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }}>
                    {lng}
                    </Link>
                ))}
            </SIdioma>
        </SOverlay>  
    );
};