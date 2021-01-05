import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import styled from 'styled-components'
import { ChevronUpIcon } from '@components/icons'
import { breakpoints, mixins } from 'styles'
import Portal from '@reach/portal'

const StyledContent = styled.nav`
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  @media (min-width: ${breakpoints.sm}) {
    right: 3rem;
  }

  @media (min-width: ${breakpoints.md}) {
    right: 6rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    right: 10rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    right: 12rem;
  }

  &:focus {
    outline: none;
  }
`

const StyledDropUpMenuBtn = styled.button`
  ${mixins.flexBetween};

  ${mixins.smallLink};
  border-radius: 9999px;
  padding: 0.5rem;

  & > img {
    width: 28px;
    height: 28px;
  }

  & .visible {
    display: none;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 112px;
    border: none;

    & .visible {
      display: block;
    }
  }
`

const StyledDropUpMenu = styled.li`
  border: 1px solid transparent;
`

const StyledWidgetBtn = styled(StyledDropUpMenuBtn)`
  border: 1px solid ${({ theme }) => theme.colors.secondaryBg};
  margin-top: 0.5rem;

  @media (min-width: ${breakpoints.md}) {
    border-radius: ${({ theme }) => theme.borderRadius.default};
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
    <Portal>
      <StyledContent>
        <div>
          {options?.length && display ? (
            <>
              {/* <div>
              <button type="button" onClick={() => 
                setDisplay(false)} aria-label="Close panel">
                x
              </button>
            </div> */}
              <ul>
                {options.map((locale) => (
                  <StyledDropUpMenu key={locale}>
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
                  </StyledDropUpMenu>
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
    </Portal>
  )
}

export default I18nWidget
