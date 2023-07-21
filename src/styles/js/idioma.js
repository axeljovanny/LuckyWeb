import styled from "styled-components"
import { above } from './index'
import { colors, fonts } from "../../utils/const"
import { motion } from "framer-motion"

export const SContenedorIdioma = styled(motion.div)`
    display: none;

    ${above.medium`
        display: flex;
        flex-direction: row;
        width: 10vw;
        height: 10vw;
        position: absolute;
        z-index: 10;
        justify-content: center;
        align-items: center;
        top: 0px;
        right: 0px;
        font-family: ${fonts.reciaB};
        font-size: 23px;


 
    a {
        color: ${colors.black};   
        padding: 10px;     


    }
    `}
    ${above.large`
        top: 0px;
        right: 0px;
        font-size: 30px;
    `}
`;
