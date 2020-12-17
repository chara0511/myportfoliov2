import { FC } from 'react'
import styles from '../../../styles/Home.module.css'

const Layout: FC = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <main className={styles.main}>{children}</main>
      {/* <Footer/> */}
    </>
  )
}

export default Layout
