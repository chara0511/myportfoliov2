import styled from 'styled-components'
import { breakpoints, mixins } from 'styles'

const StyledContent = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0;
  flex-direction: column;

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
    color: ${({ theme }) => theme.colors.white};
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

  p {
    margin-top: 1rem;
  }

  ${mixins.flexLeft};

  @media (min-width: ${breakpoints.sm}) {
    & h1,
    & h2,
    & h3,
    & h4 {
      line-height: ${({ theme }) => theme.lineHeights['5xl']};
    }
  }
`

const Hero = () => {
  return (
    <StyledContent>
      <h1>Hey there 👋</h1>
      <h2>I&apos;m</h2>
      <h3>Juan Carlos Chara</h3>
      <h4>I code things on the web.</h4>
      <p>
        I&apos;m a Peruvian based front‑end developer focused on crafting clean and user‑friendly
        experiences, I&apos;m passionate about building excellent software that improves the lives
        of those around me.
      </p>
    </StyledContent>
  )
}

export default Hero
