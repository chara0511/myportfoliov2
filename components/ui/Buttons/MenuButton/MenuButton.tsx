import { FC } from 'react'
import styled from 'styled-components'
import { MenuIcon } from '@components/icons'
import { breakpoints } from 'styles'

const StyledMenuButton = styled.div`
  & svg {
    width: 3rem;
    height: 3rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`
interface Props {
  onOpen: () => void
}

const MenuButton: FC<Props> = ({ onOpen }) => {
  return (
    <StyledMenuButton>
      <button aria-label="Menu Icon" type="button" onClick={() => onOpen()}>
        <MenuIcon />
      </button>
    </StyledMenuButton>
  )
}

export default MenuButton
