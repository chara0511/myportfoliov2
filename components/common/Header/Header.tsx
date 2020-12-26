import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useScroll } from '@lib/hooks'
import { useUI } from '@components/ui/context'
import { Sidebar } from '@components/ui'
import { Logo } from '@components/icons'
import { breakpoints, mixins } from 'styles'

export const StyledContent = styled.header<{ y: number; direction: string }>`
  background-color: rgba(20, 39, 61, 0.85);
  backdrop-filter: blur(8px);
  box-shadow: ${({ theme, y }) => (y === 0 ? 'none' : theme.shadows.header)};
  padding: ${({ y }) => (y === 0 ? '1rem 1.5rem' : '0.5rem 1.5rem')};
  position: fixed;
  transform: translateY(${({ direction }) => (direction === 'down' ? '-88px' : '0px')});
  transition: ${({ theme }) => theme.transition};
  top: 0;
  width: 100%;
  z-index: 49;

  & nav {
    max-width: 1100px;
    margin: 0 auto;

    ${mixins.flexBetween};

    & button {
      color: ${({ theme }) => theme.colors.primaryBg};
    }

    & .pencet {
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 69;
      width: 48px;
      height: 48px;

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
      }
    }

    & .Diam span:nth-child(1) {
      transform: rotate(45deg) translate(5px, -2px);
      margin: auto;
    }

    & .Diam span:nth-child(2) {
      transform: scaleX(0);
    }

    & .Diam span:nth-child(3) {
      transform: rotate(-45deg) translate(4px, 0);
      margin: auto;
    }

    & svg {
      width: 3rem;
      height: 3rem;
    }

    & p {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: ${({ y }) => (y === 0 ? '1rem 3rem' : '0.5rem 3rem')};
  }

  @media (min-width: ${breakpoints.md}) {
    padding: ${({ y }) => (y === 0 ? '1rem 6rem' : '0.5rem 6rem')};
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: ${({ y }) => (y === 0 ? '1rem 0' : '0.5rem 0')};
  }
`

interface Props {
  reload: () => void
}

const Header: FC<Props> = ({ reload }) => {
  const { displaySidebar, openSidebar } = useUI()
  const { y, direction } = useScroll()

  return (
    <StyledContent y={y} direction={direction}>
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
        <div>
          <button
            type="button"
            onClick={() => openSidebar()}
            className={`pencet ${displaySidebar && 'Diam'}`}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <Sidebar />
      </nav>
    </StyledContent>
  )
}

export default Header
