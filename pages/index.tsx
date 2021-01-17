import { GetStaticPropsContext } from 'next'
import { AboutPreview, ContactPreview, Grid, Hero, ProjectsPreview } from '@components/ui'
import { Data } from '@lib/data'
import { getMyData } from '@lib/fetchData'

const apps: { name: string }[] = [{ name: 'app1' }, { name: 'app2' }, { name: 'app3' }]

export default function Home({ myData }: Data) {
  // *console.log(myData)
  const { hero, about, projects, contact } = myData

  return (
    <>
      <Hero hero={hero} />
      <AboutPreview about={about} />
      <ProjectsPreview projects={projects}>
        <Grid apps={apps} view="mobile" />
        <Grid apps={apps} />
      </ProjectsPreview>
      <ContactPreview contact={contact} />
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
