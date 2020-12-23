import { Layout } from '@components/common'
import { About, Contact, Hero, Projects } from '@components/ui'
import { State, useUI } from '@components/ui/context'

export default function Home() {
  const { data }: State = useUI()

  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Contact contact={data?.user.contact} />
      </Layout>
    </>
  )
}
