import styled from "styled-components"
import { above } from './index'
import { colors, fonts } from "../../utils/const"
import { motion } from "framer-motion"

export const SContenedorIdioma = styled(motion.div)`
    display: flex;
    flex-direction: row;
    width: 100vw;
    position: absolute;
    z-index: 11;
    background: ${colors.none};
    justify-content: right;
    top: 60px;
    right: 50px;

    ${above.medium`
        top: 60px;
        right: 80px;
    `}
    ${above.large`
        top: 60px;
        right: 90px;
    `}
`;

export const SIdioma = styled.div`
    font-family: ${fonts.reciaB};
    font-size: 23px;

    a {
        color: ${colors.black};        
        padding-left: 20%;
    }

    ${above.medium`
        font-size: 30px;

        a{
            padding-left: 30%;
        }
    `}
    ${above.large`
        font-size: 30px;

        a{
            padding-left: 30%;
        }
    `}
`;