import { FC } from 'react'
import styled from 'styled-components'
import { breakpoints } from 'styles'

const StyledMenuButton = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  width: 75vw;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;

  @media (min-width: ${breakpoints.sm}) {
    right: 3rem;
  }

  @media (min-width: ${breakpoints.md}) {
    right: 6rem;
  }

  & .hamburguer {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 69;
    width: 42px;
    height: 42px;
    transition: ${({ theme }) => theme.transition};

    &:hover {
      opacity: 0.5;
    }

    & span {
      background-color: ${({ theme }) => theme.colors.fill};
      width: 75%;
      height: 0.25rem;
      margin-top: 0.5rem;
      margin-right: auto;
      margin-left: auto;
      display: block;
      transition: all 0.4s ease;
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
  open: boolean
  onOpen: () => void
  onClose: () => void
}

const MenuButton: FC<Props> = ({ open, onOpen, onClose }) => {
  return (
    <StyledMenuButton>
      <button
        aria-label="menu"
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
