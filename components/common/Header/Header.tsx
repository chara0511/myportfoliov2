import styled from 'styled-components'
import { Logo, MenuIcon } from '@components/icons'
import { mixins } from 'styles'
import { useUI } from '@components/ui/context'

export const StyledContent = styled.header`
  background-color: rgba(20, 39, 61, 0.9);
  backdrop-filter: blur(8px);
  box-shadow: ${({ theme }) => theme.shadows.header};
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 49;

  & nav {
    color: ${({ theme }) => theme.colors.background};
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
  const { openSidebar } = useUI()
  return (
    <StyledContent>
      <nav>
        <div>
          <Logo />
        </div>
        <p>about</p>
        <p>projects</p>
        <p>contact</p>
        <div>
          <button type="button" onClick={() => openSidebar()}>
            <MenuIcon />
          </button>
        </div>
      </nav>
    </StyledContent>
  )
}

export default Header
