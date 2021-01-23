/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  className: string
  href: string
}

const StyledSidebarLink: FC<Props> = ({ className, href, children }) => {
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

export default styled(StyledSidebarLink)`
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: var(--font-mono);
  font-weight: 600;
  padding: 0.5rem;
  width: 100%;
  color: var(--polo-blue);
  text-transform: capitalize;
  transform: translateY(0rem);
  transition: ${({ theme }) => theme.transition};
  letter-spacing: 0.1rem;
  text-align: center;

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

  &:hover,
  &:focus {
    color: var(--athens-gray);
    transform: translateY(-0.7rem);
    outline: none;

    & .borders .border {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  &.active {
    color: var(--athens-gray);
    transform: translateY(-0.7rem);

    & .borders .border {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`
