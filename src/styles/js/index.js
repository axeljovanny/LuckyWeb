import { css, createGlobalStyle } from "styled-components";
import { colors } from "../../utils/const";

export const size = {
  small: 400,
  medium: 480,
  large: 1140,
  xlarge: 1400,
};

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const aboveMax = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const GlobalStyles = createGlobalStyle`
body {
  scroll-behavior: smooth;
  padding: 0;
  margin: 0;
  position: relative;
  background-color: ${colors.white};
}
a {
  text-decoration: none;
}
ul {
  margin: 0 auto;
  list-style-type: none;
}

::-webkit-scrollbar {
  display: none;
}
button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
`;
