import styled from "styled-components";
import { above } from "./index";
import { colors, fonts } from "../../utils/const";

export const SInfo = styled.div`
  width: 100vw; 
  height: 80vh;
  background-color: ${colors.white}; /* largo de mi pagina */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${above.medium`
    
  `}
  ${above.large`
  `}
`;
