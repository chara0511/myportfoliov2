import { FC } from 'react'
import Link from 'next/link'
import { UrlObject } from 'url'
import styled from 'styled-components'
import mixins from 'styles/mixins'

interface Props {
  as?: string | UrlObject | undefined
  href: string
  className?: string
}

const StyledBigLink: FC<Props> = ({ as, children, className, href }) => {
  return (
    <Link href={href} as={as} passHref>
      <a className={className}>
        <span>{children}</span>
      </a>
    </Link>
  )
}

export default styled(StyledBigLink)`
  margin: 1rem 0;

  ${mixins.bigLink};

  &:hover {
    border-color: var(--curious-blue);
  }
`
