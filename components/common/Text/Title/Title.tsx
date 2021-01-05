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
  flex-direction: column;

  ${mixins.flexCenter};

  & h2 {
    text-transform: capitalize;
  }

  & .borders {
    & .border {
      margin-left: 1.75rem;
      display: block;
      width: 45px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.fill};
      border-radius: ${({ theme }) => theme.borderRadius.default};
    }

    & .border:first-child {
      background-color: ${({ theme }) => theme.colors.fill};
      margin: 0.25rem 0 0.75rem;
    }
  }
`

const StyledPulsar = styled.span`
  animation: 1000ms ${fadeIn} ease-in-out infinite alternate;
  color: ${({ theme }) => theme.colors.fill};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
`

const Title: FC<{ title?: string }> = ({ title, children }) => {
  return (
    <StyledTitle>
      <h2>
        {title}
        {title && <StyledPulsar>_</StyledPulsar>}
      </h2>
      {children}

      <div className="borders">
        <span className="border" />
        <span className="border" />
      </div>
    </StyledTitle>
  )
}

export default Title
