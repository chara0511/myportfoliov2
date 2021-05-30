import { FC } from 'react'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import { Logo } from '@components/icons'
import { UrlObject } from 'url'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const StyledLogoButton = styled.div`
  color: var(--big-stone);

  & svg {
    width: 5rem;
    height: 3rem;
  }
`

const StyledButton = styled.button`
  position: relative;
`

const StyledShadowAnimation = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  top: calc(50% - 7.5px);
  left: calc(38% - 7.5px);
  background-color: var(--big-stone);
  box-shadow: var(--athens-gray) 0px 0px 16px 4px;
  animation: 1500ms ${fadeIn} cubic-bezier(0.54, 0.04, 0.44, 1.01) infinite alternate none running;
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
          <StyledButton type="button" onClick={reload}>
            <Logo />
            <StyledShadowAnimation />
          </StyledButton>
        </a>
      </Link>
    </StyledLogoButton>
  )
}

export default LogoButton
