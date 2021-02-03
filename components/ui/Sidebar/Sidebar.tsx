import { FC, useEffect, useRef } from 'react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import type { BodyScrollOptions } from 'body-scroll-lock'
import Portal from '@reach/portal'
import styled from 'styled-components'
import { CrossButton } from '@components/ui'
import { useOnClickOutside } from '@lib/hooks'
import { breakpoints } from 'styles'
import { Links } from '@components/links'

const StyledContent = styled.aside`
  background-color: var(--blue-zodiac);
  box-shadow: var(--sidebar-shadow);
  padding: 1rem;
  position: fixed;
  height: 100vh;
  width: min(75vw, 375px);
  top: 0;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.sm}) {
    padding: 1rem 3rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`

interface Props {
  open: boolean
  onClose: () => void
}

const options: BodyScrollOptions = {
  reserveScrollBarGap: true,
}

const Sidebar: FC<Props> = ({ open = false, onClose }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current, options)
      } else {
        enableBodyScroll(ref.current)
      }
    }

    return () => clearAllBodyScrollLocks()
  }, [open])

  const handleOnClickOutSide = () => {
    onClose()
  }

  // click outside
  useOnClickOutside(ref, handleOnClickOutSide)

  return (
    <Portal>
      {open ? (
        <StyledContent ref={ref}>
          <CrossButton onClose={onClose} />

          <Links open={open} view="sidebar" onClose={onClose} />
        </StyledContent>
      ) : null}
    </Portal>
  )
}

export default Sidebar
