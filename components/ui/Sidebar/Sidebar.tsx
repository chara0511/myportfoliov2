import styled from 'styled-components'
import { mixins } from 'styles'

const StyledContent = styled.aside`
  border: 1px solid green;
  background-color: ${({ theme }) => theme.colors.aside};
  position: fixed;
  width: 75%;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 3rem 1rem;
  transform: translateX(0px);

  & ul {
    ${mixins.flexCenter};
    flex-direction: column;
    height: 100%;
  }
`

const Sidebar = () => {
  return (
    <StyledContent>
      <ul>
        <li>about</li>
        <li>work</li>
        <li>contact</li>
      </ul>
    </StyledContent>
  )
}

export default Sidebar
