import { GetStaticPropsContext } from 'next'
import { About } from '@components/ui'
import { getMyData } from '@lib/fetchData'
// import { Data } from 'pages'

// export default function AboutPage({ myData }: Data) {
export default function AboutPage() {
  // console.log(myData)
  return <About />
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
