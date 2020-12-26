import styled from 'styled-components'
import { mixins } from 'styles'
import { useUI } from '../context'

const StyledContent = styled.aside<{ displaySidebar: boolean }>`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  position: fixed;
  width: min(75vw, 400px);
  height: 100vh;
  top: 0;
  right: 0;
  padding: 3rem 1rem;
  transform: translateX(${({ displaySidebar }) => (displaySidebar ? '0vw' : '100vw')});
  transition: ${({ theme }) => theme.transition};
  z-index: 59;

  & ul {
    ${mixins.flexCenter};
    flex-direction: column;
    height: 100%;
  }
`

const Sidebar = () => {
  const { displaySidebar, closeSidebar } = useUI()
  return (
    <StyledContent displaySidebar={displaySidebar}>
      <ul>
        <li>
          <a href="#about" onClick={() => closeSidebar()}>
            about
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => closeSidebar()}>
            projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => closeSidebar()}>
            contact
          </a>
        </li>
      </ul>
    </StyledContent>
  )
}

export default Sidebar
