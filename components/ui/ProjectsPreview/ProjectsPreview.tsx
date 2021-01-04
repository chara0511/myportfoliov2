import { FC, useEffect, useRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { DataModel } from '@lib/data'
import sr, { srConfig } from '@utils/sr'
import { mixins } from 'styles'
import { StyledLink, StyledTitle } from 'styles/utils'

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
      <StyledTitle>
        <Link href="/projects">
          <a>
            <h2>{projects.header}</h2>
          </a>
        </Link>
        <div className="borders">
          <span className="border" />
          <span className="border" />
        </div>
      </StyledTitle>

      <p>{projects.bodyPrev}</p>

      <p>{projects.footerPrev}</p>

      <StyledLink href="/projects" forwardedAs="/projects">
        {projects.linkPrev}
      </StyledLink>
    </StyledContent>
  )
}

export default ProjectsPreview
