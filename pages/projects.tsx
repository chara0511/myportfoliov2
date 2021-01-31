import { GetStaticPropsContext } from 'next'
import { Projects } from '@components/ui'
import { ProjectCard } from '@components/project'
import { getMyData } from '@lib/fetchData'
import { Data } from '@lib/data'

export default function ProjectsPage({ myData }: Data) {
  return (
    <Projects projects={myData.projects}>
      {myData.projects.apps
        .sort((a, b) =>
          new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime() ? -1 : 0,
        )
        .map((app) => (
          <ProjectCard app={app} key={app.appName} />
        ))}
    </Projects>
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
