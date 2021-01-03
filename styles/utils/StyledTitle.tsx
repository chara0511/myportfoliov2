import styled from 'styled-components'
import { mixins } from 'styles'

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

export default StyledTitle
