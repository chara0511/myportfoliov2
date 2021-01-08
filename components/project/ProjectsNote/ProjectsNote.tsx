// import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { Icon } from '@components/common'
import { breakpoints, mixins } from 'styles'
import Ticker from 'react-ticker'

const StyledContent = styled.div`
  width: 100%;

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

  /* display: grid;
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
          transform: scale(1.075) rotateZ(-2deg);
        }
      }

      &.content1 {
        transform: rotateZ(6deg);
        right: 2rem;
        width: 175px;
        height: 175px;
        z-index: 12;

        ${mixins.flexCenter};

        &:hover {
          z-index: 99;
          transform: scale(1.025) rotateZ(2deg);
        }
      }

      &.content2 {
        width: 200px;
        height: 200px;
        right: 4rem;
        z-index: 24;

        ${mixins.flexCenter};

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
          transform: scale(1.1) rotateZ(-4deg);
        }
      }

      &.content3 {
        width: 250px;
        height: 250px;
        left: 1rem;
        top: -3rem;
        transform: rotateZ(-2deg);
        z-index: 49;

        ${mixins.flexCenter};

        &:hover {
          z-index: 99;
          transform: scale(1.05) rotateZ(2deg);
        }
      }

      &.image2 {
        top: -4rem;
        width: 200px;
        transform: rotateZ(14deg);
        box-shadow: none;

        &:hover {
          z-index: 99;
          transform: scale(1.05) rotateZ(10deg);
        }
      }

      & span {
        width: 1.25rem;
        position: absolute;
        top: 1rem;
        right: 1rem;
      }
    } */
`

const apps: { name: string }[] = [{ name: 'app1' }, { name: 'app2' }, { name: 'app3' }]

const ProjectsNote = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  })

  return (
    <StyledContent ref={ref}>
      {inView ? (
        <Ticker offset={80}>
          {() => (
            <StyledWrapper>
              {/* <a href="http://" target="_blank" rel="noopener noreferrer" className="block image1">
        <div>
          <Image
            alt={` screenshot`}
            src="/projects/weather.png"
            width={580}
            height={380}
            loading="eager"
            unoptimized
          />
        </div>
      </a> */}

              {/* <a href="http://" target="_blank" rel="noopener noreferrer" className="block image3">
        <div>
          <Image
            alt={` screenshot`}
            src="/projects/weather.png"
            width={580}
            height={380}
            loading="eager"
            unoptimized
          />
        </div>
      </a> */}

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

              {/* <a href="http://" target="_blank" rel="noopener noreferrer" className="block image2">
        <div>
          <Image
            alt={` screenshot`}
            src="/projects/weather.png"
            width={580}
            height={380}
            loading="eager"
            unoptimized
          />
        </div>
      </a> */}
            </StyledWrapper>
          )}
        </Ticker>
      ) : null}
    </StyledContent>
  )
}

export default ProjectsNote
