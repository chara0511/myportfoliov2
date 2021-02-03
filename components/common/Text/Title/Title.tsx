import { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { mixins } from 'styles'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const StyledTitle = styled.div`
  letter-spacing: 0.15rem;
  text-transform: capitalize;
  flex-direction: column;
  width: 100%;

  ${mixins.flexCenter};
`

const StyledBorders = styled.div`
  & > span {
    margin-left: 1.75rem;
    display: block;
    width: 45px;
    height: 2px;
    background-color: var(--curious-blue);
    border-radius: ${({ theme }) => theme.borderRadius.default};
  }

  & > span:first-child {
    background-color: var(--curious-blue);
    margin: 0.25rem 0 0.75rem;
  }
`

const StyledFadeIn = styled.span`
  animation: 1000ms ${fadeIn} ease-in-out infinite alternate;
  color: var(--curious-blue);
  font-size: inherit;
`

const Title: FC<{ title?: string }> = ({ title, children }) => {
  return (
    <StyledTitle>
      <h2>
        {title}
        {title && <StyledFadeIn>.</StyledFadeIn>}
      </h2>
      {children}

      <StyledBorders>
        <span />
        <span />
      </StyledBorders>
    </StyledTitle>
  )
}

export default Title
