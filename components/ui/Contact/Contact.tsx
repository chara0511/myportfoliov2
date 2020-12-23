import { FC } from 'react'
import styled from 'styled-components'
import { mixins } from 'styles'
import { StyledLink } from 'styles/utils'
import { Content } from '../context'

const StyledContent = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0;
  flex-direction: column;
  text-align: center;

  ${mixins.flexEvenly};
`

interface Props {
  contact?: Content
}

const Contact: FC<Props> = ({ contact }) => {
  return (
    <StyledContent id="contact">
      <h2>let&apos;s get in touch</h2>
      <p>
        Feel free to get in touch with me. I&apos;m always open to discussing new projects, creative
        ideas or opportunities to be part of your visions.
      </p>
      <StyledLink href="mailto:jccharalopez@gmail.com" forwardedAs="mailto:jccharalopez@gmail.com">
        send me a message
      </StyledLink>
      <p>😄 have a nice day.</p>
      <p>{contact?.header}</p>
    </StyledContent>
  )
}

export default Contact
