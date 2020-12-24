import { About, Contact, Hero, Projects } from '@components/ui'
import { State, useUI } from '@components/ui/context'

export default function Home() {
  const { user }: State = useUI()

  return (
    <>
      <Hero />
      <About />
      <Projects projects={user?.projects} />
      <Contact contact={user?.contact} />
    </>
  )
}
