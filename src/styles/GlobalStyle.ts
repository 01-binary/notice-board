import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root,
  #root > * {
    height: 100%;
    background-color: #f0f1f3;
    min-width: 420px;
    box-sizing: border-box;
  }
`;
export default GlobalStyle;
