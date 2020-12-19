import styled from 'styled-components'
import { mixins } from 'styles'

const StyledContent = styled.section`
  width: 100%;
  min-height: 100vh;
  flex-direction: column;

  ${mixins.flexLeft};
`

const Contact = () => {
  return <StyledContent id="contact">From Contact.tsx</StyledContent>
}

export default Contact
