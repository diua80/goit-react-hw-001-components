import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
export const GlobalStyled = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
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
