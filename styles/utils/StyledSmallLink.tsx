import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import mixins from 'styles/mixins'
import { UrlObject } from 'url'
import { Icon } from '@components/common'

interface Props {
  as?: string | UrlObject | undefined
  href: string
  className?: string
}

const StyledLink: FC<Props> = ({ as, children, className, href }) => {
  return (
    <Link href={href} as={as} passHref>
      <a className={className}>
        <span>{children}</span>
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

  ${mixins.smallLink};
`
