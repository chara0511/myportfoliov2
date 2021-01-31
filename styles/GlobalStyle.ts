import { createGlobalStyle } from 'styled-components'
import breakpoints from './breakpoints'
import transitionStyles from './transitionStyles'

const GlobalStyle = createGlobalStyle`

  :root {
    --curious-blue: #3a96dd; 
    --big-stone: #14273d;
    --blue-zodiac: #132d4d;
    --polo-blue: #97B9D1;
    --athens-gray: #f8f9fa;

    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    --font-sans: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;

    --card-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    --image-shadow: 0px 0px 32px 8px rgba(0, 0, 0, 0.3);
    --note-shadow: 12px 12px 24px rgba(0, 0, 0, 0.5);
    --sidebar-shadow: 0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);

    --easing: cubic-bezier(0.65, 0.05, 0.36, 1);

    --rounded-pill: 16px;
  }

  html {
    color: var(--polo-blue);
    font-family:var(--font-sans);
    background-color: var(--big-stone);
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
    border: 0 solid var(--athens-gray);
  }

  body {
    font-family: inherit;
    line-height: inherit;
    margin: 0;
    text-rendering: optimizeLegibility;
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
      color: var(--curious-blue);
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

  ${transitionStyles};
`

export default GlobalStyle
