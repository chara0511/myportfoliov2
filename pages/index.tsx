import Head from 'next/head'
import { Layout } from '@components/common'
import s from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={s.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <p>Hero</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </Layout>
    </div>
  )
}
