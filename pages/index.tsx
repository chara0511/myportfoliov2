import { GetStaticPropsContext } from 'next'
import { AboutPreview, ContactPreview, Grid, Hero, ProjectsPreview } from '@components/ui'
import { Data } from '@lib/models'
import { getMyData } from '@lib/fetchData'

export default function Home({ myData }: Data) {
  const { hero, about, projects, contact } = myData

  return (
    <>
      <Hero hero={hero} />
      <AboutPreview about={about} />
      <ProjectsPreview projects={projects}>
        <Grid apps={projects.apps} view="mobile" />
        <Grid apps={projects.apps} />
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
