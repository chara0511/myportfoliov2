import { FC, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { Title } from '@components/common'
import { DataModel } from '@lib/data'
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
      margin: 0 4rem;
    }
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

        <div className="description">
          <div>
            <p>{about.headerBefore}</p>
            <p>{about.headerAfter}</p>
            <br />
            <p>{about.bodyPrev}</p>
          </div>
        </div>
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
