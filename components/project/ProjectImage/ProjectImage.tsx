/* eslint-disable no-nested-ternary */
import { Icon } from '@components/common'
import Image from 'next/image'
import { FC } from 'react'
import styled from 'styled-components'
import { breakpoints } from 'styles'

const StyledContent = styled.div`
  transition: ${({ theme }) => theme.transition};

  &.smImage {
    width: 125px;
    left: 5px;
    position: absolute;
    transform: rotateZ(-2deg);
  }

  &.mdImage {
    width: 150px;
    position: absolute;
    transform: rotateZ(4deg);
    right: 5px;
  }

  &.lgImage {
    width: 175px;
    position: absolute;
    transform: rotateZ(0);
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
  }

  & span {
    width: 1.25rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    &.smImage {
      width: 150px;
      height: 75px;
      top: 5rem;

      &:hover {
        z-index: 99;
        transform: scale(1.075) rotateZ(-2deg);
      }
    }

    &.mdImage {
      width: 175px;
      bottom: 8rem;
      transform: rotateZ(14deg);

      &:hover {
        z-index: 99;
        transform: scale(1.05) rotateZ(10deg);
      }
    }

    &.lgImage {
      width: 200px;
      height: 100px;
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
  app: { name: string }
  i: number
}

const ProjectImage: FC<Props> = ({ app, i }) => {
  return (
    <StyledContent className={`${i === 0 ? 'smImage' : i === 1 ? 'mdImage' : 'lgImage'}`}>
      <a href="http://" target="_blank" rel="noopener noreferrer" aria-label={`${app.name} demo`}>
        <div>
          <span>
            <Icon name="external link" />
          </span>
          <Image src="/projects/weather.png" width={580} height={380} loading="eager" />
        </div>
      </a>
    </StyledContent>
  )
}

export default ProjectImage
