import styled from 'styled-components'
import { mixins } from 'styles'

const StyledContent = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0;
  flex-direction: column;

  ${mixins.flexLeft};
`
const StyledProjects = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`

const StyledProject = styled.div`
  border: 1px solid red;
  border-radius: ${({ theme }) => theme.borderRadius.card};
  height: 375px;
`

const Projects = () => {
  // categorizar por app, landing page
  return (
    <StyledContent id="projects">
      <h2>Projects</h2>

      <StyledProjects>
        <StyledProject>
          <div className="card">
            <div className="card-screenshot">
              <a href="https://google.com.pe">
                {/* or use next/Image */}
                <div className="card-wrapper">
                  <img src="" alt="preview screenshot of project" />
                </div>
              </a>
            </div>
            <div className="card-info">
              <div className="card-header">header</div>
              <div className="card-body">body</div>
              <div className="card-footer">footer</div>
            </div>
          </div>
        </StyledProject>
        <StyledProject>project2</StyledProject>
        <StyledProject>journal</StyledProject>
        <StyledProject>catwiki</StyledProject>
        <StyledProject>weather</StyledProject>
        <StyledProject>rock-paper-scissors</StyledProject>
      </StyledProjects>
    </StyledContent>
  )
}

export default Projects
