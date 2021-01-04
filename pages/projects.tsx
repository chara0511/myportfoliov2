import { GetStaticPropsContext } from 'next'
import { Projects } from '@components/ui'
import { getMyData } from '@lib/fetchData'
import { Data } from '@lib/data'

export default function ProjectsPage({ myData }: Data) {
  return <Projects projects={myData.projects} />
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
