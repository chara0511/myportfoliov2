import { GetStaticPropsContext } from 'next'
import { Contact } from '@components/ui'
import { getMyData } from '@lib/fetchData'
import { Data } from 'pages'

export default function ContactPage({ myData }: Data) {
  return <Contact contact={myData.contact} />
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
