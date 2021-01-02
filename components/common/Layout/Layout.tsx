import { FC, useState } from 'react'
import styled from 'styled-components'
import { useUI } from '@components/ui/context'
import { Footer, Header } from '@components/common'
import { Loader } from '@components/ui'
import { breakpoints, mixins } from 'styles'

const StyledContainer = styled.div`
  min-height: 100vh;
  flex-direction: column;

  ${mixins.flexCenter};
`

const StyledMainContainer = styled.main<{ displaySidebar: boolean }>`
  padding: 0 1rem;
  max-width: 1100px;
  margin: 0 auto;
  flex: 1;
  flex-direction: column;
  width: 100%;
  filter: ${({ displaySidebar }) => (displaySidebar ? 'blur(4px)' : 'none')};

  ${mixins.flexCenter};

  @media (min-width: ${breakpoints.sm}) {
    padding: 0 3rem;
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 0 6rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: 0;
  }
`

const Layout: FC = ({ children }) => {
  const { displaySidebar } = useUI()
  const [state, setState] = useState(true)

  return (
    <>
      {state ? (
        <Loader isLoading={() => setState(false)} />
      ) : (
        <StyledContainer>
          <Header reload={() => setState((prev) => !prev)} />
          <StyledMainContainer displaySidebar={displaySidebar}>{children}</StyledMainContainer>
          <Footer />
        </StyledContainer>
      )}
    </>
  )
}

export default Layout
