import { GithubIcon } from '@components/icons'
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
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin: 3rem 0;
`

const StyledProject = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.card};
  min-height: 375px;
  box-shadow: ${({ theme }) => theme.shadows.card};

  & .project-screenshot {
    display: flex;

    & a {
      display: flex;

      & .formatted {
        border-top-right-radius: ${({ theme }) => theme.borderRadius.card};
        border-top-left-radius: ${({ theme }) => theme.borderRadius.card};
        opacity: 0.6;

        :hover {
          opacity: 1;
        }
      }
    }
  }

  & .project-info {
    background-color: ${({ theme }) => theme.colors.secondaryBg};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.card};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.card};

    & .project-info-header {
      padding: 1rem 1.5rem 0.5rem;

      ${mixins.flexBetween};

      & a {
        width: 24px;
        height: 24px;
      }
    }

    & .project-info-body {
      padding: 0.5rem 1.5rem 1rem;
    }

    & .project-info-footer {
      border-top: 1px solid ${({ theme }) => theme.colors.fill};
      padding: 0.25rem 1.5rem 0.25rem;

      & ul {
        flex-wrap: wrap;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        line-height: ${({ theme }) => theme.lineHeights.sm};
        font-family: ${({ theme }) => theme.fontMono};

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
            <a href="https://weather-app-nu-gold.vercel.app/">
              <Image
                src="/projects/weather-app.png"
                className="formatted"
                width={580}
                height={380}
              />
            </a>
          </div>
          <div className="project-info">
            <div className="project-info-header">
              <h3>Weather app</h3>

              <a
                href="https://github.com/jcarlos0511/weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <GithubIcon />
                </span>
              </a>
            </div>
            <div className="project-info-body">
              <p>
                Application that uses an <a href="https://openweathermap.org/api">API</a> , shows
                the weather and a 7-day forecast of your current location. You can also search for
                the weather in other cities.
              </p>
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
