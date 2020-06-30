import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*:root {
  --backgroundColor: #fff;
  --textColor: rgb(76, 86, 106);
  --defaultFont: 'Quicksand', serif;
  --defaultFontSize: 1.7rem;
  --defaultLineHeight: 1.6;
  --distincitveFont: 'Jura', sans-serif;
}

*,
*::after,
*::before {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

html{
  font-size: 62.5%;
  width: 100%;
  height: 100%;
}

body {
  box-sizing: border-box;
  background-color: var(--backgroundColor);
  color: var(--textColor);
  font-family: var(--defaultFont);
  font-size: var(--defaultFontSize);
  line-height: var(--defaultLineHeight);
}

`

export default GlobalStyle
