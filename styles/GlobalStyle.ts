import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    color: ${({ theme }) => theme.colors.text};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: ${({ theme }) => theme.lineHeights.base};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
  }

  body {
    font-family: inherit;
    line-height: inherit;
    margin:0;
  }

   a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    background-color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      position: relative;      
    }
  }
`

export default GlobalStyle
