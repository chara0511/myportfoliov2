import { FC, useEffect, useRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { DataModel } from 'pages'
import sr, { srConfig } from '@utils/sr'
import { breakpoints, mixins } from 'styles'
import { StyledContactLink, StyledTitle } from 'styles/utils'

const StyledContent = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;

  ${mixins.flexEvenly};

  & h2 {
    text-transform: capitalize;
  }

  @media (min-width: ${breakpoints.sm}) {
    width: 75%;
  }

  @media (min-width: ${breakpoints.xl}) {
    width: 50%;
  }
`

interface Props {
  contact: DataModel
}

const ContactPreview: FC<Props> = ({ contact }) => {
  const ref = useRef<HTMLElement | any>(null)

  useEffect(() => {
    sr().reveal(ref.current, srConfig())
  }, [])

  return (
    <StyledContent id="contact" ref={ref}>
      <StyledTitle>
        <Link href="/contact">
          <a>
            <h2>{contact.header}</h2>
          </a>
        </Link>
        <div className="borders">
          <span className="border" />
          <span className="border" />
        </div>
      </StyledTitle>
      <p>{contact.bodyPrev}</p>
      <StyledContactLink href="/contact" forwardedAs="/contact">
        {contact.linkPrev}
      </StyledContactLink>
    </StyledContent>
  )
}

export default ContactPreview
