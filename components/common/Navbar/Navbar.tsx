import styled from 'styled-components'
import { Logo } from '@components/icons'
import { mixins } from 'styles'

export const StyledContent = styled.div`
  border: 1px solid red;
  width: 100%;
  padding: 1rem;
  ${mixins.flexBetween}

  & svg {
    width: 3rem;
    height: 3rem;
  }
`

const Navbar = () => {
  return (
    <StyledContent>
      <Logo />
      <p>about</p>
      <p>projects</p>
      <p>contact</p>
    </StyledContent>
  )
}

export default Navbar
