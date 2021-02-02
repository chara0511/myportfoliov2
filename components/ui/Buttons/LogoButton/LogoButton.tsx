import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Logo } from '@components/icons'
import { UrlObject } from 'url'

const StyledLogoButton = styled.div`
  color: var(--big-stone);

  & svg {
    width: 5rem;
    height: 3rem;
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
