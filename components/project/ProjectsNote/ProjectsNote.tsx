import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import Ticker from 'react-ticker'
import styled from 'styled-components'
import { Icon } from '@components/common'
import { breakpoints, mixins } from 'styles'

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem 0;
  position: relative;

  & .smImage {
    width: 150px;
    position: absolute;
    transform: rotateZ(-2deg);
  }

  & .mdImage {
    width: 175px;
    position: absolute;
    transform: rotateZ(4deg);
    right: 0px;
  }

  & .lgImage {
    width: 200px;
    position: absolute;
    transform: rotateZ(0);
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
  }

  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`

const StyledWrapper = styled.div`
  width: 100%;
  flex-direction: row;
  padding: 2rem 0;
  min-height: 100%;

  ${mixins.flexCenter};

  & .block {
    width: 200px;
    height: 200px;
    margin: auto 4rem;
    position: relative;
    box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.5);
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
  }
`

const apps: { name: string }[] = [{ name: 'app1' }, { name: 'app2' }, { name: 'app3' }]

const ProjectsNote = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  })

  return (
    <StyledContent ref={ref}>
      {apps.map((app, i) => (
        // eslint-disable-next-line no-nested-ternary
        <div key={app.name} className={`${i === 0 ? 'smImage' : i === 1 ? 'mdImage' : 'lgImage'}`}>
          <Image
            alt={` screenshot`}
            src="/projects/weather.png"
            width={580}
            height={380}
            loading="eager"
            unoptimized
          />
        </div>
      ))}

      {inView ? (
        <Ticker offset={80}>
          {() => (
            <StyledWrapper>
              {apps.map((app) => (
                <a
                  key={app.name}
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block content3"
                >
                  <h3>{app.name}</h3>
                  <span>
                    <Icon name="external link" />
                  </span>
                </a>
              ))}
            </StyledWrapper>
          )}
        </Ticker>
      ) : null}
    </StyledContent>
  )
}

export default ProjectsNote
