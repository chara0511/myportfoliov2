import { GetStaticPropsContext } from 'next'
import { AboutPreview, ContactPreview, Hero, ProjectsPreview } from '@components/ui'
import { Data } from '@lib/data'
import { getMyData } from '@lib/fetchData'

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
