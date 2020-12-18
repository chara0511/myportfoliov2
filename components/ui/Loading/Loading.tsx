import Logo from '@components/icons/Logo'
import anime from 'animejs'
import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import s from './Loading.module.css'

// interface TitleProps {
//   readonly isMounted: boolean;
// };

// const StyledLogo = styled.div<TitleProps>`
//   opacity: ${({ isMounted }) => (isMounted ? '1' : '0')};
// `

const StyledLogo = styled.div<{ withDelay: boolean }>`
  opacity: ${({ withDelay }) => (withDelay ? '1' : '0')};

  & svg {
    width: 7rem;
    height: 7rem;
  }
`
interface Props {
  isLoading: () => void
}

const Loading: FC<Props> = ({ isLoading }) => {
  const animate = () => {
    anime
      .timeline({
        complete: () => isLoading(),
      })
      .add({
        targets: '#JC #J',
        duration: 800,
        easing: 'easeInOutQuad',
        translateY: [-300, 0],
        scale: [1],
        opacity: [0, 1],
      })
      .add({
        targets: '#JC #C',
        duration: 800,
        easing: 'easeInOutQuad',
        translateY: [300, 0],
        scale: [1],
        opacity: [0, 1],
      })
      .add({
        targets: '#JC #poligon path',
        delay: 500,
        duration: 2500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#JC',
        delay: 700,
        duration: 300,
        easing: 'easeInOutSine',
        opacity: 0,
        scale: [1, 0.1],
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutExpo',
        opacity: 0,
      })
  }

  const [withDelay, setWithDelay] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWithDelay(true)
    }, 100)
    animate()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className={`${s.content} loader`}>
      <StyledLogo withDelay={withDelay}>
        <Logo />
      </StyledLogo>
    </div>
  )
}

export default Loading
