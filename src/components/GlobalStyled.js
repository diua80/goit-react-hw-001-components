// @import-normalize;
import { createGlobalStyle } from 'styled-components';
export const GlobalStyled = createGlobalStyle`
body {
    background-color: #ffde4712;
    margin: 0;
    padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
a {
  text-decoration: none;
  color: inherit;
}
ul, ol {
  list-style: none;
}
`;
