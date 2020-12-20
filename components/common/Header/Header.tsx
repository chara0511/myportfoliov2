import styled from 'styled-components'
import Link from 'next/link'
import { useUI } from '@components/ui/context'
import { Logo, MenuIcon } from '@components/icons'
import { mixins } from 'styles'
import { FC } from 'react'
import { useScroll } from 'lib/hooks/useScroll'

export const StyledContent = styled.header<{ y: number; direction: string }>`
  background-color: rgba(20, 39, 61, 0.85);
  backdrop-filter: blur(8px);
  box-shadow: ${({ theme, y }) => (y === 0 ? 'none' : theme.shadows.header)};
  padding: ${({ y }) => (y === 0 ? '1rem' : '0.5em')};
  position: fixed;
  transform: translateY(${({ direction }) => (direction === 'down' ? '-88px' : '0px')});
  transition: ${({ theme }) => theme.transition};
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
