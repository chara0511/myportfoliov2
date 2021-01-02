import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useScroll } from '@lib/hooks'
import { Sidebar } from '@components/ui'
import { useUI } from '@components/ui/context'
import { MenuButton } from '@components/ui/Buttons'
import { Logo } from '@components/icons'
import { breakpoints, mixins } from 'styles'

export const StyledContent = styled.header<{ scrollY: number; scrollDirection: string }>`
  background-color: rgba(20, 39, 61, 0.85);
  backdrop-filter: blur(8px);
  box-shadow: ${({ theme, scrollY }) => (scrollY === 0 ? 'none' : theme.shadows.header)};
  padding: ${({ scrollY }) => (scrollY === 0 ? '1rem' : '0.5rem 1rem')};
  position: fixed;
  transform: translateY(${({ scrollDirection }) => (scrollDirection === 'down' ? '-88px' : '0px')});
  transition: ${({ theme }) => theme.transition};
  top: 0;
  right: 0;
  width: 100%;
  z-index: 49;

  @media (min-width: ${breakpoints.sm}) {
    padding: ${({ scrollY }) => (scrollY === 0 ? '1rem 3rem' : '0.5rem 3rem')};
  }

  @media (min-width: ${breakpoints.md}) {
    padding: ${({ scrollY }) => (scrollY === 0 ? '1rem 6rem' : '0.5rem 6rem')};
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: ${({ scrollY }) => (scrollY === 0 ? '1rem 0' : '0.5rem 0')};
  }

  & nav {
    max-width: 1100px;
    margin: 0 auto;

    ${mixins.flexBetween};

    & button {
      color: ${({ theme }) => theme.colors.primaryBg};
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
  const { displaySidebar, openSidebar, closeSidebar } = useUI()
  const { y, direction } = useScroll()

  return (
    <StyledContent scrollY={y} scrollDirection={direction}>
      <nav>
        <Link href="/" passHref>
          <a>
            <button type="button" onClick={reload}>
              <Logo />
            </button>
          </a>
        </Link>
        <div style={{ display: 'none' }}>
          <p>about</p>
          <p>projects</p>
          <p>contact</p>
        </div>
        <MenuButton open={displaySidebar} onOpen={openSidebar} onClose={closeSidebar} />
      </nav>
      <Sidebar open={displaySidebar} onClose={closeSidebar} />
    </StyledContent>
  )
}

export default Header
