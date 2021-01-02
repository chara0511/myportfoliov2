import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useScroll } from '@lib/hooks'
import { useUI } from '@components/ui/context'
import { Sidebar } from '@components/ui'
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

const StyledMenu = styled.div`
  & .hamburguer {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 69;
    width: 42px;
    height: 42px;
    transition: ${({ theme }) => theme.transition};

    &:hover {
      opacity: 0.5;
    }

    & span {
      background-color: ${({ theme }) => theme.colors.fill};
      width: 75%;
      height: 0.25rem;
      margin-top: 0.5rem;
      margin-right: auto;
      margin-left: auto;
      display: block;
      transition: all 0.4s ease;
      transform-origin: 0 0;
      border-radius: ${({ theme }) => theme.borderRadius.default};

      &:nth-child(1) {
        margin-top: 0.45rem;
      }
    }
  }

  & .active span:nth-child(1) {
    transform: rotate(45deg) translate(7px, -2px);
    margin: auto;
  }

  & .active span:nth-child(2) {
    transform: scaleX(0);
    margin: auto;
  }

  & .active span:nth-child(3) {
    transform: rotate(-45deg) translate(4px, 1px);
    margin: auto;
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
        <StyledMenu>
          <button
            aria-label="menu"
            type="button"
            onClick={() => openSidebar()}
            className={`hamburguer ${displaySidebar ? 'active' : ''}`}
          >
            <span />
            <span />
            <span />
          </button>
        </StyledMenu>
      </nav>
      <Sidebar open={displaySidebar} onClose={closeSidebar} />
    </StyledContent>
  )
}

export default Header
