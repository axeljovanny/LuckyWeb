import styled from "styled-components"
import { above } from './index'
import { colors, fonts } from "../../utils/const"


export const SContenedorInicial = styled.div`
width: 100vw;
height: auto; 
background-color:${colors.white};    
display: flex;
justify-content:space-around;
align-items: center;
flex-direction: column;
${above.medium`  
  `}
${above.large`
  `}
`


export const SContenedorTitulo = styled.div`
width: 30%;
background-color:${colors.white};  
display: flex;
justify-content: center;
align-items: center;
padding: 5% 0;

h1{
font-family: ${fonts.reciaB};
color: ${colors.black};
font-size: 3.5em;

}

${above.medium`
    
  `}
${above.large`
padding: 2em 0;

h1{
font-size: 5em;
}
`}
`

export const SContenedorGrid = styled.div`
width: 90%;
background-color: none;
display: grid;
grid-template-columns:80% 20%;
grid-template-rows: repeat(6, auto);
grid-column-gap: 0px;
grid-row-gap: 0px;



${above.medium`
    
  `}
${above.large`
grid-template-columns: 30% 60% 10%;
grid-template-rows: repeat(3, auto);
grid-column-gap: 0px;
grid-row-gap: 0px;
padding: 3% 0 0;

  `}
`


export const SBranding = styled.div`

background-color:${colors.white};    
grid-area:  1 / 1 / 2 / 2;
border-top: solid 0.1em ${colors.black};
border-bottom: solid 0.1em ${colors.black};

display: flex;
justify-content:flex-start ;
align-items: center;
padding: 0 0 0 15%;

h2{
  font-family: ${fonts.reciaB};
  font-size: 2em;
  color: ${colors.black};
}
${above.medium`
    
  `}
${above.large`

border-bottom:none;
grid-area: 1 / 1 / 2 / 2;
display: flex;
justify-content:flex-start;
align-items: center;
padding: 0 0 0 15%;

h2{
  font-family: ${fonts.reciaB};
  font-size: 2em;
  color: ${colors.black};
}

  `}
`

export const SBrandingTexto = styled.div`

background-color:${colors.white};    
grid-area: 2 / 1 / 3 / 3;

display: flex;
justify-content:flex-start;
align-items: flex-start;
padding: 10% 5%;
flex-direction: column;

h3{
  font-family: ${fonts.monttMedium};
  font-size: 1.1em;
  color: ${colors.black};

}
p{
  font-family: ${fonts.monttMedium};
  font-size: 1em;
  color: ${colors.black};
  margin: 5px;
}

${above.medium`
    
  `}
${above.large`
background-color:${colors.white};    
grid-area: 1 / 2 / 2 / 3; 
border-top: solid 0.1em ${colors.black};
display: flex;
justify-content:flex-start;
padding: 5% 0 5% 10%;

h3{
  font-family: ${fonts.monttMedium};
  font-size: 1.1em;
  color: ${colors.black};
  `}
`

export const SBrandingMas = styled.div`

background-color:${colors.white};    
grid-area: 1 / 2 / 2 / 3;
border-top: solid 0.1em ${colors.black};
border-bottom: solid 0.1em ${colors.black};
display: flex;
justify-content: center;
align-items: center;



${above.medium`
    
  `}
${above.large`

border-bottom: none;
grid-area: 1 / 3 / 2 / 4;
border-top: solid 0.1em ${colors.black};
display: flex;
justify-content: center;
align-items: center;

  `}
`

export const SDesarrolloWeb = styled.div`

background-color:${colors.white};    
grid-area: 3 / 1 / 4 / 2; 
border-top: solid 0.1em ${colors.black};
border-bottom: none;

display: flex;
justify-content:flex-start;
align-items: center;
padding: 0 0 0 15%;

h2{
  font-family: ${fonts.reciaB};
  font-size: 2em;
  color: ${colors.black};
}


${above.medium`
    
  `}
${above.large`

border-bottom: none;

grid-area: 2 / 1 / 3 / 2;
  `}
`
export const SDesarrolloTexto = styled.div`

background-color:${colors.white};    
grid-area: 4 / 1 / 5 / 3;
border-top: solid 0.1em ${colors.black};
display: flex;
justify-content:flex-start;
align-items: flex-start;
padding: 10% 5%;
flex-direction: column;


h3{
  font-family: ${fonts.monttMedium};
  font-size: 1.1em;
  color: ${colors.black};

}
p{
  font-family: ${fonts.monttMedium};
  font-size: 1em;
  color: ${colors.black};
  margin: 5px;
}


${above.medium`
    
  `}
${above.large`
grid-area: 2 / 2 / 3 / 3;
padding: 5% 0 5% 10%;

  `}
`

export const SDesarrolloMas = styled.div`

background-color:${colors.white};    
grid-area: 3 / 2 / 4 / 3;
border-top: solid 0.1em ${colors.black};
display: flex;
justify-content: center;
align-items: center;



${above.medium`
    
  `}
${above.large`
grid-area: 2 / 3 / 3 / 4;
  `}
`

export const SCreacionContenido = styled.div`

background-color:${colors.white};    
grid-area: 5 / 1 / 6 / 2;
 border-top: solid 0.1em ${colors.black};
 border-bottom: solid 0.1em ${colors.black};
display: flex;
justify-content:flex-start;
align-items: center;
padding: 5% 0 0 15%;

h2{
  font-family: ${fonts.reciaB};
  font-size: 2em;
  color: ${colors.black};
}
 



${above.medium`
    
  `}
${above.large`
grid-area: 3 / 1 / 4 / 2;

  `}
`

export const SCreaciontexto = styled.div`

background-color:${colors.white};    
grid-area: 6 / 1 / 7 / 3;
display: flex;
justify-content:flex-start;
align-items: flex-start;
padding: 10% 5%;
flex-direction: column;

h3{
  font-family: ${fonts.monttMedium};
  font-size: 1.1em;
  color: ${colors.black};
}

p{
  font-family: ${fonts.monttMedium};
  font-size: 1em;
  color: ${colors.black};
  margin: 5px;
}



${above.medium`
    
  `}
${above.large`
border-top: solid 0.1em ${colors.black};
border-bottom: solid 0.1em ${colors.black};
grid-area: 3 / 2 / 4 / 3;
padding: 5% 0 5% 10%;

  `}
`


export const SCreacionMas= styled.div`

background-color:${colors.white};    
grid-area: 5 / 2 / 6 / 3;
border-top: solid 0.1em ${colors.black};
border-bottom: solid 0.1em ${colors.black};
display: flex;
justify-content: center;
align-items: center;



${above.medium`
    
  `}
${above.large`

grid-area: 3 / 3 / 4 / 4;

  `}
`

export const ShowBranding= styled.div`
    display: ${props => (props.open ? "flex" : "none")};
    flex-direction: column;
`
export const ShowContent= styled.div`
    display: ${props => (props.open ? "flex" : "none")};
    flex-direction: column;
`
export const ShowWeb= styled.div`
    display: ${props => (props.open ? "flex" : "none")};
    flex-direction: column;
`