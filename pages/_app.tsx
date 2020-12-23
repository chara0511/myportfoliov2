import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from 'styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <ManagedUIContext>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ManagedUIContext>
    </>
  )
}

export default MyApp
