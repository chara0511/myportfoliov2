import Head from 'next/head'
import { Layout } from '@components/common'
import { About, Contact, Hero, Projects } from '@components/ui'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </>
  )
}
