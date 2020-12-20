import { Layout } from '@components/common'
import { About, Contact, Hero, Projects } from '@components/ui'

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </>
  )
}
