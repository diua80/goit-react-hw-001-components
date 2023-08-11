// @import-normalize;
import { createGlobalStyle } from 'styled-components';
export const GlobalStyled = createGlobalStyle`
body {
    background-color: #ffde4712;
    margin: 0;
    padding: 0;
    width: 1158px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
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
  padding-left: 0;
}
h1,h2,h3,h4,p{
    margin-top: 0;
    margin-bottom: 0;
}
`;
