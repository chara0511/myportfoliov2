/* eslint-disable no-nested-ternary */
import { FC } from 'react'
import styled from 'styled-components'
import { Icon } from '@components/common'
import { breakpoints, mixins } from 'styles'

const StyledContent = styled.div`
  width: 100%;
  height: 100%;

  & .block {
    width: 200px;
    height: 200px;
    margin: auto 4rem;
    box-shadow: var(--note-shadow-1);
    background-color: var(--blue-zodiac);
    border-radius: ${({ theme }) => theme.borderRadius.default};
    transition: ${({ theme }) => theme.transition};

    ${mixins.flexCenter};

    & span {
      width: 1.25rem;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    @media (min-width: ${breakpoints.lg}) {
      margin: auto;

      &.smNote {
        width: 175px;
        height: 175px;
        left: 3rem;
        top: 1rem;
        transform: rotateZ(6deg);
        z-index: 12;

        ${mixins.flexCenter};

        &:hover {
          z-index: 99;
          transform: scale(1.025) rotateZ(2deg);
        }
      }

      &.mdNote {
        width: 200px;
        height: 200px;
        right: 3rem;
        z-index: 24;
        transform: rotateZ(-2deg);
        ${mixins.flexCenter};

        &:hover {
          z-index: 99;
          transform: rotateZ(2deg);
        }
      }

      &.lgNote {
        width: 250px;
        height: 250px;
        left: 10rem;
        top: -2rem;
        transform: rotateZ(-2deg);
        z-index: 49;

        ${mixins.flexCenter};

        &:hover {
          z-index: 99;
          transform: scale(1.05) rotateZ(2deg);
        }
      }
    }
  }
`

interface Props {
  app: { name: string }
  i?: number
}

const ProjectNote: FC<Props> = ({ app, i }) => {
  return (
    <StyledContent>
      <a
        key={app.name}
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className={`block ${i === 0 ? 'smNote' : i === 1 ? 'mdNote' : 'lgNote'}`}
      >
        <h3>{app.name}</h3>
        <span>
          <Icon name="external link" />
        </span>
      </a>
    </StyledContent>
  )
}

export default ProjectNote
