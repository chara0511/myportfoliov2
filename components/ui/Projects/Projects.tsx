import { FC, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { DataModel } from '@lib/models'
import { Icon, Title } from '@components/common'
import { breakpoints, mixins } from 'styles'

const StyledDescription = styled.section`
  width: 100%;
  min-height: 75vh;
  padding: 5rem 0 2.5rem;
  flex-direction: column;

  ${mixins.flexLeft};
`
const StyledBody = styled.div`
  @media (min-width: ${breakpoints.lg}) {
    width: 90%;
  }

  @media (min-width: ${breakpoints['2xl']}) {
    width: 100%;
  }
`

const StyledTechnologies = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 250px));
  row-gap: 1rem;
  margin: 1.5rem auto;
  font-family: var(--font-mono);
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.15rem;
  justify-content: center;
  text-transform: capitalize;

  & > li {
    display: flex;
    align-items: center;

    & > span {
      margin-right: 0.5rem;

      & > svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`

const StyledProjects = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 2.5rem 0 5rem;

  & > h3 {
    text-transform: capitalize;
    font-weight: 500;
  }
`

const StyledGrid = styled.div`
  display: grid;
  column-gap: 1rem;
  row-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin: 3rem 0;

  @media (min-width: ${breakpoints.md}) {
    column-gap: 1.5rem;
    row-gap: 3rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`
interface Props {
  projects: DataModel
}

const Projects: FC<Props> = ({ projects, children }) => {
  const [inProp, setInProp] = useState(false)

  useEffect(() => {
    setInProp(true)
  }, [])

  return (
    <CSSTransition in={inProp} timeout={400} classNames="fade">
      <>
        <StyledDescription>
          <Title title={projects.header} />
          <br />

          <StyledBody>
            <p>{projects.bodyPrev}</p>
            <br />
            <p>Here are a few technologies I&apos;ve been working with recently :</p>
          </StyledBody>

          <StyledTechnologies>
            {projects.technologies.map((tech) => (
              <li key={tech.name}>
                <span>
                  <Icon name={tech.name} />
                </span>
                {tech.name}
              </li>
            ))}
          </StyledTechnologies>
        </StyledDescription>

        <StyledProjects id="projects">
          <h3>{projects.headerAfter}</h3>
          <StyledGrid>{children}</StyledGrid>
        </StyledProjects>
      </>
    </CSSTransition>
  )
}

export default Projects
