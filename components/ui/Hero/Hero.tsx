import styled from 'styled-components'
import { mixins } from 'styles'

const StyledContent = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0;
  flex-direction: column;

  & h3 {
    color: ${({ theme }) => theme.colors.white};
  }

  ${mixins.flexLeft};
`

const Hero = () => {
  return (
    <StyledContent>
      <h1>Hey there 👋</h1>
      <h2>I&apos;m</h2>
      <h3>Juan Carlos Chara</h3>
      <h4>I code things on the web.</h4>
      <p>
        I&apos;m a Peruvian based front‑end developer focused on crafting clean and user‑friendly
        experiences, I am passionate about building excellent software that improves the lives of
        those around me.
      </p>
    </StyledContent>
  )
}

export default Hero
