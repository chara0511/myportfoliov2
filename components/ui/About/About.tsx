import Image from 'next/image'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import sr, { srConfig } from '@utils/sr'
import { breakpoints, mixins } from 'styles'
import { StyledTitle } from 'styles/utils'

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

    @media (min-width: ${breakpoints.lg}) {
      margin: 0 3rem;
    }
  }
`

const About = () => {
  const ref = useRef<HTMLElement | any>(null)

  useEffect(() => {
    sr().reveal(ref.current, srConfig())
  }, [])

  return (
    <StyledContent id="about" ref={ref}>
      <StyledTitle>
        <h2>about</h2>
        <div className="borders">
          <span className="border" />
          <span className="border" />
        </div>
      </StyledTitle>
      <StyledWrapper>
        <div className="formattedImg">
          <Image
            loading="eager"
            className="rounded"
            alt="Avatar"
            unoptimized
            src="/me.jpg"
            width={300}
            height={300}
          />
        </div>

        <div className="description">
          <div>
            <h3>Bachelor of Systems Engineering.</h3>
            <p>
              I&apos;m a Peruvian front‑end developer focused on crafting clean and user‑friendly
              experiences, I&apos;m passionate about building excellent software that improves the
              lives of those around me.
            </p>
          </div>
        </div>
      </StyledWrapper>
    </StyledContent>
  )
}

export default About
