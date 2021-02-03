import { FC, useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { DataModel } from '@lib/data'
import sr, { srConfig } from '@utils/sr'
import { Title } from '@components/common'
import { breakpoints, mixins } from 'styles'

const StyledContent = styled.section`
  width: 100%;
  min-height: 75vh;
  padding: 5rem 0;
`

const StyledWrapper = styled.div`
  margin: 2rem 0;
  flex-direction: column;

  ${mixins.flexCenter};

  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
  }

  & .formattedImg {
    flex: 0 200px;
    width: 200px;
    filter: drop-shadow(0px 8px 16px #17375b);

    @media (min-width: ${breakpoints.md}) {
      width: 225px;
      flex: 0 225px;
    }

    @media (min-width: ${breakpoints.xl}) {
      width: 250px;
      flex: 0 250px;
    }

    & .rounded {
      border-radius: 50%;
    }
  }

  & .description {
    flex: 1;
    width: 100%;
    margin: 2rem 0 0;

    & a {
      color: var(--athens-gray);
      font-weight: 600;
    }

    @media (min-width: ${breakpoints.lg}) {
      margin: 0 4rem;
    }
  }
`
interface Props {
  about: DataModel
}

const About: FC<Props> = ({ about }) => {
  const [inProp, setInProp] = useState(false)

  useEffect(() => {
    setInProp(true)
  }, [])

  const ref = useRef<HTMLElement | any>(null)

  useEffect(() => {
    sr().reveal(ref.current, srConfig())
  }, [])

  return (
    <CSSTransition in={inProp} timeout={250} classNames="fade">
      <StyledContent id="about">
        <Title title={about.header} />
        <StyledWrapper>
          <div className="formattedImg">
            <Image
              priority
              quality="65"
              loading="eager"
              className="rounded"
              alt="Avatar"
              unoptimized
              src="/me.jpg"
              width={300}
              height={300}
            />
          </div>

          <div className="description" ref={ref}>
            <div>
              <p>{`${about.headerBefore} ${about.headerAfter}`}</p>
              <br />
              <p>
                {about.bodyBefore}
                <a href="https://www.unac.edu.pe" target="_blank" rel="noopener noreferrer">
                  {about.keyword1}
                </a>
                {` - `}
                {about.bodyAfter}
              </p>

              <br />
              <p>
                {about.bodyPrev} {about.bodyPart1}
                <a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer">
                  {about.keyword2}
                </a>
                , {about.bodyPart2}
                <a
                  href="https://www.freecodecamp.org/learn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {about.keyword3}
                </a>
                . {about.bodyPart3}
                <a href="https://devchallenges.io" target="_blank" rel="noopener noreferrer">
                  {about.keyword4}
                </a>
                {` & `}
                <a
                  href="https://www.frontendmentor.io/solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {about.keyword5}
                </a>
                .
              </p>
              <br />
              <p>{about.body}</p>
              <br />
              <p>{about.footer}</p>
            </div>
          </div>
        </StyledWrapper>
      </StyledContent>
    </CSSTransition>
  )
}

export default About
