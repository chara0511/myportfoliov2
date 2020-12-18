import { FC, useState } from 'react'
import styled from 'styled-components'
import { Footer, Header } from '@components/common'
import { Loader, Sidebar } from '@components/ui'
import { mixins } from 'styles'

const StyledContainer = styled.div`
  min-height: 100vh;
  flex-direction: column;

  ${mixins.flexCenter};
`

const StyledMain = styled.main`
  padding: 5rem 1rem;
  flex: 1;
  flex-direction: column;
  width: 100%;

  ${mixins.flexCenter};
`

const Layout: FC = ({ children }) => {
  const [state, setState] = useState(true)
  return (
    <>
      {state ? (
        <Loader isLoading={() => setState(false)} />
      ) : (
        <StyledContainer>
          <Header />
          <Sidebar />
          <StyledMain>{children}</StyledMain>
          <button type="button" onClick={() => setState((prev) => !prev)}>
            logo
          </button>
          <Footer />
        </StyledContainer>
      )}
    </>
  )
}

export default Layout
