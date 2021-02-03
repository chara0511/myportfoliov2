import { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Icon } from '@components/common'
import { AppModel } from '@lib/models'
import { mixins } from 'styles'

const StyledContent = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.card};
  min-height: 375px;
  box-shadow: var(--card-shadow);
`

const StyledScreenshot = styled.div`
  display: flex;

  & > a {
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
`

const StyledInfo = styled.div`
  background-color: var(--blue-zodiac);
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.card};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.card};
`

const StyledHeader = styled.div`
  padding: 1rem 1.5rem 0.5rem;

  ${mixins.flexBetween};

  & > h4 {
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: ${({ theme }) => theme.lineHeights.lg};
  }

  & > a {
    width: 24px;
    height: 24px;
  }
`

const StyledPills = styled.ul`
  padding: 0 1.5rem;
  display: flex;
  justify-content: left;
  text-transform: capitalize;
  font-family: var(--font-mono);
  font-size: ${({ theme }) => theme.fontSizes['2xs']};
  font-weight: 600;

  & > li {
    margin-right: 0.5rem;
    background-color: var(--polo-blue);
    color: var(--blue-zodiac);
    padding: 0 0.75rem;
    border-radius: var(--rounded-pill);
  }
`

const StyledBody = styled.div`
  padding: 0.5rem 1.5rem 0.5rem;
  height: 180px;
`

const StyledFooter = styled.div`
  border-top: 1px solid var(--curious-blue);
  padding: 0.5rem 1.5rem 1rem;

  & > ul {
    flex-wrap: wrap;

    ${mixins.flexEvenly};

    & li > svg {
      height: 24px;
      width: auto;
    }
  }
`

interface Props {
  app: AppModel
}

const ProjectCard: FC<Props> = ({ app }) => {
  return (
    <StyledContent>
      <StyledScreenshot>
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
            quality="65"
          />
        </a>
      </StyledScreenshot>
      <StyledInfo>
        <StyledHeader>
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
        </StyledHeader>

        <StyledPills>
          {app.types.map((type: string) => (
            <li key={type}>{type}</li>
          ))}
        </StyledPills>

        <StyledBody>
          <p>{app.appDescription}</p>
        </StyledBody>

        <StyledFooter>
          <ul>
            {app.technologies.map((tech) => (
              <li key={tech.name}>
                <Icon name={tech.name} />
              </li>
            ))}
          </ul>
        </StyledFooter>
      </StyledInfo>
    </StyledContent>
  )
}

export default ProjectCard
