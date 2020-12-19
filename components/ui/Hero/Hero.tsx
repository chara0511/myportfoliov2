import styled from 'styled-components'
import { mixins } from 'styles'

const StyledContent = styled.section`
  width: 100%;
  min-height: 100vh;
  flex-direction: column;

  ${mixins.flexLeft};
`

const Hero = () => {
  return (
    <StyledContent>
      <h1>
        <small>Hey there 👋</small>
        <br />
        I&apos;m Juan Carlos Chara.
      </h1>
      <h2>I code things on the web.</h2>
    </StyledContent>
  )
}

export default Hero
