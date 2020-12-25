import { ChevronUpIcon } from '@components/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import styled from 'styled-components'
import { breakpoints, mixins } from 'styles'

const StyledContent = styled.nav`
  position: absolute;
  bottom: 1rem;
  right: 0;
`

const StyledDropUpMenuBtn = styled.button`
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.secondaryBg};
  font-family: ${({ theme }) => theme.fontMono};
  padding: 0.5rem;
  border-radius: 9999px;
  width: 100%;

  ${mixins.flexBetween};

  :focus {
    outline: none;
  }

  & img {
    width: 28px;
    height: 28px;
  }

  & .visible {
    display: none;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 112px;

    & .visible {
      display: block;
    }
  }
`

const StyledWidgetBtn = styled(StyledDropUpMenuBtn)`
  border: 2px solid ${({ theme }) => theme.colors.secondaryBg};
  margin-top: 0.5rem;

  @media (min-width: ${breakpoints.md}) {
    width: 150px;
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
        {options?.length && display ? (
          <>
            {/* <div>
              <button type="button" onClick={() => setDisplay(false)} aria-label="Close panel">
                x
              </button>
            </div> */}
            <ul>
              {options.map((locale) => (
                <li key={locale}>
                  <Link href={currentPath} locale={locale}>
                    <a>
                      <StyledDropUpMenuBtn type="button" onClick={() => setDisplay(false)}>
                        <img
                          src={`/${LOCALES_MAP[locale].img.filename}`}
                          alt={LOCALES_MAP[locale].img.alt}
                        />
                        <span className="visible">{LOCALES_MAP[locale].name}</span>
                      </StyledDropUpMenuBtn>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
      <div>
        <StyledWidgetBtn
          aria-label="Language selector"
          type="button"
          onClick={() => setDisplay(!display)}
        >
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
        </StyledWidgetBtn>
      </div>
    </StyledContent>
  )
}

export default I18nWidget
