import styled from 'styled-components'
import { Logo, MenuIcon } from '@components/icons'
import { mixins } from 'styles'

export const StyledContent = styled.header`
  border: 1px solid red;
  width: 100%;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.background};
  position: fixed;
  top: 0;

  & nav {
    ${mixins.flexBetween};

    & svg {
      width: 3rem;
      height: 3rem;
    }

    & p {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`

const Header = () => {
  return (
    <StyledContent>
      <nav>
        <Logo />
        <p>about</p>
        <p>projects</p>
        <p>contact</p>
        <MenuIcon />
      </nav>
    </StyledContent>
  )
}

export default Header
