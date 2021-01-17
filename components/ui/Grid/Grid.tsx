import { FC } from 'react'
import Ticker from 'react-ticker'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { ProjectImage, ProjectNote } from '@components/project'
import { breakpoints } from 'styles'

const StyledContent = styled.div<{ view: string }>`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  position: relative;
  display: ${({ view }) => (view === 'desktop' ? 'none' : 'block')};

  @media (min-width: ${breakpoints.lg}) {
    display: ${({ view }) => (view === 'mobile' ? 'none' : 'block')};
    max-width: 625px;
  }
`

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

interface Props {
  apps: { name: string }[]
  view?: string
}

const Grid: FC<Props> = ({ apps, view = 'desktop' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  })

  return (
    <StyledContent ref={ref} view={view}>
      {apps.map((app, i) => (
        <ProjectImage key={app.name} app={app} i={i} />
      ))}

      {inView && view === 'mobile' ? (
        <Ticker offset={80}>
          {() => (
            <StyledWrapper>
              {apps.map((app) => (
                <ProjectNote key={app.name} app={app} />
              ))}
            </StyledWrapper>
          )}
        </Ticker>
      ) : null}

      {view === 'desktop' ? (
        <StyledWrapper>
          {apps.map((app, i) => (
            <ProjectNote key={app.name} app={app} i={i} />
          ))}
        </StyledWrapper>
      ) : null}
    </StyledContent>
  )
}

export default Grid
