import { FC, useEffect, useRef } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { DataModel } from '@lib/data'
import sr, { srConfig } from '@utils/sr'
import { Icon, Title } from '@components/common'
import { breakpoints, mixins } from 'styles'

const StyledContent = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 5rem 0;
  flex-direction: column;

  & h2,
  & h3,
  & h4 {
    text-align: center;
    text-transform: capitalize;
  }

  & h3 {
    font-weight: 500;
  }

  ${mixins.flexLeft};
`
const StyledProjects = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin: 3rem 0;

  @media (min-width: ${breakpoints.md}) {
    gap: 1.5rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`

const StyledProject = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.card};
  min-height: 375px;
  box-shadow: ${({ theme }) => theme.shadows.card};

  & .projectScreenshot {
    display: flex;

    & a {
      display: flex;

      & .formattedImage {
        border-top-right-radius: ${({ theme }) => theme.borderRadius.card};
        border-top-left-radius: ${({ theme }) => theme.borderRadius.card};
        opacity: 0.6;

        :hover {
          opacity: 1;
        }
      }
    }
  }

  & .projectInfo {
    background-color: var(--blue-zodiac);
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.card};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.card};

    & .projectInfoHeader {
      padding: 1rem 1.5rem 0.5rem;

      ${mixins.flexBetween};

      & a {
        width: 24px;
        height: 24px;
      }
    }

    & .projectInfoBody {
      padding: 0.5rem 1.5rem 0.5rem;
    }

    & .projectInfoFooter {
      border-top: 1px solid var(--curious-blue);
      padding: 0.5rem 1.5rem 1rem;

      & ul {
        flex-wrap: wrap;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        line-height: ${({ theme }) => theme.lineHeights.sm};
        font-family: var(--font-mono);

        ${mixins.flexAround};
      }
    }
  }
`

const StyledTechnologies = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 250px));
  row-gap: 1rem;
  margin: 1.5rem auto;
  font-family: var(--font-mono);
  font-size: ${({ theme }) => theme.fontSizes.sm};
  justify-content: center;
  text-transform: capitalize;

  & li {
    display: flex;
    align-items: center;

    & span {
      margin-right: 0.5rem;

      & svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`
interface Props {
  projects: DataModel
}

const Projects: FC<Props> = ({ projects }) => {
  // categorizar por app, landing page
  const ref = useRef<HTMLElement | any>(null)

  useEffect(() => {
    sr().reveal(ref.current, srConfig())
  }, [])

  return (
    <StyledContent id="projects" ref={ref}>
      <Title title={projects.header} />
      <br />
      <p>{projects.bodyPrev}</p>
      <br />
      <p>Here are a few technologies I&apos;ve been working with recently :</p>
      <StyledTechnologies>
        {projects.technologies.map((tech) => (
          <li key={tech.name}>
            <span>
              <Icon name={tech.name} />
            </span>
            {tech.name}
          </li>
        ))}
      </StyledTechnologies>

      <br />

      <h3>{projects.headerAfter}</h3>

      <StyledProjects>
        {projects.apps.map((app) => (
          <StyledProject key={app.appName}>
            <div className="projectScreenshot">
              <a
                href={app.appLink}
                aria-label={`${app.appName} link`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt={`${app.appName} screenshot`}
                  src={`/projects/${app.appName}.png`}
                  className="formattedImage"
                  width={580}
                  height={380}
                  loading="eager"
                  unoptimized
                />
              </a>
            </div>
            <div className="projectInfo">
              <div className="projectInfoHeader">
                <h4>{app.appName}</h4>
                <a
                  aria-label="Link to the Github repository"
                  href={app.repositoryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <Icon name="github" />
                  </span>
                </a>
              </div>

              <div className="projectInfoBody">
                <p>{app.appDescription}</p>
              </div>

              <div className="projectInfoFooter">
                <ul>
                  {app.technologies.map((tech) => (
                    <li key={tech.name}>{tech.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </StyledProject>
        ))}
        {/* <StyledProject>project2</StyledProject>
        <StyledProject>journal</StyledProject>
        <StyledProject>catwiki</StyledProject>
        <StyledProject>weather</StyledProject>
        <StyledProject>rock-paper-scissors</StyledProject> */}
      </StyledProjects>
    </StyledContent>
  )
}

export default Projects
