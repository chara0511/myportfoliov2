import { GetStaticPropsContext } from 'next'
import { About } from '@components/ui'
import { getMyData } from '@lib/fetchData'
import { Data } from '@lib/models'

export default function AboutPage({ myData }: Data) {
  return <About about={myData.about} />
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
