import { FC, useEffect, useRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Title } from '@components/common'
import { DataModel } from '@lib/data'
import sr, { srConfig } from '@utils/sr'
import { mixins } from 'styles'
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
      <p>{projects.bodyPrev}</p>

      <p>{projects.footerPrev}</p>

      <StyledLink href="/projects" forwardedAs="/projects">
        {projects.linkPrev}
      </StyledLink>
    </StyledContent>
  )
}

export default ProjectsPreview
