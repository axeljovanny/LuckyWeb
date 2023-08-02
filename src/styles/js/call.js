import styled from "styled-components";
import { above } from "./index";
import { colors, fonts } from "../../utils/const";
import { motion } from "framer-motion";

export const SCall = styled.div`
  width: 100vw;
  height: 60vh;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15% 0 15% 0;

  ${above.medium`    
  `}
  ${above.large`  
    height: 30vh;
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
  color: #fff;
  text-align: center;
  letter-spacing: 0.5px;
  background-color: #000;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 24px 30px;
  display: flex;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.2);
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 5%;

  a {
    color: ${colors.white};
    font-family: ${fonts.montBlack};
    font-size: 1em;
  }

  ${above.medium`
    padding-left: 60px;
    padding-right: 60px;    
    margin-top: 1%;
    
  `}
  ${above.large`
    padding-left: 60px;
    padding-right: 60px;    
    margin-top: 1.5%;
  `}
`;

export const STextGuarantee = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${fonts.handOfSean};
  color: ${colors.black};
  font-size: 0.8em;
  margin-top: 8%;

  ${above.medium`
  
  `}
  ${above.large`
    margin-top: 2%;
    font-size: 1em;
  `}
`;
