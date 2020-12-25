import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

interface LOCALE_DATA {
  name: string
  img: {
    filename: string
    alt: string
  }
}

const LOCALES_MAP: Record<string, LOCALE_DATA> = {
  es: {
    name: 'Español',
    img: {
      filename: 'flag-es-co.svg',
      alt: 'Bandera Colombiana',
    },
  },
  'en-US': {
    name: 'English',
    img: {
      filename: 'flag-en-us.svg',
      alt: 'US Flag',
    },
  },
}

const I18nWidget: FC = () => {
  const { locale, locales, defaultLocale = 'en-US', asPath: currentPath } = useRouter()
  const [display, setDisplay] = useState(false)

  // console.log({ locale, locales, defaultLocale, currentPath })

  const options = locales?.filter((val) => val !== locale)
  const currentLocale = locale || defaultLocale

  return (
    <div>
      <nav>
        <div>
          <button aria-label="Language selector" type="button" onClick={() => setDisplay(!display)}>
            <img
              className="block mr-2 w-5"
              src={`/${LOCALES_MAP[currentLocale].img.filename}`}
              alt={LOCALES_MAP[currentLocale].img.alt}
            />
            {options && <span className="cursor-pointer">x</span>}
          </button>
        </div>
        <div className="absolute top-0 right-0">
          {options?.length && display ? (
            <div>
              <div className="flex flex-row justify-end px-6">
                <button type="button" onClick={() => setDisplay(false)} aria-label="Close panel">
                  !
                </button>
              </div>
              <ul>
                {options.map((locale) => (
                  <li key={locale}>
                    <Link href={currentPath} locale={locale}>
                      <a>
                        <button type="button" onClick={() => setDisplay(false)}>
                          {LOCALES_MAP[locale].name}
                        </button>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  )
}

export default I18nWidget
