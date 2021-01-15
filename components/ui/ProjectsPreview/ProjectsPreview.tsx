import { FC, useEffect, useRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { DataModel } from '@lib/data'
import { Title } from '@components/common'
import { ProjectsGrid, ProjectsNote } from '@components/project'
import sr, { srConfig } from '@utils/sr'
import { breakpoints, mixins } from 'styles'
import { StyledSmallLink } from 'styles/utils'

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
  flex: 0 60px;
  text-align: right;
  margin: 2rem 0;

  @media (min-width: ${breakpoints.lg}) {
    width: 90%;
  }

  @media (min-width: ${breakpoints.xl}) {
    flex: 0 300px;
    margin: 0;
    width: 100%;
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
          <br />
          <p>{projects.footerPrev}</p>
        </StyledWrapper>

        <ProjectsGrid />
        <ProjectsNote />
      </StyledBody>

      <StyledSmallLink href="/projects" forwardedAs="/projects">
        {projects.linkPrev}
      </StyledSmallLink>
    </StyledContent>
  )
}

export default ProjectsPreview
