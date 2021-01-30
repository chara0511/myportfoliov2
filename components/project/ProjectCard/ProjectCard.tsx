import { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Icon } from '@components/common'
import { AppModel } from '@lib/data'
import { mixins } from 'styles'

const StyledContent = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.card};
  min-height: 375px;
  box-shadow: var(--card-shadow);

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
      height: 160px;
    }

    & .projectInfoFooter {
      border-top: 1px solid var(--curious-blue);
      padding: 0.5rem 1.5rem 1rem;

      & ul {
        flex-wrap: wrap;

        ${mixins.flexEvenly};

        & li > svg {
          height: 24px;
          width: auto;
        }
      }
    }
  }
`

interface Props {
  app: AppModel
}

const ProjectCard: FC<Props> = ({ app }) => {
  return (
    <StyledContent>
      <div className="projectScreenshot">
        <a
          href={app.appLink}
          title={`${app.appName} demo`}
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
            title={`${app.appName} repository`}
            aria-label={`Link to the ${app.appName} repository`}
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
              <li key={tech.name}>
                <Icon name={tech.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledContent>
  )
}

export default ProjectCard
