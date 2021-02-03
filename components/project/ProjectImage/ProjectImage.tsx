/* eslint-disable no-nested-ternary */
import Image from 'next/image'
import { FC } from 'react'
import styled from 'styled-components'
import { AppModel } from '@lib/data'
import { breakpoints } from 'styles'

const StyledContent = styled.div`
  transition: ${({ theme }) => theme.transition};
  box-shadow: var(--image-shadow);

  &.sm {
    width: 125px;
    height: 78px;
    left: 5px;
    position: absolute;
    transform: rotateZ(-2deg);
  }

  &.md {
    width: 150px;
    height: 98px;
    position: absolute;
    transform: rotateZ(4deg);
    right: 5px;
  }

  &.lg {
    width: 175px;
    height: 112px;
    position: absolute;
    transform: rotateZ(0);
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
  }

  & > a .rounded {
    border-radius: ${({ theme }) => theme.borderRadius.default};
  }

  @media (min-width: ${breakpoints.lg}) {
    &.sm {
      width: 155px;
      height: 100px;
      top: 5rem;

      &:hover {
        z-index: 99;
        transform: scale(1.075) rotateZ(-2deg);
      }
    }

    &.md {
      width: 175px;
      height: 115px;
      bottom: 8rem;
      transform: rotateZ(14deg);

      &:hover {
        z-index: 99;
        transform: scale(1.05) rotateZ(10deg);
      }
    }

    &.lg {
      width: 200px;
      height: 130px;
      left: 2.5rem;
      bottom: 7.5rem;
      transform: rotateZ(-7deg);
      margin: 0;

      &:hover {
        z-index: 99;
        transform: scale(1.1) rotateZ(-4deg);
      }
    }
  }
`

interface Props {
  app: AppModel
  i: number
}

const ProjectImage: FC<Props> = ({ app, i }) => {
  return (
    <StyledContent className={`${i === 0 ? 'sm' : i === 1 ? 'md' : 'lg'}`}>
      <a
        href={app.appLink}
        target="_blank"
        rel="noopener noreferrer"
        title={`${app.appName} demo`}
        aria-label={`${app.appName} demo`}
      >
        <div>
          <Image
            src={`/projects/${app.appName}.png`}
            width={580}
            height={380}
            loading="eager"
            className="rounded"
            quality="65"
            unoptimized
          />
        </div>
      </a>
    </StyledContent>
  )
}

export default ProjectImage
