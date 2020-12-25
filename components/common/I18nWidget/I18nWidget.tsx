import { ChevronUpIcon } from '@components/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import styled from 'styled-components'
import { breakpoints, mixins } from 'styles'

const StyledContent = styled.nav`
  border: 1px solid red;
  position: absolute;
  bottom: 5rem;
  right: 0;

  & button {
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid blue;
    font-family: ${({ theme }) => theme.fontMono};
    padding: 0.5rem;
    border-radius: 9999px;

    ${mixins.flexBetween};

    & img {
      width: 28px;
      height: 28px;
    }

    & .visible {
      display: none;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    max-width: 150px;
    width: 100%;

    & button {
      width: 100%;
      border-radius: ${({ theme }) => theme.borderRadius.default};

      & img {
        width: 24px;
        height: 24px;
      }

      & .visible {
        display: block;
      }
    }
  }
`

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
      filename: 'flag-es-pe.svg',
      alt: 'Bandera Peruana',
    },
  },
  'en-US': {
    name: 'English',
    img: {
      filename: 'flag-en-us.svg',
      alt: 'EEUU Flag',
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
    <StyledContent>
      <div>
        <button aria-label="Language selector" type="button" onClick={() => setDisplay(!display)}>
          <img
            src={`/${LOCALES_MAP[currentLocale].img.filename}`}
            alt={LOCALES_MAP[currentLocale].img.alt}
          />
          <span className="visible">{LOCALES_MAP[currentLocale].name}</span>
          {options && (
            <span className="cursor-pointer">
              <ChevronUpIcon className="visible" />
            </span>
          )}
        </button>
      </div>
      <div className="absolute top-0 right-0">
        {options?.length && display ? (
          <div>
            <div>
              <button type="button" onClick={() => setDisplay(false)} aria-label="Close panel">
                x
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
    </StyledContent>
  )
}

export default I18nWidget
