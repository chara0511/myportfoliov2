import { FC, useEffect, useRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { DataModel } from 'pages'
import sr, { srConfig } from '@utils/sr'
import { mixins } from 'styles'
import { StyledTitle } from 'styles/utils'

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

interface Props {
  projects: DataModel
}

const ProjectsPreview: FC<Props> = ({ projects }) => {
  // categorizar por app, landing page
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

      <h3>{projects.body}</h3>
    </StyledContent>
  )
}

export default ProjectsPreview
