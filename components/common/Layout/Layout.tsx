import { FC, useState } from 'react'
import { Loading } from '@components/ui'
import styles from '../../../styles/Home.module.css'

const Layout: FC = ({ children }) => {
  const [state, setState] = useState(true)
  return (
    <>
      {!state ? (
        <>
          <p>Navbar</p>
          <button type="button" onClick={() => setState((prev) => !prev)}>
            logo
          </button>
          <main className={styles.main}>{children}</main>
          <p>footer</p>
        </>
      ) : (
        <Loading isLoading={() => setState(false)} />
      )}
    </>
  )
}

export default Layout
