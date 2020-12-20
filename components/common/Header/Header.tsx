import styled from 'styled-components'
import Link from 'next/link'
import { useUI } from '@components/ui/context'
import { Logo, MenuIcon } from '@components/icons'
import { mixins } from 'styles'
import { FC } from 'react'

export const StyledContent = styled.header`
  background-color: rgba(20, 39, 61, 0.85);
  backdrop-filter: blur(8px);
  box-shadow: ${({ theme }) => theme.shadows.header};
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 49;

  & nav {
    ${mixins.flexBetween};

    & button {
      color: ${({ theme }) => theme.colors.background};
    }

    & svg {
      width: 3rem;
      height: 3rem;
    }

    & p {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`

interface Props {
  reload: () => void
}

const Header: FC<Props> = ({ reload }) => {
  const { openSidebar } = useUI()
  return (
    <StyledContent>
      <nav>
        <Link href="/" passHref>
          <a>
            <button type="button" onClick={reload}>
              <Logo />
            </button>
          </a>
        </Link>
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
