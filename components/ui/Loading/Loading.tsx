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

const StyledLogo = styled.div<{ isMounted: boolean }>`
  opacity: ${({ isMounted }) => (isMounted ? '1' : '0')};
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
        targets: '#JC #poligon path',
        delay: 500,
        duration: 2500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#JC #J',
        duration: 800,
        easing: 'easeInOutQuart',
        opacity: [0, 1],
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#JC #C',
        duration: 1300,
        easing: 'easeInOutBack',
        opacity: [0, 1],
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#JC',
        delay: 700,
        duration: 300,
        easing: 'easeInOutExpo',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 500,
        easing: 'easeInOutExpo',
        opacity: 0,
      })
  }

  const [state, setState] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(true)
    }, 50)
    animate()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className={`${s.content} loader`}>
      <StyledLogo isMounted={state}>
        <Logo />
      </StyledLogo>
    </div>
  )
}

export default Loading
