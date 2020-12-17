import Head from 'next/head'
import { Loading } from '@components/ui'
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
        <Loading />
      </Layout>
    </div>
  )
}
