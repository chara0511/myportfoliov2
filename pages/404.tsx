import styled from 'styled-components'
import { StyledLink } from 'styles/utils'

const StyledContent = styled.div`
  text-align: center;

  & h1 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    color: var(--curious-blue);
    margin: 2rem 0;
  }
`

const Custom404 = () => {
  return (
    <StyledContent>
      <h1>404 - Page Not Found</h1>
      <StyledLink href="/" forwardedAs="/">
        go home
      </StyledLink>
    </StyledContent>
  )
}
export default Custom404
