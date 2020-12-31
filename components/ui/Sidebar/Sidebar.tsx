import { Section } from 'pages'
import styled from 'styled-components'
import { mixins } from 'styles'
import { StyledSidebarLink } from 'styles/utils'
import { useUI } from '../context'

const StyledContent = styled.aside<{ displaySidebar: boolean }>`
  position: fixed;
  width: min(70vw, 400px);
  /* width: 100%; */
  height: 100vh;
  top: 0;
  right: 0;

  transform: translateX(${({ displaySidebar }) => (displaySidebar ? '0vw' : '100vw')});
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

const Sidebar = () => {
  const { displaySidebar, closeSidebar } = useUI()

  const sidebarLinks: Section[] = ['about', 'projects', 'contact']

  return (
    <StyledContent displaySidebar={displaySidebar}>
      <ul>
        {sidebarLinks.map((link) => (
          <li key={link}>
            <StyledSidebarLink
              href={`/#${link}`}
              handleSidebar={() => closeSidebar()}
              forwardedAs={`/#${link}`}
            >
              {link}
            </StyledSidebarLink>
          </li>
        ))}
      </ul>
    </StyledContent>
  )
}

export default Sidebar
