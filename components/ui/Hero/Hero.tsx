import styled from 'styled-components'
import { I18nWidget } from '@components/common'
import { breakpoints, mixins } from 'styles'
import { FC } from 'react'
import { Content } from 'pages'

const StyledContent = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 5rem 0;
  flex-direction: column;
  position: relative;

  & h1 {
    font-size: clamp(
      ${({ theme }) => theme.fontSizes.lg},
      5vw,
      ${({ theme }) => theme.fontSizes['2xl']}
    );
    line-height: ${({ theme }) => theme.lineHeights.lg};
  }

  & h2 {
    font-size: clamp(
      ${({ theme }) => theme.fontSizes['2xl']},
      7vw,
      ${({ theme }) => theme.fontSizes['5xl']}
    );
    line-height: ${({ theme }) => theme.lineHeights['2xl']};
    text-transform: capitalize;
  }

  & h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(
      ${({ theme }) => theme.fontSizes['4xl']},
      8vw,
      ${({ theme }) => theme.fontSizes['7xl']}
    );
    line-height: ${({ theme }) => theme.lineHeights['4xl']};
    text-transform: capitalize;
  }

  & h4 {
    font-size: clamp(
      ${({ theme }) => theme.fontSizes['3xl']},
      7vw,
      ${({ theme }) => theme.fontSizes['6xl']}
    );
    line-height: ${({ theme }) => theme.lineHeights['3xl']};
  }

  & p {
    margin-top: 1rem;
    max-width: 400px;
    width: 100%;
  }

  ${mixins.flexLeft};

  @media (min-width: ${breakpoints.sm}) {
    & h1,
    & h2,
    & h3,
    & h4 {
      line-height: ${({ theme }) => theme.lineHeights['5xl']};
    }

    & p {
      max-width: 450px;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    & p {
      max-width: 500px;
    }
  }

  @media (min-width: ${breakpoints.lg}) {
    & p {
      max-width: 550px;
    }
  }

  @media (min-width: ${breakpoints.xl}) {
    & p {
      max-width: 600px;
    }
  }
`
interface Props {
  hero: Content
}

const Hero: FC<Props> = ({ hero }) => {
  return (
    <StyledContent>
      <h1>{hero.headerBefore}</h1>
      <h2>{hero.headerAfter}</h2>
      <h3>{hero.header}</h3>
      <h4>{hero.body}</h4>
      <p>{hero.footer}</p>
      <I18nWidget />
    </StyledContent>
  )
}

export default Hero
