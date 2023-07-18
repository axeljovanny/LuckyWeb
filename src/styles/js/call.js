import styled from "styled-components"
import { above } from './index'
import { colors, fonts } from "../../utils/const"
import { motion } from "framer-motion";

export const SCall = styled.div`
  width: 100%;
  height: auto;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15% 0 15% 0;

  ${above.medium`    
  `}
  ${above.large`  
    margin: 8% 0 8% 0;
  `}
`;

export const SCallFrase = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${fonts.reciaB};
  color: ${colors.black};

  h1 {
    font-size: 4em;
    text-align: center;
    letter-spacing: 1px;
    margin: 0 0 5%;
  }

  h3 {
    font-size: 1.5em;
  }

  ${above.medium`
    
  `}
  ${above.large`
    height: 30%;

    h1{      
      font-size: 4em;      
      letter-spacing: 1px;
      padding: 0  10% ;
      margin: 0 0 2%;
    }
  `}
`;

export const SCallButtom = styled.div`
  width: 90%;
  height: auto;
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${colors.black};
  /* margin-top: 5%; */

  a {
    color: ${colors.black};
    font-family: ${fonts.montBlack};
    font-size: 1em;
  }

  ${above.medium`
    width: 50%;
  `}
  ${above.large`
    width: 30%;
    height: 8%;
    // margin-top: 0%; 
  `}
`;
