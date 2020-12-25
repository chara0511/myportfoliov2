import { GetStaticPropsContext } from 'next'
import { About, Contact, Hero, Projects } from '@components/ui'
import { getMyData } from '@lib/fetchData'

export interface Content {
  body: string
  link: string
  header: string
  footer: string
  apps: {
    appName: string
    appDescription: string
    technologies: { name: string }[]
  }[]
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html
type Section = 'about' | 'hero' | 'projects' | 'contact'

export interface Data {
  myData: Record<Section, Content>
}

export default function Home({ myData }: Data) {
  // console.log(myData)

  return (
    <>
      <Hero />
      <About />
      <Projects projects={myData.projects} />
      <Contact contact={myData.contact} />
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const myData = await getMyData(locale!)

  if (!myData) {
    return { notFound: true }
  }

  return {
    props: {
      myData,
    },
  }
}
