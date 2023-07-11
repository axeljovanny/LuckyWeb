import styled from "styled-components"
import { above } from './index'
import { colors, fonts } from "../../utils/const"
import { motion } from "framer-motion"

export const SContenedorIdioma = styled(motion.div)`

  display: flex;
  flex-direction: row;
  height: 10%;
  width: 100vw;
  position: absolute;
  z-index: 11;
  background: ${colors.none};
  justify-content: right;
  top: -100px;
  right: -5px;
  
  ${above.large` 
    
  `}
`;

export const SIdioma = styled.div`
    width: 50%;    
    height: 100%;    
    background: none;  
    display: flex;  
    justify-content:center;
    align-items:center ;
    flex-direction: row;
    position: relative;
    font-family: ${fonts.reciaB};
    font-size: 33px;

    a {
        background-color: none;
        margin: 3%;
        font-family: ${fonts.reciaB};
        color: ${colors.black};
        font-size: 25px;
    }

    ${above.large`
        width: 15%;     
        padding: 0;
        justify-content: flex-start;
        transform: translateY(-3%);
        font-size: 30px;
    
        a{
        margin: 3%;
        font-size: 25px;
        color: ${colors.black};
        }
    `}
`;