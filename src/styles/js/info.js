import styled from "styled-components";
import { above } from "./index";
import { colors, fonts } from "../../utils/const";

export const SInfo = styled.div`
  width: 100vw; 
  height: 70vh;
  background-color: ${colors.info};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${above.medium`
    
  `}
  ${above.large`
  width: 100vw; 
  height: 80vh;
  `}
`;
