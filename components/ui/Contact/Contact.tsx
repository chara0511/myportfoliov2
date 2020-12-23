import { FC } from 'react'
import styled from 'styled-components'
import { breakpoints, mixins } from 'styles'
import { StyledLink } from 'styles/utils'
import { Content } from '../context'

const StyledContent = styled.section`
  width: 100%;
  min-height: 75vh;
  padding: 3rem 0;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;

  ${mixins.flexEvenly};

  @media (min-width: ${breakpoints.md}) {
    width: 75%;
  }

  @media (min-width: ${breakpoints.xl}) {
    width: 50%;
  }
`

interface Props {
  contact?: Content
}

const Contact: FC<Props> = ({ contact }) => {
  return (
    <StyledContent id="contact">
      <h2>{contact?.header}</h2>
      <p>{contact?.body}</p>
      <StyledLink href="mailto:jccharalopez@gmail.com" forwardedAs="mailto:jccharalopez@gmail.com">
        {contact?.link}
      </StyledLink>
      <p>{contact?.footer}</p>
    </StyledContent>
  )
}

export default Contact
