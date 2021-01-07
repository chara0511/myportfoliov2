import { FC, useEffect, useRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Title } from '@components/common'
import { DataModel } from '@lib/data'
import sr, { srConfig } from '@utils/sr'
import { breakpoints, mixins } from 'styles'
import { StyledLink } from 'styles/utils'

const StyledContent = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0;
  text-align: center;
  flex-direction: column;

  ${mixins.flexEvenly};

  & h2,
  & h3,
  & h4 {
    text-align: center;
    text-transform: capitalize;
  }
`

const StyledBody = styled.div`
  flex-direction: column;

  ${mixins.flexCenter};

  @media (min-width: ${breakpoints.xl}) {
    flex-direction: row;
  }
`

const StyledWrapper = styled.div`
  flex: 0 300px;
  text-align: right;
`

const StyledGrid = styled.div`
  display: none;

  @media (min-width: ${breakpoints.lg}) {
    border: 1px solid red;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 625px;
    margin: 1rem auto;

    & .block {
      width: 100px;
      height: 100px;
      margin: auto;
      position: relative;
      box-shadow: 12px 12px 32px rgba(0, 0, 0, 0.3);
      background-color: var(--blue-zodiac);
      border-radius: ${({ theme }) => theme.borderRadius.default};
      transition: ${({ theme }) => theme.transition};

      &.image1 {
        width: 150px;
        height: 75px;
        left: 1.5rem;
        box-shadow: none;

        &:hover {
          z-index: 99;
        }
      }

      &.content1 {
        transform: rotateZ(6deg);
        right: 2rem;
        width: 175px;
        height: 175px;
        z-index: 12;

        &:hover {
          z-index: 99;
          transform: scale(1.075) rotateZ(2deg);
        }
      }

      &.content2 {
        width: 200px;
        height: 200px;
        right: 4rem;
        z-index: 24;

        &:hover {
          z-index: 99;
          transform: rotateZ(4deg);
        }
      }

      &.image3 {
        width: 175px;
        height: 100px;
        left: 1.5rem;
        transform: rotateZ(-7deg);
        box-shadow: none;

        &:hover {
          z-index: 99;
        }
      }

      &.content3 {
        width: 250px;
        height: 250px;
        left: 1rem;
        top: -3rem;
        transform: rotateZ(-2deg);
        z-index: 49;

        &:hover {
          z-index: 99;
          transform: scale(1.05) rotateZ(0);
        }
      }

      &.image2 {
        top: -4rem;
        width: 200px;
        transform: rotateZ(14deg);
        box-shadow: none;

        &:hover {
          z-index: 99;
        }
      }
    }
  }
`

interface Props {
  projects: DataModel
}

const ProjectsPreview: FC<Props> = ({ projects }) => {
  const ref = useRef<HTMLElement | any>(null)

  useEffect(() => {
    sr().reveal(ref.current, srConfig())
  }, [])

  return (
    <StyledContent id="projects" ref={ref}>
      <Title>
        <Link href="/projects">
          <a>
            <h2>{projects.header}</h2>
          </a>
        </Link>
      </Title>

      <StyledBody>
        <StyledWrapper>
          <p>{projects.bodyPrev}</p>
          <p>{projects.footerPrev}</p>
        </StyledWrapper>

        <StyledGrid>
          <div className="block image1">image 1 link demo</div>
          <div className="block content1">content 1 link code</div>
          <div className="block content2">content 2</div>
          <div className="block image3">image 3</div>
          <div className="block content3">content 3</div>
          <div className="block image2">image 2</div>
        </StyledGrid>
      </StyledBody>

      <StyledLink href="/projects" forwardedAs="/projects">
        {projects.linkPrev}
      </StyledLink>
    </StyledContent>
  )
}

export default ProjectsPreview
