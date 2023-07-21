import * as React from "react";
import { SContenedorIdioma } from "../styles/js/idioma";
import {useI18next, Link} from 'gatsby-plugin-react-i18next';


export const Idiomas = ({ siteTitle }) => {
    const { languages, originalPath, i18n } = useI18next();
      
    return (  
        <SContenedorIdioma>  
                {languages.map((lng) => (  
                    <Link key={lng} to={originalPath} language={lng} style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }}>
                    {lng}
                    </Link>
                ))}
        </SContenedorIdioma>  
    );
  };