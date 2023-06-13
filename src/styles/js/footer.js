import styled from "styled-components"
import { above } from './index'
import { colors, fonts, sizes } from "../../utils/const"

export const StyledLine = styled.div`
display:none;


  ${above.medium`
  `}
  ${above.large`
  display:flex;
  z-index: 11;
    width: 5vw;
    height: ${props => props.footer ? '' : '100%'};
    position:absolute;
  border-right: 0.5mm inset ${props => props.white ? colors.white : colors.black};    
  height: ${props => props.footer ? '35vh' : '100vh'};
  `}

`
export const StyledIcons = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    height: 25%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${props => props.footer ? '0 10%' : '0 10%'};

  
    svg{
        width: ${props => props.footer ? '90%' : '90%'};
        padding: 2% 3%;


    }
    
    ${above.large`
    padding-top: 5vh;
    display: ${props => props.footer ? 'none' : 'flex'};
    height: 50%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    svg{
        width: 60%;
        
    }
  `}
`



// Revisar 
export const StyledFooter = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 5% 0;
  height: auto;
  background: ${colors.black};
  ${above.medium`
      
  `}
  ${above.large`
  flex-flow: row;
  width: 100vw;
  height: 50vh;
  padding: 0;
  `}
`
export const FooterText = styled.div`
  display: flex;
  width: 80%;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
  /* background: ${colors.white}; */
  padding-left: 0;
  gap: 0;

  ${above.medium`
      
  `}
  ${above.large`
  align-items: flex-end;
  width: 70vw;
  gap: 10vh;
  `}
`
export const FooterImage = styled.div`
  display: ${props => props.movil ? 'flex' : 'none'};  
  justify-content: center;
  align-items: flex-start;
  background: ${colors.black};
  width: 100%;

  ${above.medium`
  width: 50%;
      
  `}
  ${above.large`
  width: 20%;
  display: ${props => props.web ? 'flex' : 'none'}; 
  justify-content: center;
  align-items: flex-start; 

  
  `}
`

export const FooterContact = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-flow:column wrap ;
  background: ${colors.black};
  ${above.medium`
      
  `}
  ${above.large`
  flex-flow: row wrap ;
  `}
`
export const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  width: auto;
  background: ${colors.black};
  ${above.medium`
      
  `}
  ${above.large`
  width: 80%;
  `}
`

export const Text = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  justify-content: center;
  width: 100%;
  color: ${colors.white};
  h3{
    font-family:  ${fonts.montLight};
    color: ${colors.white} ;
    font-size: ${sizes.tittle};
  }

  p{
  font-family:  ${fonts.montLight};
    color: ${colors.white} ;
    font-size: ${sizes.text};
    margin: 0.2em 0 ;
}


  ${above.medium`
      
  `}
  ${above.large`
  width: 50%;
  align-items: flex-end;

  h3{
    font-family:  ${fonts.montLight};
    color: ${colors.white} ;
    font-size: ${sizes.tittle};
  }

  p{
    margin: 0.2em 0 ;
    font-family:  ${fonts.montLight};
    color: ${colors.white} ;
    font-size: ${sizes.text};
}
  `}
`

export const Social = styled.div`
  display: none;

  a{
    display: none;
  }
  ${above.medium`
      
  `}
  ${above.large`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  a{
    display: flex;
    font-family:  ${fonts.montLight};
      color: ${colors.white} ;
      font-size: ${sizes.text};
    }
  `}
  
`