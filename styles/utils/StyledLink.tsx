/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  className: string
  href: string
}

const StyledLink: FC<Props> = ({ className, href, children }) => {
  return (
    <Link href={href}>
      <a className={className}>
        {children}
        <div className="borders">
          <span className="border" />
          <span className="border" />
        </div>
      </a>
    </Link>
  )
}

export default styled(StyledLink)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: var(--font-mono);
  font-weight: 600;
  color: var(--polo-blue);
  text-transform: capitalize;
  letter-spacing: 0.1rem;

  & .borders {
    display: block;

    & .border {
      margin-left: 1.75rem;
      display: block;
      width: 45px;
      height: 2px;
      background-color: var(--curious-blue);
      border-radius: ${({ theme }) => theme.borderRadius.default};
      transition: ${({ theme }) => theme.transition};
      transform: translateX(-30px);
      opacity: 0;
    }

    & .border:first-child {
      background-color: var(--curious-blue);
      margin: 0.25rem 0 0.75rem;
      transform: translateX(30px);
    }
  }

  &.active,
  &:hover,
  &:focus {
    color: var(--athens-gray);
    outline: none;

    & .borders .border {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`
