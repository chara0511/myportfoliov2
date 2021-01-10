import { FC, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { DataModel } from '@lib/data'
import sr, { srConfig } from '@utils/sr'
import { Title } from '@components/common'
import { breakpoints, mixins } from 'styles'
import { StyledLink } from 'styles/utils'
import { CSSTransition } from 'react-transition-group'

const StyledContent = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 4rem 0;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;

  ${mixins.flexEvenly};

  @media (min-width: ${breakpoints.md}) {
    width: 75%;
  }

  @media (min-width: ${breakpoints.xl}) {
    width: 50%;
  }
`

interface Props {
  contact: DataModel
}

const Contact: FC<Props> = ({ contact }) => {
  const [inProp, setInProp] = useState(false)

  useEffect(() => {
    setInProp(true)
  }, [])
  const ref = useRef<HTMLElement | any>(null)

  useEffect(() => {
    sr().reveal(ref.current, srConfig())
  }, [])

  return (
    <CSSTransition in={inProp} timeout={250} classNames="fade">
      <StyledContent id="contact">
        <Title title={contact.header} />
        <p ref={ref}>{contact.body}</p>
        <StyledLink
          href="mailto:jccharalopez@gmail.com"
          forwardedAs="mailto:jccharalopez@gmail.com"
        >
          {contact.link}
        </StyledLink>
        <p>{contact.footer}</p>
      </StyledContent>
    </CSSTransition>
  )
}

export default Contact
