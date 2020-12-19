import styled from 'styled-components'
import { mixins } from 'styles'

const StyledContent = styled.section`
  width: 100%;
  min-height: 100vh;
  flex-direction: column;

  ${mixins.flexLeft};
`

const Projects = () => {
  return <StyledContent id="projects">From Projects.tsx</StyledContent>
}

export default Projects
