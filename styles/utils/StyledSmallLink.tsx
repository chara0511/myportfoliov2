import { FC } from 'react'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import { UrlObject } from 'url'
import { Icon } from '@components/common'
import mixins from 'styles/mixins'

const bounce = keyframes`
 50% {
    transform: translateX(5px);
  }
`
interface Props {
  as?: string | UrlObject | undefined
  href: string
  className?: string
}

const StyledLink: FC<Props> = ({ as, children, className, href }) => {
  return (
    <Link href={href} as={as} passHref>
      <a className={className} role="link">
        {children}
        <span>
          <Icon name="arrow" />
        </span>
      </a>
    </Link>
  )
}

export default styled(StyledLink)`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  flex-direction: row;

  & span > svg {
    margin-left: 0.25rem;
    width: 1.25rem;
    transition: all 160ms;
  }

  &:hover {
    border-color: var(--curious-blue);

    & span > svg {
      animation: 0.9s ${bounce} var(--easing) infinite;
    }
  }

  ${mixins.smallLink};
`
