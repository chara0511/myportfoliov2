import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useUI } from '@components/ui/context'
import { useScroll } from '@lib/hooks'
import { Logo, MenuIcon } from '@components/icons'
import { mixins } from 'styles'

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
        <div style={{ display: 'none' }}>
          <p>about</p>
          <p>projects</p>
          <p>contact</p>
        </div>
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
