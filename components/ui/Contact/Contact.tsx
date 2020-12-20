import styled from 'styled-components'
import { mixins } from 'styles'

const StyledContent = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0;
  flex-direction: column;

  ${mixins.flexLeft};
`

const Contact = () => {
  return (
    <StyledContent id="contact">
      <p>
        Feel free to get in touch with me. I&apos;m always open to discussing new projects, creative
        ideas or opportunities to be part of your visions.
      </p>
      <p>Have a nice day</p>
    </StyledContent>
  )
}

export default Contact
