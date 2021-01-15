import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import Portal from '@reach/portal'
import styled, { keyframes } from 'styled-components'
import { ChevronUpIcon } from '@components/icons'
import { breakpoints, mixins } from 'styles'

const bounce = keyframes`
 50% {
    transform: translateY(-5px);
  }
`

const StyledContent = styled.nav`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 12;

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

  &:hover,
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
  border: 2px solid var(--blue-zodiac);
  margin: 0.5rem 0 0;

  &:hover,
  &:focus {
    outline: none;
    border-color: var(--curious-blue);

    & .bounce > svg {
      animation: 0.9s ${bounce} var(--easing) infinite;
    }
  }

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
              <span className="bounce">
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
