import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      aside: string
      background: string
      text: string
    }
    fontSizes: {
      xs: string
      sm: string
      base: string
      lg: string
      xl: string
    }
    lineHeights: {
      xs: string
      sm: string
      base: string
      lg: string
      xl: string
    }
  }
}
