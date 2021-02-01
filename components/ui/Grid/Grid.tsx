import { FC } from 'react'
import Ticker from 'react-ticker'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { ProjectImage, ProjectNote } from '@components/project'
import { breakpoints } from 'styles'
import { AppModel } from '@lib/data'

const StyledContent = styled.div<{ view: string }>`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 1rem 0;
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
  padding: 2rem 0;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

interface Props {
  apps: AppModel[]
  view?: string
}

const Grid: FC<Props> = ({ apps, view = 'desktop' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  })

  const sortedApps = apps
    .sort((a, b) => (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime() ? -1 : 0))
    .slice(0, 3)

  return (
    <StyledContent ref={ref} view={view}>
      {sortedApps.map((app, i) => (
        <ProjectImage key={app.appName} app={app} i={i} />
      ))}

      {inView && view === 'mobile' ? (
        <Ticker offset={80}>
          {() => (
            <StyledWrapper>
              {sortedApps.map((app) => (
                <ProjectNote key={app.appName} app={app} />
              ))}
            </StyledWrapper>
          )}
        </Ticker>
      ) : null}

      {view === 'desktop' ? (
        <StyledWrapper>
          {sortedApps.map((app, i) => (
            <ProjectNote key={app.appName} app={app} i={i} />
          ))}
        </StyledWrapper>
      ) : null}
    </StyledContent>
  )
}

export default Grid
