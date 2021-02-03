import { FC, useEffect, useState } from 'react'
import anime from 'animejs'
import styled from 'styled-components'
import Logo from '@components/icons/Logo'
import { mixins } from 'styles'

const StyledContent = styled.div`
  /* overflow-y: hidden; */
  min-height: 100vh;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;

  ${mixins.flexCenter}
`

// ?other way
/* interface TitleProps {
  readonly withDelay: boolean
}

const StyledLogo = styled.div<TitleProps>`
  opacity: ${({ withDelay }) => (withDelay ? '1' : '0')};
` */

const StyledLogo = styled.div<{ withDelay: boolean }>`
  color: var(--big-stone);
  opacity: ${({ withDelay }) => (withDelay ? '1' : '0')};

  & svg {
    width: 7rem;
    height: 7rem;
  }
`
interface Props {
  isLoading: () => void
}

const Loader: FC<Props> = ({ isLoading }) => {
  const animate = () => {
    anime
      .timeline({
        complete: () => isLoading(),
      })
      .add({
        targets: '#logo',
        // delay: 100,
        duration: 250,
        easing: 'easeInOutSine',
        opacity: [0, 1],
        scale: [0, 1],
      })
      .add({
        targets: '#logo .letter',
        easing: 'easeInOutSine',
        // duration: 1000,
        opacity: [0, 1],
        delay: (el, i) => 425 + 100 * i,
      })
      .add({
        targets: '#logo .letter',
        easing: 'easeInOutSine',
        // duration: 500,
        opacity: [1, 0],
        delay: (el, i) => 125 + 100 * i,
      })
      .add({
        targets: '#logo',
        // delay: 200,
        duration: 400,
        easing: 'easeInOutQuad',
        translateY: [0, '-40vh'],
        translateX: [0, '-32vw'],
        scale: [1],
        opacity: [1, 0],
      })
      .add({
        targets: '.loader',
        duration: 10,
        easing: 'easeInOutExpo',
        opacity: 0,
      })
  }

  const [withDelay, setWithDelay] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWithDelay(true)
      animate()
    }, 10)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <StyledContent className="loader">
      <StyledLogo withDelay={withDelay}>{withDelay && <Logo />}</StyledLogo>
    </StyledContent>
  )
}

export default Loader
