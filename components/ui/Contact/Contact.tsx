import { FC } from 'react'
import styled from 'styled-components'
import { DataModel } from 'pages'
import { breakpoints, mixins } from 'styles'
import { StyledContactLink, StyledTitle } from 'styles/utils'

const StyledContent = styled.section`
  width: 100%;
  min-height: 75vh;
  padding: 3rem 0;
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
  return (
    <StyledContent id="contact">
      <StyledTitle>
        <h2>{contact.header}</h2>
        <div className="borders">
          <span className="border" />
          <span className="border" />
        </div>
      </StyledTitle>
      <p>{contact.body}</p>
      <StyledContactLink
        href="mailto:jccharalopez@gmail.com"
        forwardedAs="mailto:jccharalopez@gmail.com"
      >
        {contact.link}
      </StyledContactLink>
      <p>{contact.footer}</p>
    </StyledContent>
  )
}

export default Contact
