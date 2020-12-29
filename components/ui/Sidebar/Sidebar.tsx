import styled from 'styled-components'
import { mixins } from 'styles'
import { useUI } from '../context'

const StyledContent = styled.div<{ displaySidebar: boolean }>`
  position: fixed;
  /* width: min(75vw, 400px); */
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;

  transform: translateX(${({ displaySidebar }) => (displaySidebar ? '0vw' : '100vw')});
  transition: ${({ theme }) => theme.transition};
  z-index: 59;
  display: flex;
  flex-direction: row-reverse;

  & aside {
    & ul {
      ${mixins.flexCenter};
      background-color: ${({ theme }) => theme.colors.secondaryBg};
      width: min(70vw, 375px);
      padding: 3rem 1rem;
      flex-direction: column;
      height: 100%;
    }
  }
`

const Sidebar = () => {
  const { displaySidebar, closeSidebar } = useUI()
  return (
    <StyledContent displaySidebar={displaySidebar}>
      <aside>
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
      </aside>
    </StyledContent>
  )
}

export default Sidebar
