import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import { Link } from '@lib/models'
import { breakpoints, mixins } from 'styles'
import getSlug from '@lib/getSlug'
import { StyledLink } from 'styles/utils'

const StyledContent = styled.div<{ view: string }>`
  display: ${({ view }) => (view === 'sidebar' ? 'block' : 'none')};
  flex: ${({ view }) => (view === 'sidebar' ? 1 : 0)};

  & > ul {
    height: 100%;
    flex-direction: ${({ view }) => (view === 'sidebar' ? 'column' : view === 'navbar' && 'row')};

    ${mixins.flexCenter};

    & > li {
      text-align: center;
      margin-left: 0.75rem;
      margin-right: 0.75rem;
      margin-bottom: ${({ view }) => (view === 'sidebar' ? '1.75rem' : 0)};
    }
  }

  @media (min-width: ${breakpoints.lg}) {
    display: ${({ view }) => (view === 'navbar' ? 'block' : 'none')};
  }
`

const sidebarLinks: Link[] = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'projects', href: '/projects' },
  { name: 'contact', href: '/contact' },
]

interface Props {
  open?: boolean
  view: string
  onClose: () => void
}

const Links: FC<Props> = ({ open, view, onClose }) => {
  const [isMounted, setIsMounted] = useState(false)
  const { pathname } = useRouter()
  const activeLink = getSlug(pathname)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (activeLink || activeLink === '') {
      if (!open) {
        onClose()
      }
    }
  }, [activeLink])

  const sidebarLink = (name: string, href: string) => (
    <StyledLink className={activeLink === getSlug(href) ? 'active' : ''} href={href}>
      {name}
    </StyledLink>
  )

  return (
    <StyledContent view={view}>
      <ul>
        <TransitionGroup component={null}>
          {isMounted &&
            sidebarLinks.map((link, i) => (
              <CSSTransition
                key={link.name}
                classNames={view === 'sidebar' ? '' : 'faderight'}
                timeout={800}
              >
                <li style={{ transitionDelay: `${i * 1}00ms` }}>
                  {sidebarLink(link.name, link.href)}
                </li>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </ul>
    </StyledContent>
  )
}

export default Links
