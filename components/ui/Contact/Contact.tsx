import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { DataModel } from '@lib/models'

import { Title } from '@components/common'
import { breakpoints, mixins } from 'styles'
import { StyledBigLink } from 'styles/utils'
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

  return (
    <CSSTransition in={inProp} timeout={300} classNames="fade">
      <StyledContent id="contact">
        <Title title={contact.header} />
        <p>{contact.body}</p>
        <StyledBigLink
          href="mailto:jccharalopez@gmail.com"
          forwardedAs="mailto:jccharalopez@gmail.com"
        >
          {contact.link}
        </StyledBigLink>
        <p>{contact.footer}</p>
      </StyledContent>
    </CSSTransition>
  )
}

export default Contact
