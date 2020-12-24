// import { useRouter } from 'next/router'
import { FC } from 'react'

// interface LOCALE_DATA {
//   name: string
//   img: {
//     filename: string
//     alt: string
//   }
// }

// const LOCALES_MAP: Record<string, LOCALE_DATA> = {
//   es: {
//     name: 'Español',
//     img: {
//       filename: 'flag-es-co.svg',
//       alt: 'Bandera Colombiana',
//     },
//   },
//   'en-US': {
//     name: 'English',
//     img: {
//       filename: 'flag-en-us.svg',
//       alt: 'US Flag',
//     },
//   },
// }

const I18nWidget: FC = () => {
  /* const { locale, locales, defaultLocale = */
  // 'en-US', asPath: currentPath } = useRouter()

  // console.log(locale, locales, defaultLocale, currentPath)

  // const options = locales?.filter((val) => val !== locale)
  // const currentLocale = locale || defaultLocale

  return <div>from I18nWidget.tsx</div>
}

export default I18nWidget
