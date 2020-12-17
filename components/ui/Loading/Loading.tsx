import Logo from '@components/icons/Logo'
import anime from 'animejs'
import { useEffect } from 'react'

const Loading = () => {
  const animate = () => {
    anime({
      targets: '#logo path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay(el, i) {
        return i * 250
      },
      direction: 'alternate',
      loop: true,
    })
  }

  useEffect(() => {
    animate()
  }, [])

  return <Logo />
}

export default Loading
