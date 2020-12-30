const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  i18n: {
    localeDetection: false,
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})
