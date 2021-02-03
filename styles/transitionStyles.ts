import { css } from 'styled-components'

// https://reactcommunity.org/react-transition-group/css-transition

const transitionStyles = css`
  /* Fade */
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms var(--easing);
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms var(--easing);
  }

  /* Fade down */
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  /* Fade left */
  .fadeleft-enter {
    opacity: 0.01;
    transform: translateX(-20px);
    transition: opacity 250ms var(--easing), transform 250ms var(--easing);
  }

  .fadeleft-enter-active {
    opacity: 1;
    transform: translateX(0px);
    transition: opacity 250ms var(--easing), transform 250ms var(--easing);
  }

  /* Fade Rigth */
  .faderight-enter {
    opacity: 0.01;
    transform: translateX(20px);
    transition: opacity 250ms var(--easing), transform 250ms var(--easing);
  }

  .faderight-enter-active {
    opacity: 1;
    transform: translateX(0px);
    transition: opacity 250ms var(--easing), transform 250ms var(--easing);
  }

  /* Fade up */
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
`

export default transitionStyles
