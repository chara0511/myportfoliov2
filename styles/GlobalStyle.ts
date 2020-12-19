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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  h1 {
    font-size: clamp(
      ${({ theme }) => theme.fontSizes.lg},
      5vw,
      ${({ theme }) => theme.fontSizes['2xl']}
    );
    line-height: ${({ theme }) => theme.lineHeights.lg};
  }

  h2 {
    font-size: clamp(
      ${({ theme }) => theme.fontSizes['2xl']},
      7vw,
      ${({ theme }) => theme.fontSizes['5xl']}
    );
    line-height: ${({ theme }) => theme.lineHeights['2xl']};
  }

  h3 {
    font-size: clamp(
      ${({ theme }) => theme.fontSizes['4xl']},
      8vw,
      ${({ theme }) => theme.fontSizes['7xl']}
    );
    line-height: ${({ theme }) => theme.lineHeights['4xl']};
  }

  h4 {
    font-size: clamp(
      ${({ theme }) => theme.fontSizes['3xl']},
      7vw,
      ${({ theme }) => theme.fontSizes['6xl']}
    );
    line-height: ${({ theme }) => theme.lineHeights['3xl']};
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

  small {
  font-size: 80%;
}
`

export default GlobalStyle
