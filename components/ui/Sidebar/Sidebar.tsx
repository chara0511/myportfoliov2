import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import type { BodyScrollOptions } from 'body-scroll-lock'
import styled from 'styled-components'
import { Section } from 'pages'
import { mixins } from 'styles'
import { StyledSidebarLink } from 'styles/utils'
import { FC, useEffect, useRef } from 'react'

const StyledContent = styled.aside`
  position: fixed;
  width: min(70vw, 400px);
  /* width: 100%; */
  height: 100vh;
  top: 0;
  right: 0;

  transition: ${({ theme }) => theme.transition};
  z-index: 59;
  display: flex;
  flex-direction: row-reverse;

  & ul {
    ${mixins.flexCenter};
    background-color: ${({ theme }) => theme.colors.secondaryBg};
    width: min(70vw, 375px);
    padding: 3rem 1rem;
    flex-direction: column;
    height: 100%;
  }
`
interface Props {
  open: boolean
  onClose: () => void
}

const options: BodyScrollOptions = {
  reserveScrollBarGap: true,
}

const Sidebar: FC<Props> = ({ open = false, onClose }) => {
  const ref = useRef<HTMLDivElement>(null)

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

  const sidebarLinks: Section[] = ['about', 'projects', 'contact']

  return (
    <>
      {open ? (
        <StyledContent ref={ref}>
          <ul>
            {sidebarLinks.map((link) => (
              <li key={link}>
                <StyledSidebarLink
                  href={`/#${link}`}
                  handleSidebar={() => onClose()}
                  forwardedAs={`/#${link}`}
                >
                  {link}
                </StyledSidebarLink>
              </li>
            ))}
          </ul>
        </StyledContent>
      ) : null}
    </>
  )
}

export default Sidebar
