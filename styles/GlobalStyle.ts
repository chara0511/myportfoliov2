import { createGlobalStyle } from 'styled-components'
import breakpoints from './breakpoints'

const GlobalStyle = createGlobalStyle`
  html {
    color: ${({ theme }) => theme.colors.text};
    font-family:${({ theme }) => theme.fontDefault};
    background-color: ${({ theme }) => theme.colors.primaryBg};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: ${({ theme }) => theme.lineHeights.base};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
   

    @media (min-width: ${breakpoints.xl}) {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
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
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  h1, h2 {
    line-height: ${({ theme }) => theme.lineHeights['2xl']};
  }
  
  h3 {
    line-height: ${({ theme }) => theme.lineHeights.xl};
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${({ theme }) => theme.transition};

    &:hover,
    &:focus {
      color: #3a96dd;
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    background-color: inherit;
    padding: 0;
  }

  img {
    border-style: none;
  }

  p {
    margin: 0;
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

  svg {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
`

export default GlobalStyle
