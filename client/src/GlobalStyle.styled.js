import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Tahoma', sans-serif;
}

html {
  font-size: 50%;
}

@media (min-width: 1100px) {
  html {
    font-size: 62.5%;
  }
}

body{
  --color-primary: #611f69;
  --color-primary-dark: #3a133f;
  --color-secondary: #3a90bb;
  --color-grey-light: #f5f5f5;
}

img{
  max-width: 100%;
  height: auto;
}
`;

export default GlobalStyle;
