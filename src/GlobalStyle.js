import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
margin: 0;
}

ul{
list-style: none;
padding: 0;
}

li {
border: 1px solid #25fa25ad;
width: 400px;
display: flex;
justify-content: space-between;
padding: 0 5px;
margin-bottom: 5px;
}

button{
width: auto;
border-radius: 10px;
padding: 10px 7px;
border: none;
background-color: #25fa25ad;
}

input[type="checkbox"] {
  accent-color: #25fa25ad;
}

input {
border: 2px solid #15b515ad;
}
`