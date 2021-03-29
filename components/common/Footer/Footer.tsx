import styled from 'styled-components'

import { mixins } from 'styles'
import { Icon } from '..'

const StyledContent = styled.footer`
  width: 100%;
  text-align: center;
  padding: 2rem;
`

const StyledSocialLinks = styled.div`
  max-width: 275px;
  margin: auto;

  & > ul {
    margin-bottom: 1.5rem;

    ${mixins.flexAround};

    & > li {
      & svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`

const StyledCredit = styled.div`
  font-family: var(--font-mono);
  font-size: ${({ theme }) => theme.fontSizes.sm};

  & a {
    padding: 0.5rem;
  }
`

interface SOCIAL_DATA {
  name: string
  url: string
}

const SOCIAL_LINKS: SOCIAL_DATA[] = [
  { name: 'github', url: 'https://github.com/jcarlos0511' },
  { name: 'instagram', url: 'https://www.instagram.com/jccharalopez' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/jccharalopez' },
  { name: 'twitter', url: 'https://twitter.com/jncarloschara' },
]

const Footer = () => {
  return (
    <StyledContent>
      <StyledSocialLinks>
        <ul>
          {SOCIAL_LINKS.map((link) => (
            <li key={link.name}>
              <a
                aria-label={`${link.name} profile`}
                href={link.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon name={link.name} />
              </a>
            </li>
          ))}
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
