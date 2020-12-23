import { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useUI } from '@components/ui/context'
import { Footer, Header } from '@components/common'
import { Loader, Sidebar } from '@components/ui'
import { mixins } from 'styles'
import firebase from '../../../firebase/clientApp'

const StyledContainer = styled.div`
  min-height: 100vh;
  flex-direction: column;

  ${mixins.flexCenter};
`

const StyledMainContainer = styled.main<{ displaySidebar: boolean }>`
  padding: 0 1rem;
  flex: 1;
  flex-direction: column;
  width: 100%;
  filter: ${({ displaySidebar }) => (displaySidebar ? 'blur(8px)' : 'none')};

  ${mixins.flexCenter};
`

const Layout: FC = ({ children }) => {
  const { displaySidebar, getUser } = useUI()
  const [state, setState] = useState(true)

  const getData = () => {
    const db = firebase.firestore()
    const profileCollection = db.collection('/portfolio/BxDIHJYzmMOgRDktUaQ7/data/')

    profileCollection.doc('bCl4wXaAe8R93mKkL8TO').onSnapshot((snapshot) => {
      getUser(snapshot.data())
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {state ? (
        <Loader isLoading={() => setState(false)} />
      ) : (
        <StyledContainer>
          <Header reload={() => setState((prev) => !prev)} />
          <Sidebar />
          <StyledMainContainer displaySidebar={displaySidebar}>{children}</StyledMainContainer>
          <Footer />
        </StyledContainer>
      )}
    </>
  )
}

export default Layout
