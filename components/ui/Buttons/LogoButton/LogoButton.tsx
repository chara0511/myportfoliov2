import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Logo } from '@components/icons'
import { UrlObject } from 'url'
import { breakpoints } from 'styles'

const StyledLogoButton = styled.div`
  color: var(--big-stone);
  padding-left: 1rem;

  @media (min-width: ${breakpoints.sm}) {
    padding-left: 3rem;
  }

  @media (min-width: ${breakpoints.md}) {
    padding-left: 6rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    padding-left: 6rem;
  }
`

interface Props {
  as?: string | UrlObject | undefined
  href: string
  className?: string
  reload: () => void
}

const LogoButton: FC<Props> = ({ as, className, href, reload }) => {
  return (
    <StyledLogoButton>
      <Link href={href} as={as} passHref>
        <a className={className}>
          <button type="button" onClick={reload}>
            <Logo />
          </button>
        </a>
      </Link>
    </StyledLogoButton>
  )
}

export default LogoButton
