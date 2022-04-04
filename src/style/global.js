import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html,
body,
header,
div,
ul,
li,
a,
p,
h1,
h2,
h3,
figure,
nav,
span,
footer {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  text-decoration: none;
  list-style: none;
  font-family: sans-serif;
}

button{
  cursor: pointer;
}

:root{
  /* variáveis de cores */
  --main-color: #0f0f14;
  --light-gray: #ceccca;
  overflow-x: hidden;
}

body{
  /* cores do body */
  min-width: 320px;
  width: 100vw;
  hight: 100vh;
  overflow-x: hidden;
  
 
 
}

body, input, button{
  /* font-family e fontsize */
  
}

p{
  font-family: 'Roboto', sans-serif;
  color: var(--light-gray);
}

h1, h2, h3, h4{
  /* font-family */
  font-family: 'Bebas Neue', cursive;
  color: var(--light-gray);
}

a{
  text-decoration: none;
}

`;

export default GlobalStyle;
