import { FC, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import type { BodyScrollOptions } from 'body-scroll-lock'
import Portal from '@reach/portal'
import styled from 'styled-components'
import getSlug from '@lib/getSlug'
import { breakpoints, mixins } from 'styles'
import { StyledSidebarLink } from 'styles/utils'

const StyledContent = styled.aside`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 1rem;
  position: fixed;
  /* width: 100%; */
  height: 100vh;
  width: min(75vw, 375px);
  top: 0;
  right: 0;

  & ul {
    ${mixins.flexCenter};

    flex-direction: column;
    height: 100%;
  }
`

const StyledWrapper = styled(StyledContent)`
  display: none;
  padding: 0;

  @media (min-width: ${breakpoints.lg}) {
    display: block;
    width: min(12.5vw, 200px);
  }
`

interface Props {
  open: boolean
  onClose: () => void
}

const options: BodyScrollOptions = {
  reserveScrollBarGap: true,
}

interface LINKS {
  href: string
  name: string
}

const SIDEBAR_LINKS: LINKS[] = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'projects', href: '/projects' },
  { name: 'contact', href: '/contact' },
]

const Sidebar: FC<Props> = ({ open = false, onClose }) => {
  const ref = useRef<HTMLDivElement>(null)

  const { asPath } = useRouter()

  const activeLink = getSlug(asPath)

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current, options)
      } else {
        enableBodyScroll(ref.current)
      }
    }

    return () => clearAllBodyScrollLocks()
  }, [open])

  return (
    <Portal>
      {open ? (
        <StyledContent ref={ref}>
          <ul>
            {SIDEBAR_LINKS.map((link) => (
              <li key={link.name}>
                <StyledSidebarLink
                  href={link.href}
                  handleSidebar={() => onClose()}
                  forwardedAs={link.href}
                  className={activeLink === getSlug(link.href) ? 'active' : ''}
                >
                  {link.name}
                </StyledSidebarLink>
              </li>
            ))}
          </ul>
        </StyledContent>
      ) : (
        <StyledWrapper>
          <ul>
            {SIDEBAR_LINKS.map((link) => (
              <li key={link.name}>
                <StyledSidebarLink
                  href={link.href}
                  handleSidebar={() => onClose()}
                  forwardedAs={link.href}
                  className={activeLink === getSlug(link.href) ? 'active' : ''}
                >
                  {link.name}
                </StyledSidebarLink>
              </li>
            ))}
          </ul>
        </StyledWrapper>
      )}
    </Portal>
  )
}

export default Sidebar
