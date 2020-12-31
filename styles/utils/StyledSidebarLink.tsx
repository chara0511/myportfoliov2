import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { UrlObject } from 'url'

interface Props {
  as?: string | UrlObject | undefined
  href: string
  className?: string
  handleSidebar: () => void
}

const StyledSidebarLink: FC<Props> = ({ as, children, className, href, handleSidebar }) => {
  return (
    <Link href={href} as={as} passHref>
      <a className={className}>
        <button type="button" onClick={handleSidebar}>
          {children}
        </button>
      </a>
    </Link>
  )
}

export default styled(StyledSidebarLink)`
  margin-bottom: 1.5rem;

  & button {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-family: ${({ theme }) => theme.fontMono};
    padding: 0 0.5rem;
    width: 100%;
    height: 40px;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
    transform: translateY(0rem);
    transition: ${({ theme }) => theme.transition};
    letter-spacing: 0.15rem;

    &::after {
      content: '';
      opacity: 0;
      display: block;
      border: 1px solid ${({ theme }) => theme.colors.fill};
      border-radius: ${({ theme }) => theme.borderRadius.default};
      margin-top: 0.5rem;
      transition: ${({ theme }) => theme.transition};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      transform: translateY(-0.7rem);

      &::after {
        opacity: 1;
      }
    }
  }
`
