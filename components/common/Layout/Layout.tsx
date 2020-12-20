import { FC, useState } from 'react'
import styled from 'styled-components'
import { useUI } from '@components/ui/context'
import { Footer, Header } from '@components/common'
import { Loader, Sidebar } from '@components/ui'
import { mixins } from 'styles'

const StyledContainer = styled.div`
  min-height: 100vh;
  flex-direction: column;

  ${mixins.flexCenter};
`

const StyledMain = styled.main<{ displaySidebar: boolean }>`
  padding: 0 1rem;
  flex: 1;
  flex-direction: column;
  width: 100%;
  filter: ${({ displaySidebar }) => (displaySidebar ? 'blur(8px)' : 'none')};

  ${mixins.flexCenter};
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
          <Sidebar />
          <StyledMain displaySidebar={displaySidebar}>{children}</StyledMain>

          <Footer />
        </StyledContainer>
      )}
    </>
  )
}

export default Layout
