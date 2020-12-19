import { ManagedUIContext } from '@components/ui/context'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from 'styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ManagedUIContext>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ManagedUIContext>
  )
}

export default MyApp
