import styled from 'styled-components'
import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@components/icons'
import { mixins } from 'styles'

const StyledContent = styled.footer`
  width: 100%;
  text-align: center;
  padding: 1rem;
`

const StyledSocialLinks = styled.div`
  max-width: 275px;
  margin: auto;

  & ul {
    ${mixins.flexAround};

    & li {
      & svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: currentColor;
      }
    }
  }
`

const Footer = () => {
  return (
    <StyledContent>
      <StyledSocialLinks>
        <ul>
          <li>
            <a
              href="https://www.discord.com"
              aria-label="Github profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordIcon />
            </a>
          </li>
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
              href="https://twitter.com/charalopez0511"
              aria-label="Twitter profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </StyledSocialLinks>

      <div>
        <p>powered by Next.js</p>
      </div>
    </StyledContent>
  )
}

export default Footer
