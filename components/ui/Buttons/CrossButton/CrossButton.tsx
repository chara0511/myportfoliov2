import { CrossIcon } from '@components/icons'
import { FC } from 'react'
import styled from 'styled-components'

const StyledCrossButton = styled.div`
  text-align: end;

  & svg {
    width: 3rem;
    height: 3rem;
  }
`

interface Props {
  onClose: () => void
}

const CrossButton: FC<Props> = ({ onClose }) => {
  return (
    <StyledCrossButton>
      <button aria-label="Cross Icon" type="button" onClick={() => onClose()}>
        <CrossIcon />
      </button>
    </StyledCrossButton>
  )
}

export default CrossButton
