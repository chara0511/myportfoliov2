import styled from 'styled-components'
import { GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@components/icons'
import { mixins } from 'styles'

const StyledContent = styled.footer`
  width: 100%;
  text-align: center;
  padding: 0 1rem 2rem;
`

const StyledSocialLinks = styled.div`
  max-width: 275px;
  margin: auto;

  & ul {
    margin-bottom: 1.5rem;

    ${mixins.flexAround};

    & li {
      & svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`

const StyledCredit = styled.div`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  & a {
    padding: 0.5rem;
  }
`

const Footer = () => {
  return (
    <StyledContent>
      <StyledSocialLinks>
        <ul>
          <li>
            <a
              href="https://github.com/jcarlos0511"
              aria-label="Discord profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jccharalopez"
              aria-label="Instagram profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jccharalopez"
              aria-label="LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/jncarloschara"
              aria-label="Twitter profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </StyledSocialLinks>

      <StyledCredit>
        <span>Coded with 💙 by</span>
        <a href="https://github.com/jcarlos0511" target="_blank" rel="noopener noreferrer">
          Chara-
        </a>
      </StyledCredit>
    </StyledContent>
  )
}

export default Footer
