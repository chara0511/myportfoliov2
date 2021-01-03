import { FC, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { DataModel } from 'pages'
import sr, { srConfig } from '@utils/sr'
import { breakpoints, mixins } from 'styles'
import { StyledLink, StyledTitle } from 'styles/utils'

const StyledContent = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 5rem 0;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;

  ${mixins.flexEvenly};

  & h2 {
    text-transform: capitalize;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 75%;
  }

  @media (min-width: ${breakpoints.xl}) {
    width: 50%;
  }
`

interface Props {
  contact: DataModel
}

const Contact: FC<Props> = ({ contact }) => {
  const ref = useRef<HTMLElement | any>(null)

  useEffect(() => {
    sr().reveal(ref.current, srConfig())
  }, [])

  return (
    <StyledContent id="contact" ref={ref}>
      <StyledTitle>
        <h2>{contact.header}</h2>
        <div className="borders">
          <span className="border" />
          <span className="border" />
        </div>
      </StyledTitle>
      <p>{contact.body}</p>
      <StyledLink href="mailto:jccharalopez@gmail.com" forwardedAs="mailto:jccharalopez@gmail.com">
        {contact.link}
      </StyledLink>
      <p>{contact.footer}</p>
    </StyledContent>
  )
}

export default Contact
