import styled from 'styled-components'
import { mixins } from 'styles'

const StyledContent = styled.section`
  width: 100%;
  min-height: 100vh;
  flex-direction: column;

  ${mixins.flexLeft};
`

const About = () => {
  return <StyledContent id="about">From About.tsx</StyledContent>
}

export default About
