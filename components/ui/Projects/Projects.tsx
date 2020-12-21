import Image from 'next/image'
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
  min-height: 375px;

  & .project-info {
    background-color: ${({ theme }) => theme.colors.secondaryBg};

    & .project-info-header {
      padding: 1rem 1.5rem 0.5rem;
    }

    & .project-info-body {
      padding: 0.5rem 1.5rem 1rem;
    }

    & .project-info-footer {
      border-top: 1px solid red;
      padding: 0.25rem 1.5rem 0.25rem;

      & ul {
        flex-wrap: wrap;
        ${mixins.flexAround};
      }
    }
  }
`

const Projects = () => {
  // categorizar por app, landing page
  return (
    <StyledContent id="projects">
      <h2>Projects</h2>

      <StyledProjects>
        <StyledProject>
          <div className="project-screenshot">
            <a href="https://google.com.pe">
              {/* or use next/Image */}
              <div className="project-screenshot-wrapper">
                <Image src="/projects/weather-app.png" width={580} height={380} />
              </div>
            </a>
          </div>
          <div className="project-info">
            <div className="project-info-header">
              <h3>Weather app</h3>
            </div>
            <div className="project-info-body">
              Application that uses an API (https://openweathermap.org/api), shows the weather and a
              7-day forecast of your current location. You can also search for the weather in other
              cities.
            </div>
            <div className="project-info-footer">
              <ul>
                <li>api</li>
                <li>react</li>
                <li>styled-components</li>
                <li>api</li>
                <li>react</li>
                <li>styled-components</li>
                <li>api</li>
                <li>react</li>
                <li>styled-components</li>
              </ul>
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
