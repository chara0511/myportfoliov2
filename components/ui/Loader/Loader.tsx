import { FC, useEffect, useState } from 'react'
import anime from 'animejs'
import styled from 'styled-components'
import Logo from '@components/icons/Logo'
import { mixins } from 'styles'

// interface TitleProps {
//   readonly isMounted: boolean;
// };

// const StyledLogo = styled.div<TitleProps>`
//   opacity: ${({ isMounted }) => (isMounted ? '1' : '0')};
// `

const StyledContent = styled.div`
  min-height: 100vh;
  ${mixins.flexCenter}
`

const StyledLogo = styled.div<{ withDelay: boolean }>`
  color: ${({ theme }) => theme.colors.background};
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
        targets: '#JC #J',
        duration: 800,
        easing: 'easeInOutQuad',
        translateY: [250, 0],
        translateX: [-250, 0],
        scale: [1],
        opacity: [0, 1],
      })
      .add({
        targets: '#JC #C',
        duration: 800,
        easing: 'easeInOutQuad',
        translateY: [-250, 0],
        translateX: [250, 0],
        scale: [1],
        opacity: [0, 1],
      })
      .add({
        targets: '#JC #poligon path',
        // delay: 500,
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
    setWithDelay(true)
    animate()
  }, [])

  return (
    <StyledContent className="loader">
      <StyledLogo withDelay={withDelay}>
        <Logo />
      </StyledLogo>
    </StyledContent>
  )
}

export default Loader
