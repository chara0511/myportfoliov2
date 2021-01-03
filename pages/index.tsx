import { GetStaticPropsContext } from 'next'
import { AboutPreview, ContactPreview, Hero, ProjectsPreview } from '@components/ui'
import { getMyData } from '@lib/fetchData'

export interface DataModel {
  body: string
  bodyPrev: string
  link: string
  linkPrev: string
  headerAfter: string
  headerBefore: string
  header: string
  footer: string
  footerPrev: string
  apps: {
    appName: string
    appDescription: string
    technologies: { name: string }[]
  }[]
}

// ?https://www.typescriptlang.org/docs/handbook/utility-types.html
export type Section = 'about' | 'contact' | 'hero' | 'projects'

export interface Data {
  myData: Record<Section, DataModel>
}

export default function Home({ myData }: Data) {
  // *console.log(myData)

  return (
    <>
      <Hero hero={myData.hero} />
      <AboutPreview about={myData.about} />
      <ProjectsPreview projects={myData.projects} />
      <ContactPreview contact={myData.contact} />
    </>
  )
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
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
