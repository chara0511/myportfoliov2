import { FC, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { Title } from '@components/common'
import { DataModel } from '@lib/models'
import sr, { srConfig } from '@utils/sr'
import { breakpoints, mixins } from 'styles'
import { StyledSmallLink } from 'styles/utils'

const StyledContent = styled.section`
  width: 100%;
  min-height: 75vh;
  padding: 3rem 0;
`

const StyledBody = styled.div`
  margin: 2rem 0;
  flex-direction: column;

  ${mixins.flexCenter};

  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
  }
`
const StyledImage = styled.div`
  flex: 0 200px;
  width: 200px;
  filter: drop-shadow(0px 8px 16px #17375b);
  border: 3px solid var(--curious-blue);
  border-radius: 9999px;
  display: inline-flex;

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
`

const StyledDescription = styled.div`
  flex: 1;
  width: 100%;
  margin: 2rem 0 0;

  @media (min-width: ${breakpoints.lg}) {
    margin: 0 4rem;
  }
`

const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (min-width: ${breakpoints.lg}) {
    margin: 0 4rem;
  }
`

interface Props {
  about: DataModel
}

const AboutPreview: FC<Props> = ({ about }) => {
  const ref = useRef<HTMLElement | any>(null)

  useEffect(() => {
    sr().reveal(ref.current, srConfig())
  }, [])

  return (
    <StyledContent id="about" ref={ref}>
      <Title>
        <Link href="/about">
          <a>
            <h2>{about.header}</h2>
          </a>
        </Link>
      </Title>
      <StyledBody>
        <StyledImage>
          <Image
            priority
            quality="65"
            loading="eager"
            className="rounded"
            alt="Avatar"
            src="/me.jpg"
            width={300}
            height={300}
          />
        </StyledImage>

        <StyledDescription>
          <div>
            <p>{about.headerBefore}</p>
            <p>{about.headerAfter}</p>
            <br />
            <p>{about.bodyPrev}</p>
          </div>
        </StyledDescription>
      </StyledBody>

      <StyledFooter>
        <StyledSmallLink href="/about" forwardedAs="/about">
          {about.linkPrev}
        </StyledSmallLink>
      </StyledFooter>
    </StyledContent>
  )
}

export default AboutPreview
