import { FC } from 'react'
import styled from 'styled-components'
import { useScroll } from '@lib/hooks'
import { useUI } from '@components/ui/context'
import { LogoButton, MenuButton, Sidebar } from '@components/ui'
import { Links } from '@components/links'
import { breakpoints, mixins } from 'styles'

export const StyledContent = styled.header<{
  scrollY: number
  scrollDirection: string
  open: boolean
}>`
  background-color: rgba(20, 39, 61, 0.85);
  backdrop-filter: blur(8px);
  box-shadow: ${({ theme, scrollY, open }) =>
    scrollY === 0 || open ? 'none' : theme.shadows.header};
  position: fixed;
  transform: translateY(${({ scrollDirection }) => (scrollDirection === 'down' ? '-88px' : '0px')});
  transition: ${({ theme }) => theme.transition};
  top: 0;
  right: 0;
  width: 100%;
  z-index: 49;

  & > nav {
    max-width: 1100px;
    margin: 0 auto;
    padding: 1rem;

    ${mixins.flexBetween};

    @media (min-width: ${breakpoints.sm}) {
      padding: ${({ scrollY }) => (scrollY === 0 ? '1rem 3rem' : '0.5rem 3rem')};
    }

    @media (min-width: ${breakpoints.md}) {
      padding: ${({ scrollY }) => (scrollY === 0 ? '1rem 6rem' : '0.5rem 6rem')};
    }

    @media (min-width: ${breakpoints.xl}) {
      padding: ${({ scrollY }) => (scrollY === 0 ? '1rem 0' : '0.5rem 0')};
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
    <StyledContent scrollY={y} scrollDirection={direction} open={displaySidebar}>
      <nav>
        <LogoButton href="/" reload={reload} />
        <Links view="navbar" onClose={closeSidebar} />
        <MenuButton onOpen={openSidebar} />
      </nav>

      <Sidebar open={displaySidebar} onClose={closeSidebar} />
    </StyledContent>
  )
}

export default Header
