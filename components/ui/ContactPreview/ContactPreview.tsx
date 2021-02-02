import { FC, useEffect, useRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { DataModel } from '@lib/data'
import sr, { srConfig } from '@utils/sr'
import { Title } from '@components/common'
import { breakpoints, mixins } from 'styles'
import { StyledSmallLink } from 'styles/utils'

const StyledContent = styled.section`
  width: 100%;
  min-height: 75vh;
  padding: 3rem 0;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;

  ${mixins.flexEvenly};

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
      <Title>
        <Link href="/contact">
          <a>
            <h2>{contact.headerPrev}</h2>
          </a>
        </Link>
      </Title>
      <p>{contact.bodyPrev}</p>
      <StyledSmallLink href="/contact" forwardedAs="/contact">
        {contact.linkPrev}
      </StyledSmallLink>
    </StyledContent>
  )
}

export default ContactPreview
