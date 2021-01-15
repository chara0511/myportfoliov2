import { FC } from 'react'
import styled from 'styled-components'
import { breakpoints } from 'styles'

const StyledMenuButton = styled.div<{ scrollY: number; open: boolean }>`
  background-color: ${({ open }) => (open ? 'var(--blue-zodiac)' : 'inherit')};
  width: min(75vw, 375px);
  padding: ${({ scrollY }) => (scrollY === 0 ? '1rem' : '0.5rem 1rem')};
  display: flex;
  justify-content: flex-end;

  @media (min-width: ${breakpoints.sm}) {
    padding: ${({ scrollY }) => (scrollY === 0 ? '1rem 3rem' : '0.5rem 3rem')};
  }

  @media (min-width: ${breakpoints.md}) {
    padding: ${({ scrollY }) => (scrollY === 0 ? '1rem 6rem' : '0.5rem 6rem')};
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: ${({ scrollY }) => (scrollY === 0 ? '1rem 0' : '0.5rem 0')};
  }

  & .hamburguer {
    display: flex;
    flex-direction: column;
    /*position: relative;
    z-index: 69;*/
    width: 42px;
    height: 42px;
    transition: ${({ theme }) => theme.transition};

    &:hover {
      opacity: 0.5;
    }

    & span {
      background-color: var(--curious-blue);
      width: 75%;
      height: 0.25rem;
      margin-top: 0.5rem;
      margin-right: auto;
      margin-left: auto;
      display: block;
      transition: all 0.4s var(--easing);
      transform-origin: 0 0;
      border-radius: ${({ theme }) => theme.borderRadius.default};

      &:nth-child(1) {
        margin-top: 0.45rem;
      }
    }
  }

  & .active span:nth-child(1) {
    transform: rotate(45deg) translate(7px, -2px);
    margin: auto;
  }

  & .active span:nth-child(2) {
    transform: scaleX(0);
    margin: auto;
  }

  & .active span:nth-child(3) {
    transform: rotate(-45deg) translate(4px, 1px);
    margin: auto;
  }
`

interface Props {
  y: number
  open: boolean
  onOpen: () => void
  onClose: () => void
}

const MenuButton: FC<Props> = ({ y, open, onOpen, onClose }) => {
  return (
    <StyledMenuButton open={open} scrollY={y}>
      <button
        aria-label="Menu"
        type="button"
        onClick={() => (open ? onClose() : onOpen())}
        className={`hamburguer ${open ? 'active' : ''}`}
      >
        <span />
        <span />
        <span />
      </button>
    </StyledMenuButton>
  )
}

export default MenuButton
