import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    user-select: none;
  }

  body {
    background-color: #333;
    display: grid;
    place-items: center;
    height: 100vh;
  }
`