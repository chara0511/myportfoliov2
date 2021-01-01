import sr, { srConfig } from '@utils/sr'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const StyledContent = styled.div`
  text-align: center;

  & h1 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    color: ${({ theme }) => theme.colors.fill};
    margin: 2rem 0;
  }
`

const Custom404 = () => {
  const ref = useRef<HTMLElement | any>(null)

  useEffect(() => {
    sr().reveal(ref.current, srConfig())
  }, [])

  return (
    <StyledContent ref={ref}>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Go Home</Link>
    </StyledContent>
  )
}
export default Custom404
