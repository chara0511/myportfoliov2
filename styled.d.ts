import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: {
      card: string
      default: string
    }
    fontSizes: {
      '2xs': string
      xs: string
      sm: string
      base: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
      '5xl': string
      '6xl': string
      '7xl': string
    }
    lineHeights: {
      '2xs': string
      xs: string
      sm: string
      base: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
      '5xl': string
      '6xl': string
      '7xl': string
    }
    shadows: {
      header: string
    }
    transition: string
  }
}
